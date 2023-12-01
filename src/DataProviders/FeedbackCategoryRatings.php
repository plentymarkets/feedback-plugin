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
     * @param Twig $twig
     * @param $itemData
     * @param FeedbackCoreHelper $coreHelper
     * @return string
     */
    public function call(Request $request, FeedbackCoreHelper $coreHelper, Twig $twig, $itemData)
    {
        $counts['averageValue'] = $itemData[0]['item']['FeedbackDecimal'] ?? 0;
        $counts['ratingsCountTotal'] = $itemData[0]['item']['FeedbackCount'] ?? 0;

        $data['counts'] = $counts;

        $showEmptyRatingsInCategoryView = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_EMPTY_RATINGS_IN_CATEGORY_VIEW);
        $showRatingCountInCategoryView = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_RATING_COUNT_IN_CATEGORY_VIEW);
        $data['options']['showEmptyRatingsInCategoryView'] = $showEmptyRatingsInCategoryView;
        $data['options']['showRatingCountInCategoryView'] = $showRatingCountInCategoryView;

        return $twig->render('Feedback::DataProvider.CategoryAverageRating', $data);
    }
}
