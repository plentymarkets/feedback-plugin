<?php

namespace Feedback\DataProviders;


use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class FeedbackSingleItemRating
{
    /**
     * @param Request $request
     * @param FeedbackAverageRepositoryContract $feedbackAverageRepository
     * @param Twig $twig
     * @param $itemData
     * @return string
     */
    public function call(Request $request, FeedbackAverageRepositoryContract $feedbackAverageRepository, Twig $twig, $itemData)
    {
        $itemId = $itemData[0]['item']['id'] ? $itemData[0]['item']['id'] : 0;

        $average = $feedbackAverageRepository->getFeedbackAverage($itemId);

        if(empty($average)){
            $counts['averageValue'] = 0;
            $counts['ratingsCountTotal'] = 0;
        }else{
            $counts['averageValue'] = $average->averageValue;
            $counts['ratingsCountTotal'] = $average->ratingsCountTotal;
        }

        $data['counts'] = $counts;

        return $twig->render('Feedback::DataProvider.SingleItemRating.SingleItemRating', $data);

    }
}