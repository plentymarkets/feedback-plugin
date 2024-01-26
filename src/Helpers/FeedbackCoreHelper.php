<?php

namespace Feedback\Helpers;

use IO\Services\TemplateService;
use Plenty\Plugin\ConfigRepository;

class FeedbackCoreHelper
{
    const PLUGIN_NAME = 'Feedback';
    const KEY_RELEASE_FEEDBACKS_AUTOMATICALLY = "autoreleaseFeedbacks";
    const KEY_ALLOW_GUEST_FEEDBACKS = "allowGuestFeedbacks";
    const KEY_SHOW_EMPTY_RATINGS_IN_CATEGORY_VIEW = "showEmptyRatingsInCategoryView";
    const KEY_SHOW_RATING_COUNT_IN_CATEGORY_VIEW = "showRatingCountInCategoryView";
    const KEY_SHOW_RATING_SORTING = "showRatingSorting";
    const KEY_SHOW_RATING_FACET = "showRatingFacet";
    const KEY_NUMBER_OF_FEEDBACKS = "numberOfFeedbacks";
    const KEY_ALLOW_NO_RATING_FEEDBACK = "allowNoRatingFeedback";
    const KEY_ALLOW_FEEDBACK_ONLY_IF_PURCHASED = "allowFeedbacksOnlyIfPurchased";
    const KEY_SHOW_EMPTY_RATINGS_IN_ORDER_CONFIRMATION_VIEW = "showEmptyRatingsInOrderConfirmationView";

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

    public static function isValidTemplate(){
       $templateService = pluginApp(TemplateService::class);
       $currentTemplate = $templateService->getCurrentTemplate();
       $allowedTemplates = [
           'tpl.item',
           'tpl.category.item',
           'tpl.search',
           'tpl.confirmation'
       ];

       return in_array($currentTemplate, $allowedTemplates);
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
    public function configValue(string $key)
    {
        return $this->config->get(self::PLUGIN_NAME . '.' . $key);
    }
}
