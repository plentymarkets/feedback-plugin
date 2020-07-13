<?php

namespace Feedback\Services;

use Plenty\Modules\Authorization\Services\AuthHelper;
use Plenty\Modules\Webshop\Contracts\LocalizationRepositoryContract;
use Plenty\Plugin\Http\Request;
use Feedback\Helpers\FeedbackCoreHelper;
use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Order\Contracts\OrderRepositoryContract;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Modules\Item\Attribute\Contracts\AttributeNameRepositoryContract;
use Plenty\Modules\Item\Attribute\Contracts\AttributeValueNameRepositoryContract;
use Plenty\Modules\Item\Item\Contracts\ItemRepositoryContract;
use Plenty\Modules\Item\Variation\Contracts\VariationRepositoryContract;
use Plenty\Plugin\Log\Loggable;


class FeedbackService
{
    use Loggable;

    /** @var Request $request */
    private $request;
    /** @var FeedbackCoreHelper $coreHelper */
    private $coreHelper;
    /** @var FeedbackRepositoryContract $feedbackRepository */
    private $feedbackRepository;
    /** @var FeedbackAverageRepositoryContract $feedbackAverageRepository */
    private $feedbackAverageRepository;
    /** @var AccountService $accountService */
    private $accountService;
    /** @var LocalizationRepositoryContract $localizationRepository */
    private $localizationRepository;

    const GUEST_ID = 0;
    const RELEASE_LEVEL_NONE = 0;
    const RELEASE_LEVEL_ONLY_AUTH = 1;
    const RELEASE_LEVEL_ALL = 2;

    public function __construct(
        Request $request,
        FeedbackCoreHelper $coreHelper,
        FeedbackRepositoryContract $feedbackRepository,
        FeedbackAverageRepositoryContract $feedbackAverageRepository,
        AccountService $accountService,
        LocalizationRepositoryContract $localizationRepository
    ) {
        $this->request = $request;
        $this->coreHelper = $coreHelper;
        $this->feedbackRepository = $feedbackRepository;
        $this->feedbackAverageRepository = $feedbackAverageRepository;
        $this->accountService = $accountService;
        $this->localizationRepository = $localizationRepository;
    }

    /**
     * Get data for the feedback-container Vue component
     * @param int $itemId
     * @return array
     */
    public function getCounts($itemId = -1)
    {
        // Coalesce to default value in case of missing itemId
        $average = (int)$itemId > 0 ? $this->feedbackAverageRepository->getFeedbackAverage($itemId) : [];

        if (empty($average)) {
            // Default values if the average table doesn't have any entry for this item/variation
            $counts = [
                'ratingsCountOf1' => 0,
                'ratingsCountOf2' => 0,
                'ratingsCountOf3' => 0,
                'ratingsCountOf4' => 0,
                'ratingsCountOf5' => 0,
                'ratingsCountTotal' => 0,
                'averageValue' => 0,
                'highestCount' => 0
            ];
        } else {
            $counts = [
                'ratingsCountOf1' => $average->ratingsCountOf1,
                'ratingsCountOf2' => $average->ratingsCountOf2,
                'ratingsCountOf3' => $average->ratingsCountOf3,
                'ratingsCountOf4' => $average->ratingsCountOf4,
                'ratingsCountOf5' => $average->ratingsCountOf5
            ];

            $highestCount = max($counts);
            $counts['ratingsCountTotal'] = $average->ratingsCountTotal;
            $counts['averageValue'] = $average->averageValue;
            $counts['highestCount'] = $highestCount;
        }

        $data['counts'] = $counts;

        return $data;
    }

