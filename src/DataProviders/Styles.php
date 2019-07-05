<?php
namespace Feedback\DataProviders;

use Plenty\Plugin\Templates\Twig;

class Styles
{
    /**
     * @param Twig $twig
     * @return string
     */
    public function call(Twig $twig)
    {
        return $twig->render('Feedback::DataProvider.Styles');
    }
}
