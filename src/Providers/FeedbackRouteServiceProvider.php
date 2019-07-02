<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:34
 */

namespace Feedback\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\ApiRouter;
use Plenty\Plugin\Routing\Router;

/**
 * Class FeedbackRouteServiceProvider
 * @package Feedback\Providers
 */
class FeedbackRouteServiceProvider extends RouteServiceProvider
{
    public function map(Router $router, ApiRouter $apiRouter)
    {
        $apiRouter->version(['v1'], ['namespace' => 'Feedback\Controllers'], function ($apiRouter)
        {
            $apiRouter->get('feedbacks/user/{itemId}/{variationId}', 'FeedbacksController@getAuthenticatedUser');
            $apiRouter->post('feedbacks/feedback/create', 'FeedbacksController@create');
            $apiRouter->put('feedbacks/feedback/update/{feedbackId}', 'FeedbacksController@update')->where('feedbackId', '\d+');
            $apiRouter->delete('feedbacks/feedback/delete/{feedbackId}', 'FeedbacksController@delete')->where('feedbackId', '\d+');

            $apiRouter->get('feedbacks/feedback/helper/feedbacklist/{targetId}/{page}', 'FeedbacksController@paginate')->where('page', '\d+')->where('targetId', '\d+');

        });
    }
}