    /**
     * Get data for the feedback-average Vue component
     * @param $item
     * @return array
     * @deprecated To be removed in the next major release
     */
    public function getFeedbackAverageDataSingleItem($item = [])
    {
        $itemId = $item['documents'][0]['data']['item']['id'] ?? -1;
        $average = (int)$itemId > 0 ? $this->feedbackAverageRepository->getFeedbackAverage($itemId) : [];

        $counts['averageValue'] = empty($average) ? 0 : $average->averageValue;
        $data['counts'] = $counts;

        $showEmptyRatingsInCategoryView = $this->coreHelper->configValueAsBool(
            FeedbackCoreHelper::KEY_SHOW_EMPTY_RATINGS_IN_CATEGORY_VIEW
        );
        $data['options']['showEmptyRatingsInCategoryView'] = $showEmptyRatingsInCategoryView;

        return $data;
    }

    /**
     * Create a feedback entry in the db
     * @return mixed
     */
    public function create()
    {
        // Find out if current user is a contact or a guest (0 is guest, anything else is contact)
        $authHelper = pluginApp(AuthHelper::class);
        $accountService = $this->accountService;
        $creatorContactId = $authHelper->processUnguarded(
            function () use ($accountService) {
                return $accountService->getAccountContactId();
            }
        );

        // Check if accessKey for order is available
        if ($creatorContactId <= 0)
        {
            $orderId = $this->request->input('orderId');
            $accessKey = $this->request->input('accessKey');

            if(strlen($orderId) && strlen($accessKey))
            {
                $creatorContactId = $this->getUserIdFromOrder($orderId, $accessKey);
            }
        }

        $allowGuestFeedbacks = $this->coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_ALLOW_GUEST_FEEDBACKS);

        if (!$allowGuestFeedbacks && $creatorContactId == 0) {
            return 'Guests are not allowed to write feedbacks';
        }

        // Set options
        $options = [
            'feedbackRelationTargetId' => $this->request->input('targetId'),
            'feedbackRelationSources' => [
                [
                    'feedbackRelationSourceType' => 'contact',
                    'feedbackRelationSourceId' => $creatorContactId
                ]
            ],
            'commentRelationTargetType' => 'feedbackComment',
            'ratingRelationTargetType' => 'feedbackRating'
        ];

