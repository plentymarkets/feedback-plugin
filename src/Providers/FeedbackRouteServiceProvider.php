<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:34
 */

namespace Feedback\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;

/**
 * Class FeedbackRouteServiceProvider
 * @package Feedback\Providers
 */
class FeedbackRouteServiceProvider extends RouteServiceProvider
{
    public function map(Router $router)
    {
        $router->get('feedbacktest', 'Feedback\Controllers\FeedbacksController@listFeedbacks');
    }
}