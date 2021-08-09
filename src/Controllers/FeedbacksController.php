<?php

namespace Feedback\Controllers;

use Feedback\Helpers\FeedbackCoreHelper;
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
    public function getAuthenticatedUser(int $itemId, int $variationId, FeedbackService $feedbackService)
    {
        return $feedbackService->getAuthenticatedUser($itemId, $variationId);
    }

    /**
     * @param FeedbackService $feedbackService
     * @return array
     */
    public function getAuthenticatedUserMulti(FeedbackService $feedbackService)
    {
        return $feedbackService->getAuthenticatedUserMulti();
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

    /**
     * @param int $itemId
     * @param FeedbackService $feedbackService
     * @return array
     */
    public function getCounts(int $itemId, FeedbackService $feedbackService)
    {
        return $feedbackService->getCounts($itemId);
    }

    /**
     * @param FeedbackService $feedbackService
     * @return string
     */
    public function setPermissionOrderFeedback( FeedbackService $feedbackService )
    {
        return $feedbackService->setPermissionOrderFeedback();
    }

    /**
     * @param int $orderId
     * @param FeedbackService $feedbackService
     * @return string
     */
    /**public function getPermissionOrderFeedback(int $orderId, FeedbackService $feedbackService)
    {
        return $feedbackService->getPermissionOrderFeedback($orderId);
    }*/
}
