<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:35
 */

namespace Feedback\Providers;


use Feedback\Extensions\FeedbackFacet;
use Feedback\Helpers\FeedbackCoreHelper;
use IO\Helper\ResourceContainer;
use IO\Services\ItemLoader\Services\FacetExtensionContainer;
use IO\Services\ItemService;
use Plenty\Plugin\ConfigRepository;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;

class FeedbackServiceProvider extends ServiceProvider
{
    /**
     * @param Dispatcher $dispatcher
     */
    public function boot(Dispatcher $dispatcher, FeedbackCoreHelper $coreHelper)
    {

        $showRatingFacet = $coreHelper->configValue(FeedbackCoreHelper::KEY_SHOW_RATING_FACET) == 'true' ? true : false;
        $showRatingSorting = $coreHelper->configValue(FeedbackCoreHelper::KEY_SHOW_RATING_SORTING) == 'true' ? true : false;


        if ($showRatingFacet) {
             //add feedback facet extension
             $dispatcher->listen('IO.initFacetExtensions', function (FacetExtensionContainer $facetExtensionContainer) {
                $facetExtensionContainer->addFacetExtension(pluginApp(FeedbackFacet::class));
            });
        }

        if ($showRatingSorting) {
             //add feedback sorting
            $dispatcher->listen('IO.initAdditionalSorting', function (ItemService $itemService) {
                $itemService->addAdditionalItemSorting('item.feedbackDecimal_desc', 'Feedback::Feedback.customerReviews');
            });
        }

        $dispatcher->listen('IO.Resources.Import', function(ResourceContainer $resourceContainer) {
            $resourceContainer->addScriptTemplate('Feedback::Components.Components' );
        });
    }

    public function register()
    {
        $this->getApplication()->register(FeedbackRouteServiceProvider::class);
    }
}