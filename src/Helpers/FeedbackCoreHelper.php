<?php

namespace Feedback\Helpers;

use Plenty\Plugin\ConfigRepository;

class FeedbackCoreHelper
{
    const PLUGIN_NAME = 'Feedback';
    const KEY_RELEASE_FEEDBACKS_AUTOMATICALLY = "releaseFeedbacks";
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
     * Helper function to reduce ternary statements in the code
     * @param $configValue
     * @return bool
     */
    public function configValueAsBool(string $key)
    {
        $configValue = $this->configValue($key);
        return $configValue == 'true' ? true : false;
    }

    /**
     * @param string $key
     * @return mixed
     */
    private function configValue(string $key)
    {
        return $this->config->get(self::PLUGIN_NAME . '.' . $key);
    }
}
