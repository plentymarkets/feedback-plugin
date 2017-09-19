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
//        $router->get('feedbacktest', 'Feedback\Controllers\FeedbacksController@listFeedbacks');

        $apiRouter->version(['v1'], ['namespace' => 'Feedback\Controllers'],
            function ($api) {
                $api->post('feedbacks/feedback/create', 'FeedbacksController@create');
            }
        );

        $apiRouter->version(['v1'], ['namespace' => 'Feedback\Controllers'],
            function ($api) {
                $api->put('feedbacks/feedback/update/{feedbackId}', 'FeedbacksController@update')->where('feedbackId', '\d+');
            }
        );

        $apiRouter->version(['v1'], ['namespace' => 'Feedback\Controllers'],
            function ($api) {
                $api->delete('feedbacks/feedback/delete/{feedbackId}', 'FeedbacksController@delete')->where('feedbackId', '\d+');
            }
        );



        // Pagination
        $router->get('feedbacks/feedback/helper/feedbacklist/{page}', 'Feedback\Controllers\FeedbacksController@paginate')->where('page', '\d+');

    }
}