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
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Feedback\Models\Feedback;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Plugin\Controller;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class FeedbacksController extends Controller
{
//    /**
//     * @param FeedbackService $feedbackService
//     * @param FeedbackRepositoryContract $feedbackRepository
//     * @return \Illuminate\Support\Collection|\Plenty\Repositories\Models\PaginatedResult
//     */
//    public function listFeedbacks(FeedbackService $feedbackService, FeedbackRepositoryContract $feedbackRepository)
//    {
//        return $feedbackService->listFeedbacks($feedbackRepository);
//    }

    /**
     * @param Request $request
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Plenty\Modules\Feedback\Models\Feedback
     */
    public function create(Request $request, FeedbackRepositoryContract $feedbackRepository, FeedbackCoreHelper $coreHelper, AccountService $accountService)
    {
        // Set options
        $options = [
            'feedbackRelationTargetId' => $request->input('targetId'),
            'feedbackRelationSourceType' => 'contact',
            'commentRelationTargetType' => 'feedbackComment',
            'ratingRelationTargetType' => 'feedbackRating'
        ];

        // Check the type and set the target accordingly
        if($request->input('type') == 'review'){

            $feedbackRelationTargetType = 'variation';
            // Set the default visibility of the feedback. Setting in shop owner's configuration
            $options['isVisible'] = $coreHelper->configValue(FeedbackCoreHelper::KEY_RELEASE_FEEDBACKS_AUTOMATICALLY) == 'true' ? true : false;

        }elseif($request->input('type') == 'reply'){

            $feedbackRelationTargetType = 'feedback';
            $options['isVisible'] = true;

        }else{

            $feedbackRelationTargetType = 'incorrectSetting';
            $options['isVisible'] = false;

        }

        $options['feedbackRelationTargetType'] = $feedbackRelationTargetType;



        // Limit the feedbacks count of a user per item
        $limitPerUserPerItem = $coreHelper->configValue(FeedbackCoreHelper::KEY_MAXIMUM_NR_FEEDBACKS);

        // if the setting is not set, ignore it
        if(is_null($limitPerUserPerItem) || $limitPerUserPerItem == 0 || $request->input('type') == 'reply'){

            return $feedbackRepository->createFeedback(array_merge($request->all(), $options));

        }else{

            // Get the feedbacks that this user created on this item
            $feedbacksOfUserPerItem = $feedbackRepository->listFeedbacks(1,50,[],[
                'sourceId' => $accountService->getAccountContactId(),
                'targetId' => $request->input('feedbackRelationTargetId')
            ])->getResult();
            $countFeedbacksOfUserPerItem = count($feedbacksOfUserPerItem);


            if($countFeedbacksOfUserPerItem < $limitPerUserPerItem) {
                return $feedbackRepository->createFeedback(array_merge($request->all(), $options));
            }else{
                return false;
            }
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

        /**
         * @var Feedback
         */
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
            'targetId' => $targetId,
            'hideSourceId' => $authenticatedContact['id']
        ];

        $feedbacks = $feedbackService->listFeedbacks($feedbackRepository, $page, $itemsPerPage, $with, $filters);
        $results = $feedbacks->getResult()->all();

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