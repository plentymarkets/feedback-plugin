<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 06/11/2017
 * Time: 15:23
 */

namespace Feedback\DataProviders;


use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class FeedbackCategoryRatings
{
    /**
     * @param $item
     * @param Request $request
     * @param Twig $twig
     */
    public function call(Request $request, FeedbackAverageRepositoryContract $feedbackAverageRepository, Twig $twig, $itemData)
    {
        $itemId = $itemData[0]['item']['id'];

        $average = $feedbackAverageRepository->getFeedbackAverage($itemId);

        if(empty($average)){
            $counts['averageValue'] = 0;
        }else{
            $counts['averageValue'] = $average->averageValue;
        }

        $data['counts'] = $counts;

        return $twig->render('Feedback::DataProvider.CategoryRatings.CategoryAverageRating', $data);

    }
}