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

class FeedbacksController extends Controller
{
    /**
     * @param FeedbackService $feedbackService
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Illuminate\Support\Collection|\Plenty\Repositories\Models\PaginatedResult
     */
    public function listFeedbacks(FeedbackService $feedbackService, FeedbackRepositoryContract $feedbackRepository)
    {
        return $feedbackService->listFeedbacks($feedbackRepository);
    }

    /**
     * @param Request $request
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Plenty\Modules\Feedback\Models\Feedback
     */
    public function create(Request $request, FeedbackRepositoryContract $feedbackRepository, FeedbackCoreHelper $coreHelper)
    {
        $isVisible = $coreHelper->configValue('releaseFeedbacks');
        return $feedbackRepository->createFeedback(array_merge($request->all(), ['isVisible' => $isVisible]));
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

    public function update(Request $request, FeedbackRepositoryContract $feedbackRepository)
    {
        return $feedbackRepository->updateFeedback($request->all(), $request->input('id'));
    }







}