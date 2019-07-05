<?php
namespace Feedback\DataProviders;

use Plenty\Plugin\Templates\Twig;

class Scripts
{
    /**
     * @param Twig $twig
     * @return string
     */
    public function call(Twig $twig)
    {
        return $twig->render('Feedback::DataProvider.Scripts');
    }
}
