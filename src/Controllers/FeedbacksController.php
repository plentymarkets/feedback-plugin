<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:38
 */

namespace Feedback\Controllers;

use Feedback\Helpers\FeedbackCoreHelper;
use Feedback\Services\FeedbackService;
use Illuminate\Support\Facades\Redirect;
use IO\Services\SessionStorageService;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Feedback\Models\Feedback;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Modules\Item\Attribute\Contracts\AttributeNameRepositoryContract;
use Plenty\Modules\Item\Attribute\Contracts\AttributeValueNameRepositoryContract;
use Plenty\Modules\Item\Item\Contracts\ItemRepositoryContract;
use Plenty\Modules\Item\Variation\Contracts\VariationRepositoryContract;
use Plenty\Modules\Order\Contracts\OrderRepositoryContract;
use Plenty\Plugin\Controller;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class FeedbacksController extends Controller
{

    /**
     * @param Request $request
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Plenty\Modules\Feedback\Models\Feedback
     */
    public function create(Request $request, FeedbackRepositoryContract $feedbackRepository, FeedbackCoreHelper $coreHelper, AccountService $accountService)
    {

        $creatorContactId = $accountService->getAccountContactId();

        // Set options
        $options = [
            'feedbackRelationTargetId' => $request->input('targetId'),
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
        if($request->input('type') == 'review'){

            $options['feedbackRelationTargetType'] = 'variation';

            // Limit the feedbacks count of a user per item
            $limitPerUserPerItem = $coreHelper->configValue(FeedbackCoreHelper::KEY_MAXIMUM_NR_FEEDBACKS);

            // Default visibility of the feedback
            $options['isVisible'] = $coreHelper->configValue(FeedbackCoreHelper::KEY_RELEASE_FEEDBACKS_AUTOMATICALLY) == 'true' ? true : false;



            // Allow feedbacks with no rating
            $allowNoRatingFeedbacks = $coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_NO_RATING_FEEDBACK) == 'true' ? true : false;

            if( !$allowNoRatingFeedbacks && empty($request->input('ratingValue')) ){
                return 'Can\'t create review with no rating';
            }



            // Allow creation of feedbacks only if the item/variation was already bought
            $allowFeedbacksOnlyIfPurchased = $coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_FEEDBACKS_ONLY_IF_PURCHASED) == 'true' ? true : false;

            // get variations bought
            $orders = pluginApp(OrderRepositoryContract::class)->allOrdersByContact($creatorContactId);

            $purchasedVariations = [];

            foreach($orders->getResult() as $order){
                foreach($order->orderItems as $orderItem){
                    $purchasedVariations[] = $orderItem->itemVariationId;
                }
            }

            if(in_array($request->input('targetId'), $purchasedVariations)){

                $creatorPurchasedThisVariation = true;
                $options['feedbackRelationSources'][] =
                    [
                        "feedbackRelationSourceType" => 'orderItem',
                        "feedbackRelationSourceId" => $options['feedbackRelationTargetId']
                    ]
                ;
            }

            if($allowFeedbacksOnlyIfPurchased && !$creatorPurchasedThisVariation){
                return 'Not allowed to create review without purchasing the item first';
            }



            if(!empty($limitPerUserPerItem) && $limitPerUserPerItem != 0){

                // Get the feedbacks that this user created on this item
                $countFeedbacksOfUserPerItem = $feedbackRepository->listFeedbacks(1,50,[],[
                    'sourceId' => $creatorContactId,
                    'targetId' => $options['feedbackRelationTargetId']
                ])->getTotalCount();

                if($countFeedbacksOfUserPerItem >= $limitPerUserPerItem) {
                    return 'Too many reviews';
                }

            }

            return $feedbackRepository->createFeedback(array_merge($request->all(), $options));



        }elseif($request->input('type') == 'reply'){

            $options['feedbackRelationTargetType'] = 'feedback';
            $options['isVisible'] = true;

            return $feedbackRepository->createFeedback(array_merge($request->all(), $options));

        }


    }


    /**
     * @param $feedbackId
     * @param FeedbackRepositoryContract $feedbackRepository
     * @param AccountService $accountService
     * @return bool
     */
    public function delete($feedbackId, FeedbackRepositoryContract $feedbackRepository, AccountService $accountService)
    {
        $feedback = $feedbackRepository->getFeedback($feedbackId);

        // Check if frontend user is the creator
        if($accountService->getAccountContactId() == $feedback->sourceRelation[0]->feedbackRelationSourceId)
        {
            return $feedbackRepository->deleteFeedback($feedbackId);
        }

        return false;
    }


    /**
     * @param Request $request
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return mixed
     */
    public function update($feedbackId, Request $request, FeedbackRepositoryContract $feedbackRepository, FeedbackCoreHelper $coreHelper)
    {
        $data = $request->all();
        $isVisibleAutomatically =  $coreHelper->configValue(FeedbackCoreHelper::KEY_RELEASE_FEEDBACKS_AUTOMATICALLY) == 'true';
        $data['isVisible'] = $isVisibleAutomatically;

        return $feedbackRepository->updateFeedback($data, $feedbackId);
    }


    /**
     * @param $page
     * @param FeedbackService $feedbackService
     * @param AccountService $accountService
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return mixed
     */
    public function paginate($itemId, $page, FeedbackService $feedbackService, FeedbackCoreHelper $coreHelper, AccountService $accountService, FeedbackRepositoryContract $feedbackRepository, SessionStorageService $sessionStorage)
    {
        $lang = $sessionStorage->getLang();
        $itemVariations = [];
        $itemDataList = pluginApp(ItemRepositoryContract::class)->show(
            $itemId,
            ['id'],
            $lang,
            ['variations']
        );
        foreach($itemDataList['variations'] as $itemData){
            $itemVariations[] = $itemData['id'];
        }

        $itemAttributes = [];
        foreach($itemVariations as $itemVariation){
            $variationAttributes = pluginApp(VariationRepositoryContract::class)->show(
                $itemVariation,
                ['variationAttributeValues' => true]
                ,'*'
            );

            $a[0] = $variationAttributes;
            $b[0] = $a;
            $actualVariationAttributes = $b[0][0]['variationAttributeValues'];

            foreach($actualVariationAttributes as $variationAttribute){
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

        $options['systemLanguage'] = $lang;
        $options['itemAttributes'] = $itemAttributes;

        $options['timestampVisibility'] = $coreHelper->configValue(FeedbackCoreHelper::KEY_TIMESTAMP_VISIBILITY) == 'true' ? true : false;

        $page = isset($page) && $page != 0 ? $page : 1;
        $itemsPerPage = 10;
        $with = [];
        $filters = [
            'isVisible' => 1,
            'itemId' => $itemId,
        ];


        if($accountService->getAccountContactId() > 0)
        {
            $filters['hideSourceId'] = $accountService->getAccountContactId();

        }

        $feedbacks = $feedbackService->listFeedbacks(
            $feedbackRepository,
            $page,
            $itemsPerPage,
            $with,
            $filters
        );
        $feedbackResults = $feedbacks->getResult();

        foreach($feedbackResults as &$feedback)
        {
            if($feedback->targetRelation->feedbackRelationType == 'variation')
            {
                $feedback->targetRelation->variationAttributes = json_decode($feedback->targetRelation->targetRelationName);
            }
        }
        return [
            'feedbacks'             => $feedbackResults,
            'options'               => $options,
            'itemAttributes'        => $itemAttributes,
            'pagination'            => [
                'page' => $page,
                'lastPage' => $feedbacks->getLastPage(),
                'isLastPage' => $feedbacks->isLastPage()
            ]

        ];
    }

    public function getAuthenticatedUser(
        int $itemId,
        int $variationId,
        Request $request,
        FeedbackService $feedbackService,
        FeedbackRepositoryContract $feedbackRepository,
        AccountService $accountService,
        FeedbackCoreHelper $coreHelper)
    {
        $contactId      = $accountService->getAccountContactId();
        $isLoggedIn     = $accountService->getIsAccountLoggedIn();
        $hasPurchased   = true;
        $limitReached   = false;
        $userFeedbacks  = [];

        if ( $isLoggedIn )
        {
            $allowFeedbacksOnlyIfPurchased = $coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_FEEDBACKS_ONLY_IF_PURCHASED) == 'true';

            if ( $allowFeedbacksOnlyIfPurchased )
            {

                // get variations bought
                $orders = pluginApp(OrderRepositoryContract::class)->allOrdersByContact($contactId);

                $purchasedVariations = [];

                foreach ($orders->getResult() as $order) {
                    foreach ($order->orderItems as $orderItem) {
                        $purchasedVariations[] = $orderItem->itemVariationId;
                    }
                }

                $hasPurchased = in_array($variationId, $purchasedVariations);

            }

            // Pagination settings for currently authenticated user's feedbacks
            $page = $request->get('page', 1);
            $itemsPerPage = $request->get('itemsPerPage', 50);

            $with = [];
            $filters = [
                'itemId' => $itemId,
                'sourceId' => $contactId
            ];

            // List of currently authenticated user's feedbacks
            $feedbacks = $feedbackService->listFeedbacks($feedbackRepository, $page, $itemsPerPage, $with, $filters);
            $userFeedbacks = $feedbacks->getResult();
            foreach($userFeedbacks as &$feedback)
            {
                if($feedback->targetRelation->feedbackRelationType == 'variation')
                {
                    $feedback->targetRelation->variationAttributes = json_decode($feedback->targetRelation->targetRelationName);
                }
            }

            $limitFeedbacksPerUserPerItem = $coreHelper->configValue(FeedbackCoreHelper::KEY_MAXIMUM_NR_FEEDBACKS);
            if( !is_null($limitFeedbacksPerUserPerItem) && $limitFeedbacksPerUserPerItem > 0 )
            {
                $limitReached = $limitFeedbacksPerUserPerItem <= $feedbacks->getTotalCount();
            }


        }

        return [
            'id'            => $contactId,
            'isLoggedIn'    => $isLoggedIn,
            'limitReached'  => $limitReached,
            'hasPurchased'  => $hasPurchased,
            'feedbacks'     => $userFeedbacks
        ];
    }
}
