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
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Feedback\Models\Feedback;
use Plenty\Modules\Frontend\Services\AccountService;
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
            'feedbackRelationSourceType' => 'contact',
            'feedbackRelationSourceId' => $creatorContactId,
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

            if($allowFeedbacksOnlyIfPurchased){

                // get variations bought
                $orders = pluginApp(OrderRepositoryContract::class)->allOrdersByContact($creatorContactId);

                $purchasedVariations = [];

                foreach($orders->getResult() as $order){
                    foreach($order->orderItems as $orderItem){
                        $purchasedVariations[] = $orderItem->itemVariationId;
                    }
                }

                if(in_array($request->input('targetId'), $purchasedVariations)){
                    $options['feedbackRelationSources'] = [
                        [
                            "feedbackRelationSourceType" => $options['feedbackRelationSourceType'], // contact
                            "feedbackRelationSourceId" => $creatorContactId
                        ],
                        [
                            "feedbackRelationSourceType" => 'orderItem',
                            "feedbackRelationSourceId" => $options['feedbackRelationTargetId']
                        ]
                    ];
                }else{
                    return 'Not allowed to create review without purchasing the item first';
                }

            }



            if(!empty($limitPerUserPerItem) && $limitPerUserPerItem != 0){

                // Get the feedbacks that this user created on this item
                $feedbacksOfUserPerItem = $feedbackRepository->listFeedbacks(1,50,[],[
                    'sourceId' => $creatorContactId,
                    'targetId' => $request->input('feedbackRelationTargetId')
                ])->getResult();
                $countFeedbacksOfUserPerItem = count($feedbacksOfUserPerItem);


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
    public function update(Request $request, FeedbackRepositoryContract $feedbackRepository)
    {
        return $feedbackRepository->updateFeedback($request->all(), $request->input('id'));
    }


    /**
     * @param $page
     * @param Twig $twig
     * @param FeedbackService $feedbackService
     * @param AccountService $accountService
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return string
     */
    public function paginate($targetId, $page, Twig $twig, FeedbackService $feedbackService, FeedbackCoreHelper $coreHelper, AccountService $accountService, FeedbackRepositoryContract $feedbackRepository)
    {

        // Details about the user currently authenticated
        $authenticatedContact = [
            'id' => $accountService->getAccountContactId(),
            'check' => $accountService->getIsAccountLoggedIn()
        ];

        $options['timestampVisibility'] = $coreHelper->configValue(FeedbackCoreHelper::KEY_TIMESTAMP_VISIBILITY) == 'true' ? true : false;

        $page = isset($page) && $page != 0 ? $page : 1;
        $itemsPerPage = 10;
        $with = [];
        $filters = [
            'isVisible' => 1,
            'itemId' => $targetId,
            'hideSourceId' => $authenticatedContact['id']
        ];

        $feedbacks = $feedbackService->listFeedbacks($feedbackRepository, $page, $itemsPerPage, $with, $filters);
        $results = $feedbacks->getResult();

        $pagination = [
            'page' => $page,
            'lastPage' => $feedbacks->getLastPage(),
            'isLastPage' => $feedbacks->isLastPage()
        ];

        $data = [
            'feedbacks' => $results,
            'authenticatedContact' => $authenticatedContact,
            'options' => $options,
            'pagination' => $pagination

        ];

        return $twig->render('Feedback::DataProvider.Feedbacks.FeedbacksList', $data);

    }
}