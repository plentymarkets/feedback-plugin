<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:35
 */

namespace Feedback\Providers;


use Hanseatic\Providers\HanseaticRouteServiceProvider;
use Plenty\Plugin\ServiceProvider;

class FeedbackServiceProvider extends ServiceProvider
{
    public function boot()
    {

    }

    public function register()
    {
        $this->getApplication()->register(FeedbackRouteServiceProvider::class);
    }
}