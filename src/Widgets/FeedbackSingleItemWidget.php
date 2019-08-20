<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Feedback\Helpers\FeedbackCoreHelper;

class FeedbackSingleItemWidget extends BaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackSingleItemWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $allowGuestFeedbacks = pluginApp(FeedbackCoreHelper::class)->configValueAsBool(FeedbackCoreHelper::KEY_ALLOW_GUEST_FEEDBACKS);

        // As only mobile is currently used, flatten breakpoints
        return [
            "options" => [
                "allowFeedbacksOnlyIfPurchased" => $widgetSettings["allowFeedbacksOnlyIfPurchased"]["mobile"],
                "allowNoRatingFeedback" => $widgetSettings["allowNoRatingFeedback"]["mobile"],
                "feedbacksPerPage" => $widgetSettings["feedbacksPerPage"]["mobile"],
                "numberOfFeedbacks" => $widgetSettings["numberOfFeedbacks"]["mobile"],
                "timestampVisibility" => $widgetSettings["timestampVisibility"]["mobile"],
                "allowGuestFeedbacks" => $allowGuestFeedbacks
            ]
        ];
    }
}
