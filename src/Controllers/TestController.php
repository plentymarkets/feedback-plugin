<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 01/09/2017
 * Time: 15:38
 */

namespace Feedback\Controllers;


use Plenty\Plugin\Controller;

class TestController extends Controller
{
    public function feedback()
    {
        return "feedback test";
    }
}