<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\OrderConfirmation\OrderConfirmationBaseWidget;
use Feedback\Helpers\FeedbackCoreHelper;

class FeedbackOrderWidget extends OrderConfirmationBaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackOrderWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $coreHelper = pluginApp(FeedbackCoreHelper::class);
        $allowGuestFeedbacks = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_ALLOW_GUEST_FEEDBACKS);

        // As only mobile is currently used, flatten breakpoints
        return [
            "options" => [
                "numberOfFeedbacks" => $widgetSettings["numberOfFeedbacks"]["mobile"],
                "allowGuestFeedbacks" => $allowGuestFeedbacks,
                "itemsPerRow" => $widgetSettings["itemsPerRow"]["mobile"],
                "rowsPerPage" => $widgetSettings["rowsPerPage"]["mobile"]
            ]
        ];
    }
}
