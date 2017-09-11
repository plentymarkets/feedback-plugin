<?php
/**
 * Created by PhpStorm.
 * User: Cristian Benescu
 * Date: 06.09.17
 * Time: 13:00
 */

namespace Feedback\Services;


use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;

class FeedbackService
{
    /**
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Plenty\Repositories\Models\PaginatedResult
     */
    public function listFeedbacks(FeedbackRepositoryContract $feedbackRepository)
    {
        return $feedbackRepository->listFeedbacks(1, 50, [], ['isVisible' => true]);
    }
}