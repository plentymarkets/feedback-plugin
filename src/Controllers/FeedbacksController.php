<?php

namespace Feedback\Controllers;

use Feedback\Services\FeedbackService;
use Plenty\Plugin\Controller;

class FeedbacksController extends Controller
{
    /**
     * @param FeedbackService $feedbackService
     * @return \Plenty\Modules\Feedback\Models\Feedback
     */
    public function create(FeedbackService $feedbackService)
    {
        return $feedbackService->create();
    }

    /**
     * @param $feedbackId
     * @param FeedbackService $feedbackService
     * @return bool
     */
    public function delete($feedbackId, FeedbackService $feedbackService)
    {
        return $feedbackService->delete($feedbackId);
    }

    /**
     * @param $feedbackId
     * @param FeedbackService $feedbackService
     * @return mixed
     */
    public function update($feedbackId, FeedbackService $feedbackService)
    {
        return $feedbackService->update($feedbackId);
    }

    /**
     * @param $itemId
     * @param $page
     * @param FeedbackService $feedbackService
     * @return mixed
     */
    public function paginate($itemId, $page, FeedbackService $feedbackService)
    {
        return $feedbackService->paginate($itemId, $page);
    }

    /**
     * @param int $itemId
     * @param int $variationId
     * @param FeedbackService $feedbackService
     * @return array
     */
    public function getAuthenticatedUserForVariation(int $itemId, int $variationId, FeedbackService $feedbackService)
    {
        return $feedbackService->getAuthenticatedUserForVariation($itemId, $variationId);
    }

    public function getAuthenticatedUser(FeedbackService $feedbackService) {
        return $feedbackService->getAuthenticatedUser();
    }

    /**
     * @param int $itemId
     * @param FeedbackService $feedbackService
     * @return object
     */
    public function getAverage(int $itemId, FeedbackService $feedbackService)
    {
        return $feedbackService->getAverage($itemId);
    }
}
