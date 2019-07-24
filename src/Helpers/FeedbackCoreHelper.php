<?php

namespace Feedback\Helpers;

use Plenty\Plugin\ConfigRepository;

class FeedbackCoreHelper
{
    const PLUGIN_NAME = 'Feedback';
    const KEY_RELEASE_FEEDBACKS_AUTOMATICALLY = "releaseFeedbacks";
    const KEY_MAXIMUM_NR_FEEDBACKS = "numberOfFeedbacks";
    const KEY_TIMESTAMP_VISIBILITY = "timestampVisibility";
    const KEY_ALLOW_NO_RATING_FEEDBACK = "allowNoRatingFeedback";
    const KEY_ALLOW_FEEDBACKS_ONLY_IF_PURCHASED = "allowFeedbacksOnlyIfPurchased";
    const KEY_SHOW_EMPTY_RATINGS_IN_CATEGORY_VIEW = "showEmptyRatingsInCategoryView";
    const KEY_SHOW_RATING_SORTING = "showRatingSorting";
    const KEY_SHOW_RATING_FACET = "showRatingFacet";

    /**
     * @var ConfigRepository $config
     */
    private $config;

    /**
     * FeedbackCoreHelper constructor.
     * @param ConfigRepository $config
     */
    public function __construct(ConfigRepository $config)
    {
        $this->config = $config;
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function configValue(string $key)
    {
        return $this->config->get(self::PLUGIN_NAME . '.' . $key);
    }

    /**
     * Helper function to reduce ternary statements in the code
     * @param $configValue
     * @return bool
     */
    public function configValueAsBool(string $key)
    {
        $configValue = $this->configValue($key);
        return $configValue == 'true' ? true : false;
    }
}
