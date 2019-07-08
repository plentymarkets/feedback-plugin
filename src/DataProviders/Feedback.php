<?php

namespace Feedback\DataProviders;

use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Modules\Feedback\Controllers\FeedbackController;
use Plenty\Plugin\Templates\Twig;

class Feedback
{
    /**
     * @param $item
     * @param Twig $twig
     * @param FeedbackAverageRepositoryContract $feedbackAverageRepository
     * @return string
     */
    public function call(Twig $twig, FeedbackAverageRepositoryContract $feedbackAverageRepository, $item)
    {
        $itemId = $item['documents'][0]['data']['item']['id'];
        $average = $feedbackAverageRepository->getFeedbackAverage($itemId);

        if(empty($average)) {
            // Default values if the average table doesn't have any entry for this item/variation
            $counts = [
                'ratingsCountOf1' => 0,
                'ratingsCountOf2' => 0,
                'ratingsCountOf3' => 0,
                'ratingsCountOf4' => 0,
                'ratingsCountOf5' => 0,
                'ratingsCountTotal' => 0,
                'averageValue' => 0,
                'highestCount' => 0
            ];
        } else {
            $counts = [
                'ratingsCountOf1' => $average->ratingsCountOf1,
                'ratingsCountOf2' => $average->ratingsCountOf2,
                'ratingsCountOf3' => $average->ratingsCountOf3,
                'ratingsCountOf4' => $average->ratingsCountOf4,
                'ratingsCountOf5' => $average->ratingsCountOf5
            ];

            $highestCount = max($counts);
            $counts['ratingsCountTotal'] = $average->ratingsCountTotal;
            $counts['averageValue'] = $average->averageValue;
            $counts['highestCount'] = $highestCount;
        }

        $data['counts'] = $counts;
        $data['item'] = $item;

        return $twig->render('Feedback::DataProvider.Feedback', $data);
    }
}
