<?php

namespace Feedback\Providers;

use Feedback\Extensions\FeedbackFacet;
use Feedback\Extensions\TwigServiceProvider;
use Feedback\Helpers\FeedbackCoreHelper;
use Feedback\Widgets\FeedbackAverageWidget;
use Feedback\Widgets\FeedbackOrderWidget;
use Feedback\Widgets\FeedbackWidget;
use Feedback\Widgets\RatingFilterWidget;
use IO\Helper\ResourceContainer;
use IO\Services\ItemService;
use Plenty\Modules\ShopBuilder\Contracts\ContentWidgetRepositoryContract;
use Plenty\Modules\Webshop\ItemSearch\Helpers\FacetExtensionContainer;
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
        $showRatingFacet = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_RATING_FACET);
        $showRatingSorting = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_SHOW_RATING_SORTING);

        if ($showRatingFacet) {
            //add feedback facet extension
            /** @var FacetExtensionContainer $facetExtensionContainer */
            $facetExtensionContainer = pluginApp(FacetExtensionContainer::class);
            $facetExtensionContainer->addFacetExtension(pluginApp(FeedbackFacet::class));
        }

        if ($showRatingSorting) {   // Sorting on CategoryPage
            //add feedback sorting
            $dispatcher->listen(
                'IO.initAdditionalSorting',
                function (ItemService $itemService) {
                    $itemService->addAdditionalItemSorting(
                        'item.feedbackDecimal_asc',
                        'Feedback::Feedback.customerReviewsAsc'
                    );
                    $itemService->addAdditionalItemSorting(
                        'item.feedbackDecimal_desc',
                        'Feedback::Feedback.customerReviewsDesc'
                    );
                }
            );
        }

        $twig->addExtension(TwigServiceProvider::class); // Enable use of FeedbackServiceProvider in twig code

        $dispatcher->listen(
            'IO.Resources.Import',
            function (ResourceContainer $resourceContainer) {
                $resourceContainer->addScriptTemplate('Feedback::Content.Scripts');
                $resourceContainer->addStyleTemplate('Feedback::Content.Styles');
            }
        );

        // register shop builder widgets
        /** @var ContentWidgetRepositoryContract $widgetRepository */
        $widgetRepository = pluginApp(ContentWidgetRepositoryContract::class);
        $widgetRepository->registerWidget(FeedbackWidget::class);
        $widgetRepository->registerWidget(FeedbackAverageWidget::class);
        $widgetRepository->registerWidget(FeedbackOrderWidget::class);
        $widgetRepository->registerWidget(RatingFilterWidget::class);
    }

    public function register()
    {
        $this->getApplication()->register(FeedbackRouteServiceProvider::class);
    }
}
