<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:35
 */

namespace Feedback\Providers;


use Feedback\Extensions\FeedbackFacet;
use IO\Services\ItemSearch\Helper\FacetExtensionContainer;
use IO\Services\ItemService;
use Plenty\Plugin\ConfigRepository;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;

class FeedbackServiceProvider extends ServiceProvider
{
    /**
     * @param Dispatcher $dispatcher
     */
    public function boot(Dispatcher $dispatcher, ConfigRepository $configRepository)
    {
        //add feedback facet extension
        $dispatcher->listen('IO.initFacetExtensions', function (FacetExtensionContainer $facetExtensionContainer) {
            $facetExtensionContainer->addFacetExtension(pluginApp(FeedbackFacet::class));
        });

        //add feedback sorting
        $dispatcher->listen('IO.initAdditionalSorting', function (ItemService $itemService) {
            $itemService->addAdditionalItemSorting('item.feedbackDecimal_desc', 'Feedback::Feedback.customerReviews');
        });
    }

    public function register()
    {
        $this->getApplication()->register(FeedbackRouteServiceProvider::class);
    }
}
