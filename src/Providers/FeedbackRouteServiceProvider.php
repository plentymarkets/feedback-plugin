<?php

namespace Feedback\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\ApiRouter;
use Plenty\Plugin\Routing\Router;

/**
 * Class FeedbackRouteServiceProvider
 * @package Feedback\Providers
 */
class  FeedbackRouteServiceProvider extends RouteServiceProvider
{
    public function register()
    {
    }

    /**
     * Define the map routes to templates or REST resources
     * @param Router $router
     * @param ApiRouter $apiRouter
     */
    public function map(Router $router, ApiRouter $apiRouter)
    {
        $apiRouter->version(['v1'], ['namespace' => 'Feedback\Controllers'], function ($apiRouter) {
            $apiRouter->get('feedbacks/user/{itemId}/{variationId}', 'FeedbacksController@getAuthenticatedUser');
            $apiRouter->get('feedbacks/user', 'FeedbacksController@getAuthenticatedUserMulti');
            $apiRouter->post('feedbacks/feedback/create', 'FeedbacksController@create');
            $apiRouter->put('feedbacks/feedback/update/{feedbackId}', 'FeedbacksController@update')->where('feedbackId', '\d+');
            $apiRouter->delete('feedbacks/feedback/delete/{feedbackId}',
                'FeedbacksController@delete')->where('feedbackId', '\d+');
            $apiRouter->get('feedbacks/feedback/helper/feedbacklist/{targetId}/{page}',
                'FeedbacksController@paginate')->where('page', '\d+')->where('targetId', '\d+');
            $apiRouter->get('feedbacks/feedback/helper/average/{itemId}', 'FeedbacksController@getAverage');
            $apiRouter->get('feedbacks/feedback/helper/counts/{itemId}', 'FeedbacksController@getCounts');
            $apiRouter->post('feedbacks/feedback/order/notification', 'FeedbacksController@setPermissionOrderFeedback');
        });
    }
}
