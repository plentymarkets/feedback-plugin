<?php

namespace Feedback\Extensions;

use Plenty\Plugin\Templates\Extensions\Twig_Extension;

class TwigServiceProvider extends Twig_Extension
{
    public function __construct()
    {
    }

    public function getName(): string
    {
        return "Feedback_Extension_TwigServiceProvider";
    }

    public function getFilters(): array
    {
        return [];
    }

    public function getFunctions(): array
    {
        return [];
    }

    /**
     * Expose the TwigExtension
     * @return array
     */
    public function getGlobals(): array
    {
        return [
            "feedbackServices" => pluginApp(TwigFeedbackServiceContainer ::class)
        ];
    }
}
