<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:38
 */

namespace Feedback\Controllers;


use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Plugin\Controller;

class FeedbacksController extends Controller
{
    /**
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Illuminate\Support\Collection
     */
    public function listFeedbacks(FeedbackRepositoryContract $feedbackRepository)
    {
        return $feedbackRepository->listFeedbacks();
    }
}