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

        $count5 = $count4 = $count3 = $count2 = $count1 = $totalcount = $totalValue = 0;
        foreach($results as $result){
            if($result->feedbackRating->rating->ratingValue == 5){
                $count5 ++;
                $totalValue += 5;
            }elseif($result->feedbackRating->rating->ratingValue == 4){
                $count4 ++;
                $totalValue += 4;
            }elseif($result->feedbackRating->rating->ratingValue == 3){
                $count3 ++;
                $totalValue += 3;
            }elseif($result->feedbackRating->rating->ratingValue == 2){
                $count2 ++;
                $totalValue += 2;
            }elseif($result->feedbackRating->rating->ratingValue == 1){
                $count1 ++;
                $totalValue += 1;
            };
            $totalcount ++;
        }

        $average = $totalValue / $totalcount;

        $counts = [
            'total' => $totalcount,
            'totalValue' => $totalValue,
            'average' => $average,
            'c5' => $count5,
            'c4' => $count4,
            'c3' => $count3,
            'c2' => $count2,
            'c1' => $count1
        ];
        // Details about the user currently authenticated in the app
        $authenticatedContact = [
            'id' => $accountService->getAccountContactId(),
            'check' => $accountService->getIsAccountLoggedIn()
        ];

        $data = [
            'feedbacks' => $results,
            'authenticatedContact' => $authenticatedContact,
            'counts' => $counts
        ];

        return $twig->render('Feedback::DataProvider.Feedback', $data);
    }
}