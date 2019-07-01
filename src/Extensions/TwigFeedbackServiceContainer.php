<?php

namespace Feedback\Extensions;

use Feedback\Services\FeedbackService;

class TwigFeedbackServiceContainer
{
    public function getFeedback()
    {
        return pluginApp( FeedbackService::class );
    }
}
