<?php
/**
 * Created by PhpStorm.
 * User: Cristian Benescu
 * Date: 06.09.17
 * Time: 13:00
 */

namespace Feedback\Services;


use Plenty\Plugin\Http\Request;
use Feedback\Helpers\FeedbackCoreHelper;
use IO\Services\SessionStorageService;
use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Order\Contracts\OrderRepositoryContract;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Modules\Item\Attribute\Contracts\AttributeNameRepositoryContract;
use Plenty\Modules\Item\Attribute\Contracts\AttributeValueNameRepositoryContract;
use Plenty\Modules\Item\Item\Contracts\ItemRepositoryContract;
use Plenty\Modules\Item\Variation\Contracts\VariationRepositoryContract;

class FeedbackService
{
    /** @var Request $request */
    private $request;
    /** @var FeedbackCoreHelper $coreHelper*/
    private $coreHelper;
    /** @var FeedbackRepositoryContract $feedbackRepository */
    private $feedbackRepository;
    /** @var FeedbackAverageRepositoryContract $feedbackAverageRepository */
    private $feedbackAverageRepository;
    /** @var AccountService $accountService */
    private $accountService;
    /** @var SessionStorageService $sessionStorage */
    private $sessionStorage;


    public function __construct(Request $request, FeedbackCoreHelper $coreHelper, FeedbackRepositoryContract $feedbackRepository, FeedbackAverageRepositoryContract $feedbackAverageRepository, AccountService $accountService, SessionStorageService $sessionStorage)
    {
        $this->request = $request;
        $this->coreHelper = $coreHelper;
        $this->feedbackRepository = $feedbackRepository;
        $this->feedbackAverageRepository = $feedbackAverageRepository;
        $this->accountService = $accountService;
        $this->sessionStorage = $sessionStorage;
    }

    /**
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Plenty\Repositories\Models\PaginatedResult
     */
    public function listFeedbacks(FeedbackRepositoryContract $feedbackRepository, int $page = 1, int $itemsPerPage = 50, array $with = [], array $filters = [])
    {
        return $feedbackRepository->listFeedbacks(
            $page, // page
            $itemsPerPage, // feedbacks per page
            $with, // with relations
            $filters // filters
        );
    }

    public function getFeedback($item)
    {
        $variationId = $item['documents'][0]['data']['variation']['id'];
        $itemId = $item['documents'][0]['data']['item']['id'];
        $systemLanguage = $this->sessionStorage->getLang();

        $itemVariations = [];
        $itemDatas = pluginApp(ItemRepositoryContract::class)->show($itemId, ['id'], $systemLanguage, ['variations']);
        foreach($itemDatas['variations'] as $itemData){
            $itemVariations[] = $itemData['id'];
        }

        $itemAttributes = [];
        foreach($itemVariations as $itemVariation){
            $variationAttributes = pluginApp(VariationRepositoryContract::class)->show($itemVariation,['variationAttributeValues' => true],'*');

            $a[0] = $variationAttributes;
            $b[0] = $a;
            $actualVariationAttributes = $b[0][0]['variationAttributeValues'];

            foreach($actualVariationAttributes as $variationAttribute){
                $attributeName = pluginApp(AttributeNameRepositoryContract::class)->findOne($variationAttribute->attribute_id, $systemLanguage);
                $attributeValue = pluginApp(AttributeValueNameRepositoryContract::class)->findOne($variationAttribute->value_id, $systemLanguage);

                $itemAttributes[$itemVariation][$variationAttribute->attribute_id][$variationAttribute->value_id] = [
                    'attributeName' => $attributeName->name,
                    'attributeValue' => $attributeValue->name
                ];
            }
        }

        // Details about the user currently authenticated
        $authenticatedContact = [
            'id' => $this->accountService->getAccountContactId(),
            'check' => $this->accountService->getIsAccountLoggedIn(),
            'hasPurchased' => false
        ];

        $options['systemLanguage'] = $systemLanguage;
        $options['itemAttributes'] = $itemAttributes;

        $options['timestampVisibility'] = $this->coreHelper->configValue(FeedbackCoreHelper::KEY_TIMESTAMP_VISIBILITY) == 'true' ? true : false;
        $options['allowNoRatingFeedback'] = $this->coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_NO_RATING_FEEDBACK) == 'true' ? true : false;

        $allowFeedbacksOnlyIfPurchased = $this->coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_FEEDBACKS_ONLY_IF_PURCHASED) == 'true' ? true : false;
        $options['allowFeedbacksOnlyIfPurchased'] = $allowFeedbacksOnlyIfPurchased;

        $limitFeedbacksPerUserPerItem = $this->coreHelper->configValue(FeedbackCoreHelper::KEY_MAXIMUM_NR_FEEDBACKS);

        $average = $this->feedbackAverageRepository->getFeedbackAverage($itemId);

        if($allowFeedbacksOnlyIfPurchased && $this->accountService->getIsAccountLoggedIn()) {

            // get variations bought
            $orders = pluginApp(OrderRepositoryContract::class)->allOrdersByContact($this->accountService->getAccountContactId());

            $purchasedVariations = [];

            foreach ($orders->getResult() as $order) {
                foreach ($order->orderItems as $orderItem) {
                    $purchasedVariations[] = $orderItem->itemVariationId;
                }
            }

            $authenticatedContact['hasPurchased'] = in_array($variationId, $purchasedVariations) ? true : false;
        }

        if(empty($average)){

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

        }else{

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


        if($authenticatedContact['check']){

            // Pagination settings for currently authenticated user's feedbacks
            $page = $this->request->get('page', 1);
            $itemsPerPage = $this->request->get('itemsPerPage', 50);

            $with = [];
            $filters = [
                'itemId' => $itemId,
                'sourceId' => $authenticatedContact['id']
            ];

            // List of currently authenticated user's feedbacks
            $feedbacks = $this->listFeedbacks($this->feedbackRepository, $page, $itemsPerPage, $with, $filters);
            $feedbackResults = $feedbacks->getResult();

            foreach($feedbackResults as &$feedback){
                if($feedback->targetRelation->feedbackRelationType == 'variation'){
                    $feedback->targetRelation->variationAttributes = json_decode($feedback->targetRelation->targetRelationName);
                }
            }

            if(!is_null($limitFeedbacksPerUserPerItem) && $limitFeedbacksPerUserPerItem != 0){
                $authenticatedContact['limitReached'] = $limitFeedbacksPerUserPerItem <= $feedbacks->getTotalCount() ? true : false;
            }else{
                $authenticatedContact['limitReached'] = false;
            }

            $data['feedbacks'] = $feedbackResults;

        }

        $data['options'] = $options;
        $data['counts'] = $counts;
        $data['authenticatedContact'] = $authenticatedContact;
        $data['item'] = $item;


        return $data;
    }
}
