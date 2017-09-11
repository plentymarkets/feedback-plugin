<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:38
 */

namespace Feedback\Controllers;


use Feedback\Services\FeedbackService;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Plugin\Controller;

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
}