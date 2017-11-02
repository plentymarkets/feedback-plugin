<?php

namespace Feedback\DataProviders;

use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class FeedbackSingleItemAverage
{
    /**
     * @param Request $request
     * @param Twig $twig
     * @param FeedbackAverageRepositoryContract $feedbackAverageRepository
     * @param $item
     * @return string
     */
    public function call(Request $request, Twig $twig, FeedbackAverageRepositoryContract $feedbackAverageRepository, $item)
    {
        $itemAverage = $feedbackAverageRepository->getFeedbackAverage($item[0]['documents'][0]['data']['item']['id']);

        if(empty($itemAverage)){

            // Default values if the average table doesn't have any entry for this item/variation
            $itemAverage = [
                'ratingsCountOf1' => 0,
                'ratingsCountOf2' => 0,
                'ratingsCountOf3' => 0,
                'ratingsCountOf4' => 0,
                'ratingsCountOf5' => 0,
                'ratingsCountTotal' => 0,
                'averageValue' => 0,
                'highestCount' => 0
            ];

        }

        return $twig->render('Feedback::DataProvider.Feedbacks.FeedbackSingleItemAverage', ['counts' => $itemAverage]);
    }
}