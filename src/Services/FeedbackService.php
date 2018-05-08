<?php
/**
 * Created by PhpStorm.
 * User: Cristian Benescu
 * Date: 06.09.17
 * Time: 13:00
 */

namespace Feedback\Services;


use Dingo\Api\Http\Request;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;

class FeedbackService
{

    /**
     * @param FeedbackRepositoryContract $feedbackRepository
     * @param int $page
     * @param int $itemsPerPage
     * @param array $with
     * @param array $filters
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
}
