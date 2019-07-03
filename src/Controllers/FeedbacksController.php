<?php

namespace Feedback\Controllers;

use Feedback\Helpers\FeedbackCoreHelper;
use Feedback\Services\FeedbackService;
use Illuminate\Support\Facades\Redirect;
use IO\Services\SessionStorageService;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Modules\Item\Attribute\Contracts\AttributeNameRepositoryContract;
use Plenty\Modules\Item\Attribute\Contracts\AttributeValueNameRepositoryContract;
use Plenty\Modules\Item\Item\Contracts\ItemRepositoryContract;
use Plenty\Modules\Item\Variation\Contracts\VariationRepositoryContract;
use Plenty\Modules\Order\Contracts\OrderRepositoryContract;
use Plenty\Plugin\Controller;
use Plenty\Plugin\Http\Request;


class FeedbacksController extends Controller
{
    /**
     * @param Request $request
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return \Plenty\Modules\Feedback\Models\Feedback
     */
    public function create(FeedbackService $feedbackService)
    {
        return $feedbackService->create();
    }


    /**
     * @param $feedbackId
     * @param FeedbackRepositoryContract $feedbackRepository
     * @param AccountService $accountService
     * @return bool
     */
    public function delete($feedbackId, FeedbackService $feedbackService)
    {
        return $feedbackService->delete($feedbackId);
    }


    /**
     * @param Request $request
     * @param FeedbackRepositoryContract $feedbackRepository
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
     * @param AccountService $accountService
     * @param FeedbackRepositoryContract $feedbackRepository
     * @return mixed
     */
    public function paginate($itemId, $page, FeedbackService $feedbackService)
    {
        return $feedbackService->paginate($itemId, $page);
    }

    public function getAuthenticatedUser(int $itemId, int $variationId, FeedbackService $feedbackService)
    {
        return $feedbackService->getAuthenticatedUser($itemId, $variationId);
    }
}