        // Check the type and set the target accordingly
        if ($this->request->input('type') === 'review') {
            $options['feedbackRelationTargetType'] = 'variation';

            // Limit the feedbacks count of a user per item
            $numberOfFeedbacks = (int)$this->request->input('options.numberOfFeedbacks');
            $autoreleaseFeedbacks = (int)$this->coreHelper->configValue(
                FeedbackCoreHelper::KEY_RELEASE_FEEDBACKS_AUTOMATICALLY
            );
            $options['isVisible'] = $this->determineVisibility($autoreleaseFeedbacks, $creatorContactId);
            $allowNoRatingFeedbacks = $this->request->input('options.allowNoRatingFeedbacks') === 'true';
            $allowFeedbacksOnlyIfPurchased = $this->request->input('options.allowFeedbacksOnlyIfPurchased') === 'true';

            if ($allowNoRatingFeedbacks && empty($this->request->input('ratingValue'))) {
                return 'Can\'t create review with no rating';
            }

            // The following checks cannot be applied to guests
            if ($creatorContactId != 0) {
                $hasPurchased = $this->hasPurchasedVariation($creatorContactId, $this->request->input('targetId'));

                if ($allowFeedbacksOnlyIfPurchased && !$hasPurchased) {
                    return 'Not allowed to create review without purchasing the item first';
                }

                if ($hasPurchased) {
                    $options['feedbackRelationSources'][] = [
                        'feedbackRelationSourceType' => 'orderItem',
                        'feedbackRelationSourceId' => $options['feedbackRelationTargetId']
                    ];
                }

                if (!empty($numberOfFeedbacks) && $numberOfFeedbacks != 0) {
                    // Get the feedbacks that this user created on this item
                    $countFeedbacksOfUserPerItem = $this->listFeedbacks(
                        1,
                        50,
                        [],
                        [
                            'sourceId' => $creatorContactId,
                            'targetId' => $options['feedbackRelationTargetId']
                        ]
                    )->getTotalCount();

                    if ($countFeedbacksOfUserPerItem >= $numberOfFeedbacks) {
                        return 'Too many reviews';
                    }
                }
            }

            $feedbackRepository = $this->feedbackRepository;
            $feedbackObject = array_merge($this->request->all(), $options);

            $result = $authHelper->processUnguarded(
                function () use ($feedbackRepository, $feedbackObject) {
                    return $feedbackRepository->createFeedback($feedbackObject);
                }
            );

            return $result;
        } elseif ($this->request->input('type') === 'reply') {
            $options['feedbackRelationTargetType'] = 'feedback';
            $options['isVisible'] = true;

            $feedbackRepository = $this->feedbackRepository;
            $feedbackObject = array_merge($this->request->all(), $options);

            $result = $authHelper->processUnguarded(
                function () use ($feedbackRepository, $feedbackObject) {
                    return $feedbackRepository->createFeedback($feedbackObject);
                }
            );

            return $result;
        }
    }

    /**
     * Delete a feedback entry in the db
     * @param $feedbackId
     * @return bool
     */
    public function delete($feedbackId)
    {
        $feedback = $this->feedbackRepository->getFeedback($feedbackId);

        // Check if frontend user is the creator
        if ($this->accountService->getAccountContactId() == $feedback->sourceRelation[0]->feedbackRelationSourceId) {
            return $this->feedbackRepository->deleteFeedback($feedbackId);
        }

        return false;
    }

    /**
     * Update a feedback entry in the db
     * @param $feedbackId
     * @return mixed
     */
    public function update($feedbackId)
    {
        $data = $this->request->all();
        $autorelease = (int)$this->coreHelper->configValue(FeedbackCoreHelper::KEY_RELEASE_FEEDBACKS_AUTOMATICALLY);
        $data['isVisible'] = $this->determineVisibility($autorelease);

        return $this->feedbackRepository->updateFeedback($data, $feedbackId);
    }

    /**
     * Get an array of feedbacks by pagination
     * @param $itemId
     * @param $page
     * @return array
     */
    public function paginate($itemId, $page)
    {
        $lang = $this->localizationRepository->getLanguage();
        $itemVariations = [];
        $itemDataList = [];

        try {
            $itemDataList = pluginApp(ItemRepositoryContract::class)->show(
                $itemId,
                ['id'],
                $lang,
                ['variations']
            );
        } catch (\Exception $e) {
            $this->getLogger(__METHOD__)->error(
                'Feedback::Debug.FeedbackService_itemDoesNotExistError',
                [
                    'code' => $e->getCode(),
                    'message' => $e->getMessage(),
                    'itemId' => $itemId
                ]
            );
        }

        foreach ($itemDataList['variations'] as $itemData) {
            $itemVariations[] = $itemData['id'];
        }

        $itemAttributes = [];
        foreach ($itemVariations as $itemVariation) {
            $variationAttributes = pluginApp(VariationRepositoryContract::class)->show(
                $itemVariation,
                ['variationAttributeValues' => true]
                ,
                '*'
            );

            $a[0] = $variationAttributes;
            $b[0] = $a;
            $actualVariationAttributes = $b[0][0]['variationAttributeValues'];

            foreach ($actualVariationAttributes as $variationAttribute) {
                $attributeName = pluginApp(AttributeNameRepositoryContract::class)->findOne(
                    $variationAttribute->attribute_id,
                    $lang
                );
                $attributeValue = pluginApp(AttributeValueNameRepositoryContract::class)->findOne(
                    $variationAttribute->value_id,
                    $lang
                );

                $itemAttributes[$itemVariation][$variationAttribute->attribute_id][$variationAttribute->value_id] = [
                    'attributeName' => $attributeName->name,
                    'attributeValue' => $attributeValue->name
                ];
            }
        }

        $page = isset($page) && $page != 0 ? $page : 1;
        $itemsPerPage = (int)$this->request->input('feedbacksPerPage');
        $with = [];
        $filters = [
            'isVisible' => 1,
            'itemId' => $itemId,
        ];

        if ($this->accountService->getAccountContactId() > 0) {
            $filters['hideSourceId'] = $this->accountService->getAccountContactId();
        }

        $feedbacks = $this->listFeedbacks(
            $page,
            $itemsPerPage,
            $with,
            $filters
        );
        $feedbackResults = $feedbacks->getResult();

        foreach ($feedbackResults as &$feedback) {
            if ($feedback->targetRelation->feedbackRelationType === 'variation') {
                $feedback->targetRelation->variationAttributes = json_decode(
                    $feedback->targetRelation->targetRelationName
                );
            }
        }

        return [
            'feedbacks' => $feedbackResults,
            'itemAttributes' => $itemAttributes,
            'pagination' => [
                'page' => $page,
                'lastPage' => $feedbacks->getLastPage(),
                'isLastPage' => $feedbacks->isLastPage()
            ]
        ];
    }

    /**
     * Get user data for the feedback plugin to work with
     * @param array $itemIds
     * @param array $variationIds
     * @return array
     */
    public function getAuthenticatedUserMulti($itemIds = [], $variationIds = [])
    {
        if ((!count($itemIds) || !count($variationIds))) {
            $itemIds = $this->request->get('itemIds', []);
            $variationIds = $this->request->get('variationIds', []);
        }

        $allowFeedbacksOnlyIfPurchased = $this->request->input('allowFeedbacksOnlyIfPurchased') === 'true';
        $numberOfFeedbacks = (int)$this->request->input('numberOfFeedbacks');

        $contactId = $this->accountService->getAccountContactId();

        if(!$contactId)
        {
            // Check for accessKey
            $accessKey = $this->request->input("accessKey");
            $orderId = $this->request->input("orderId");

            if(strlen($orderId) && strlen($accessKey))
            {
                $contactId = $this->getUserIdFromOrder($orderId, $accessKey);
            }
        }

        $isLoggedIn = !!$contactId;
        $hasPurchased = [];
        $limitReached = [];
        $userFeedbacks = [];

        if (count($variationIds)) {
            if ($isLoggedIn && $allowFeedbacksOnlyIfPurchased) {
                foreach ($variationIds as $variationId) {
                    $hasPurchased[$variationId] = $this->hasPurchasedVariation($contactId, $variationId);
                }
            } else {
                foreach ($variationIds as $variationId) {
                    // Not being logged in automatically counts as purchased for logic reasons
                    $hasPurchased[$variationId] = true;
                }
            }
        }

        if (count($itemIds)) {
            if ($isLoggedIn && $numberOfFeedbacks > 0) {
                foreach ($itemIds as $itemId) {
                    $limitReached[$itemId] = $this->isFeedbackLimitReached($itemId, $contactId, $numberOfFeedbacks);
                }
            } else {
                foreach ($itemIds as $itemId) {
                    $limitReached[$itemId] = false;
                }
            }
        }

        if ($isLoggedIn && count($itemIds) === 1 && count($variationIds) === 1) {
            $filters = [
                'itemId' => $itemId,
                'sourceId' => $contactId
            ];

            $feedbacks = $this->listFeedbacks(1, 50, [], $filters);
            $userFeedbacks = $feedbacks->getResult();

            foreach ($userFeedbacks as &$feedback) {
                if ($feedback->targetRelation->feedbackRelationType === 'variation') {
                    $feedback->targetRelation->variationAttributes = json_decode(
                        $feedback->targetRelation->targetRelationName
                    );
                }
            }
        }

        return [
            'id' => $contactId,
            'isLoggedIn' => $isLoggedIn,
            'limitReached' => $limitReached,
            'hasPurchased' => $hasPurchased,
            'feedbacks' => $userFeedbacks
        ];
    }

    /**
     * Function supports the legacy route to get data
     * @param $itemId
     * @param $variationId
     * @return array
     */
    public function getAuthenticatedUser($itemId, $variationId)
    {
        $result = $this->getAuthenticatedUserMulti([$itemId], [$variationId]);

        // Flatten arrays
        $result['limitReached'] = array_shift(array_values($result['limitReached']));
        $result['hasPurchased'] = array_shift(array_values($result['hasPurchased']));

        return $result;
    }

    /**
     * Calculate if the user has reached the maximum amount of feedbacks for the given itemId
     * @param $itemId
     * @param $contactId
     * @param $numberOfFeedbacks
     * @return bool
     */
    private function isFeedbackLimitReached($itemId, $contactId, $numberOfFeedbacks)
    {
        $filters = [
            'itemId' => $itemId,
            'sourceId' => $contactId
        ];

        $feedbacks = $this->listFeedbacks(1, $numberOfFeedbacks, [], $filters);
        $userFeedbacks = $feedbacks->getResult();

        foreach ($userFeedbacks as &$feedback) {
            if ($feedback->targetRelation->feedbackRelationType === 'variation') {
                $feedback->targetRelation->variationAttributes = json_decode(
                    $feedback->targetRelation->targetRelationName
                );
            }
        }

        $limitReached = $numberOfFeedbacks <= $feedbacks->getTotalCount();
        return $limitReached;
    }

    /**
     * Calculate if the user has purchased this variation
     * @param $contactId
     * @param $variationId
     * @return bool
     */
    private function hasPurchasedVariation($contactId, $variationId)
    {
        $allowFeedbacksOnlyIfPurchased = $this->request->input('allowFeedbacksOnlyIfPurchased') === 'true';
        $hasPurchased = true;

        if ($allowFeedbacksOnlyIfPurchased) {
            $orderRepository = pluginApp(OrderRepositoryContract::class);
            $orders = $orderRepository->allOrdersByContact($contactId);
            $purchasedVariations = [];

            foreach ($orders->getResult() as $order) {
                foreach ($order->orderItems as $orderItem) {
                    $purchasedVariations[] = $orderItem->itemVariationId;
                }
            }

            $hasPurchased = in_array($variationId, $purchasedVariations);
        }

        return $hasPurchased;
    }

    /**
     * Get the aggregateRating of all feedbacks for the given itemId
     * @param $itemId
     * @return mixed
     */
    public function getAverage($itemId)
    {
        if ((int)$itemId > 0) {
            $average = $this->feedbackAverageRepository->getFeedbackAverage($itemId);
        }

        if (empty($average)) {
            $counts['averageValue'] = 0;
            $counts['ratingsCountTotal'] = 0;
        } else {
            $counts['averageValue'] = $average->averageValue;
            $counts['ratingsCountTotal'] = $average->ratingsCountTotal;
        }

        return $counts;
    }

    /**
     * Get raw feedbacks from the database
     * @return \Plenty\Repositories\Models\PaginatedResult
     */
    private function listFeedbacks(int $page = 1, int $itemsPerPage = 50, array $with = [], array $filters = [])
    {
        return $this->feedbackRepository->listFeedbacks(
            $page, // page
            $itemsPerPage, // feedbacks per page
            $with, // with relations
            $filters // filters
        );
    }

    /**
     * Determine if a review is needed or not
     * releaseLevel is a value between 0 and 2
     * 0 = All feedbacks need a review
     * 1 = Only guest feedbacks need a review
     * 2 = No feedback needs a review
     *
     * @param int $releaseLevel
     * @param int $creatorId
     * @return bool
     */
    private function determineVisibility($releaseLevel, $creatorId = 1)
    {
        return ($releaseLevel === self::RELEASE_LEVEL_ONLY_AUTH && $creatorId !== self::GUEST_ID)
            || $releaseLevel === self::RELEASE_LEVEL_ALL;
    }

    private function getUserIdFromOrder($orderId, $accessKey)
    {
        /** @var OrderRepositoryContract $orderRepository */
        $orderRepository = pluginApp(OrderRepositoryContract::class);
        $order = $orderRepository->findOrderByAccessKey($orderId, $accessKey);

        if ($order !== null)
        {
            foreach ($order->relations as $relation) {
                if ($relation['referenceType'] === 'contact' && (int)$relation['referenceId'] > 0) {
                    return $relation['referenceId'];
                }
            }
        }

        return 0;
    }
}
