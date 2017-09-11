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
use Plenty\Plugin\Templates\Twig;

class Feedback
{

    /**
     * @param Twig $twig
     * @return string
     */
    public function call(Twig $twig, FeedbackService $feedbackService, FeedbackRepositoryContract $feedbackRepository, AccountService $accountService)
    {
        // List of feedbacks
        $feedbacks = $feedbackService->listFeedbacks($feedbackRepository);

        $results = $feedbacks->getResult()->all();

        // Details about the user currently authenticated in the app
        $authenticatedContact = [
            'id' => $accountService->getAccountContactId(),
            'check' => $accountService->getIsAccountLoggedIn()
        ];

        $data = [
            'feedbacks' => $results,
            'authenticatedContact' => $authenticatedContact
        ];

        return $twig->render('Feedback::DataProvider.Feedback', $data);
    }
}