<?php

namespace Feedback\Migrations;

use Plenty\Modules\Plugin\Contracts\PluginLayoutContainerRepositoryContract;
use Plenty\Modules\Plugin\PluginSet\Contracts\PluginSetRepositoryContract;
use Plenty\Modules\Plugin\PluginSet\Models\PluginSet;

class DataProviderMigration_0_0_1
{
    /*
     * This migration is supposed to delete old container links for the feedback-plugin
     * It is important, that it only deletes those links for the pluginsets, where the feedback-plugin is
     * >= 3.0.0
     */

    const DATAPROVIDERS = [
        "Feedback\DataProviders\Scripts",
        "Feedback\DataProviders\Styles",
        "Feedback\DataProviders\Feedback"
    ];

    // Check if pluginset contains v3 Feedback plugin and run migrate code for this pluginset
    public function run()
    {
        /** @var PluginSetRepositoryContract $pluginSetRepo */
        $pluginSetRepo = pluginApp(PluginSetRepositoryContract::class);
        $pluginSets = $pluginSetRepo->list();

        /** @var PluginSet $pluginSet */

        foreach($pluginSets as $pluginSet)
        {
            $plugins = $pluginSet->plugins();
            $plugins = $pluginSet->decoratePlugins($plugins, $pluginSet->id);

            foreach($plugins as $plugin)
            {
                if($plugin->name === 'Feedback')
                {
                    $majorversion = substr($plugin->version, 0, 1);
                    if ($majorversion >= 3)
                    {
                        $pluginSetId = $pluginSet->id;
                        $this->migrate($pluginSet, pluginApp(PluginLayoutContainerRepositoryContract::class));
                        break;
                    }
                    else
                    {
                        break;
                    }
                }
            }
        }
    }

    // Remove layoutContainer rows
    private function migrate($pluginSet, $containerRepository)
    {
        $layoutContainers = $pluginSet->layoutContainers()->getResults();
        foreach($layoutContainers as $layoutContainer)
        {
            if(in_array($layoutContainer->dataProviderKey, self::DATAPROVIDERS)) {
                $containerRepository->removeOne($pluginSet->id, $layoutContainer->containerKey, $layoutContainer->dataProviderKey);
            }
        }
    }
}


