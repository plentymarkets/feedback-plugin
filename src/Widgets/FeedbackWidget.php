<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;

class FeedbackWidget extends BaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        // As only mobile is currently used, flatten breakpoints
        return [
            "options" => [
                "allowFeedbacksOnlyIfPurchased" => $widgetSettings["allowFeedbacksOnlyIfPurchased"]["mobile"],
                "allowNoRatingFeedback" => $widgetSettings["allowNoRatingFeedback"]["mobile"],
                "feedbacksPerPage" => $widgetSettings["feedbacksPerPage"]["mobile"],
                "numberOfFeedbacks" => $widgetSettings["numberOfFeedbacks"]["mobile"],
                "timestampVisibility" => $widgetSettings["timestampVisibility"]["mobile"]
            ]
        ];
    }
}
