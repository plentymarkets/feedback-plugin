<?php

namespace Feedback\Providers;

use Feedback\Extensions\FeedbackFacet;
use Feedback\Extensions\TwigServiceProvider;
use Feedback\Helpers\FeedbackCoreHelper;
use IO\Helper\ResourceContainer;
use IO\Services\ItemSearch\Helper\FacetExtensionContainer;
use IO\Services\ItemService;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;

class FeedbackServiceProvider extends ServiceProvider
{
    /**
     * @param Dispatcher $dispatcher
     * @param FeedbackCoreHelper $coreHelper
     * @param Twig $twig
     */
    public function boot(Dispatcher $dispatcher, FeedbackCoreHelper $coreHelper, Twig $twig)
    {
        $twig->addExtension(TwigServiceProvider::class);

        $showRatingFacet = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_RATING_FACET);
        $showRatingSorting = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_RATING_SORTING);

        if ($showRatingFacet) {
            //add feedback facet extension
            $dispatcher->listen('IO.initFacetExtensions', function (FacetExtensionContainer $facetExtensionContainer) {
                $facetExtensionContainer->addFacetExtension(pluginApp(FeedbackFacet::class));
            });
        }

        if ($showRatingSorting) {   // Sorting on CategoryPage
            //add feedback sorting
            $dispatcher->listen('IO.initAdditionalSorting', function (ItemService $itemService) {
                $itemService->addAdditionalItemSorting('item.feedbackDecimal_desc',
                    'Feedback::Feedback.customerReviews');
            });
        }

        $dispatcher->listen('IO.Resources.Import', function (ResourceContainer $resourceContainer
        ) { // TODO: Lazy load with the Vue Templates, needs JS refactoring: Remove jQuery
            $resourceContainer->addScriptTemplate('Feedback::Components.Components');
        });
    }


    public function register()
    {
        $this->getApplication()->register(FeedbackRouteServiceProvider::class);
    }
}
