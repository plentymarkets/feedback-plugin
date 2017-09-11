<?php
/**
 * Created by PhpStorm.
 * User: Cristian Benescu
 * Date: 11.09.17
 * Time: 14:23
 */

namespace Feedback\Helpers;


use Plenty\Plugin\ConfigRepository;

class FeedbackCoreHelper
{

    const PLUGIN_NAME = 'Feedback';

    /**
     * @var $config
     */
    private $config;

    /**
     * FeedbackCoreHelper constructor.
     * @param ConfigRepository $config
     */
    public function __construct(ConfigRepository $config)
    {
        $this->config = $config;
    }

    /**
     * @param string $key
     * @return bool
     */
    public function configValue(string $key)
    {
        $value = $this->config->get(self::PLUGIN_NAME . '.' . $key);
        if ($value == 'true')
        {
            return true;
        }

        return false;
    }
}