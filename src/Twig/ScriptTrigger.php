<?php
namespace Feedback\Twig;

use Plenty\Plugin\Templates\Extensions\Twig_Extension;
use Plenty\Plugin\Templates\Factories\TwigFactory;

class ScriptTrigger extends Twig_Extension
{
    public static $showScripts = false;

    /**
     * @var TwigFactory
     */
    private $twigFactory;

    /**
     * ScriptTrigger constructor.
     * @param TwigFactory $twigFactory
     */
    public function __construct(TwigFactory $twigFactory)
    {
        $this->twigFactory = $twigFactory;
    }

    /**
     * @return string
     */
    public function getName():string
    {
        return 'Feedback.script.trigger';
    }

    /**
     * Returns a list of functions to add
     * @return array
     */
    public function getFunctions():array
    {
        return [
            $this->twigFactory->createSimpleFunction('fb_active_scripts', [$this, 'activateScripts'])
        ];
    }
}
