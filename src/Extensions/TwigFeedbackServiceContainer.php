<?php

namespace Feedback\Extensions;

use Feedback\Services\FeedbackService;

class TwigFeedbackServiceContainer
{
    /**
     * Expose the FeedbackService to Twig
     * @return mixed|null
     */
    public function getFeedback()
    {
        return pluginApp(FeedbackService::class);
    }
}
