<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Feedback\Helpers\FeedbackCoreHelper;

class FeedbackOrderItemWidget extends BaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackOrderItemWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $allowGuestFeedbacks = pluginApp(FeedbackCoreHelper::class)->configValueAsBool(FeedbackCoreHelper::KEY_ALLOW_GUEST_FEEDBACKS);

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
