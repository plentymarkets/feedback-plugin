<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 03/09/2017
 * Time: 14:13
 */

namespace Feedback\DataProviders;


use Feedback\Services\FeedbackService;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Feedback\Controllers\FeedbackController;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class Feedback
{

    /**
     * @param Request $request
     * @param Twig $twig
     * @param FeedbackService $feedbackService
     * @param FeedbackRepositoryContract $feedbackRepository
     * @param AccountService $accountService
     * @return string
     */
    public function call(Request $request, Twig $twig, FeedbackService $feedbackService, FeedbackRepositoryContract $feedbackRepository, AccountService $accountService)
    {

        // Details about the user currently authenticated
        $authenticatedContact = [
            'id' => $accountService->getAccountContactId(),
            'check' => $accountService->getIsAccountLoggedIn()
        ];

        $counts = [
            'total' => 120,
            'average' => 4.2,
            'highestCount' => 40,
            'c1' => 10,
            'c2' => 20,
            'c3' => 30,
            'c4' => 40,
            'c5' => 20
        ];


        if($authenticatedContact['check']){

            // Pagination settings for currently authenticated user's feedbacks
            $page = $request->get('page');
            $page = isset($page) && $page != 0 ? $page : 1;
            $itemsPerPage = 50;
            $with = [];
            $filters = [
                'targetId' => 1,
                'sourceId' => $authenticatedContact['id']
            ];

            // List of currently authenticated user's feedbacks
            $feedbacks = $feedbackService->listFeedbacks($feedbackRepository, $page, $itemsPerPage, $with, $filters);
            $results = $feedbacks->getResult()->all();

            $data['feedbacks'] = $results;

        }


        $data['counts'] = $counts;
        $data['authenticatedContact'] = $authenticatedContact;

        return $twig->render('Feedback::DataProvider.Feedback', $data);
    }
}