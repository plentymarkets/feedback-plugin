<?php
namespace Feedback\DataProviders;

use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Feedback\Helpers\FeedbackCoreHelper;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class FeedbackCategoryRatings
{
    /**
     * @param Request $request
     * @param FeedbackAverageRepositoryContract $feedbackAverageRepository
     * @param Twig $twig
     * @param $itemData
     * @param FeedbackCoreHelper $coreHelper
     * @return string
     */
    public function call(Request $request, FeedbackAverageRepositoryContract $feedbackAverageRepository, FeedbackCoreHelper $coreHelper, Twig $twig, $itemData)
    {
        $itemId = $itemData[0]['item']['id'];

        if ((int)$itemId > 0) {
            $average = $feedbackAverageRepository->getFeedbackAverage($itemId);
        }

        if( empty($average)) {
            $counts['averageValue'] = 0;
        } else {
            $counts['averageValue'] = $average->averageValue;
        }

        $data['counts'] = $counts;

        $showEmptyRatingsInCategoryView = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_EMPTY_RATINGS_IN_CATEGORY_VIEW);
        $data['options']['showEmptyRatingsInCategoryView'] = $showEmptyRatingsInCategoryView;

        return $twig->render('Feedback::DataProvider.CategoryRatings.CategoryAverageRating', $data);
    }
}
