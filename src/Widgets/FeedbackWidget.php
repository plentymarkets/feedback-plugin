<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\Settings\AppearanceSettingFactory;
use Ceres\Widgets\Helper\Factories\Settings\CustomClassSettingFactory;
use Ceres\Widgets\Helper\Factories\Settings\SpacingSettingFactory;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\WidgetCategories;
use Ceres\Widgets\Helper\WidgetTypes;
use Feedback\Helpers\FeedbackCoreHelper;
use Plenty\Modules\ShopBuilder\Factories\Settings\CheckboxSettingFactory;
use Plenty\Modules\ShopBuilder\Factories\WidgetSettingsFactory;

class FeedbackWidget extends BaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackWidget";

    public function getData()
    {
        return WidgetDataFactory::make("Feedback::FeedbackWidget")
            ->withLabel("Widget.feedbackLabel")
            ->withPreviewImageUrl("/images/feedback.svg")
            ->withType(WidgetTypes::ITEM)
            ->withCategory(WidgetCategories::ITEM)
            ->withPosition(800)
            ->toArray();
    }

    public function getSettings()
    {
        /** @var WidgetSettingsFactory $settings */
        $settings = pluginApp(WidgetSettingsFactory::class);
        $settings->createSetting('customClass', CustomClassSettingFactory::class);
        $settings->createSetting('appearance', AppearanceSettingFactory::class, [
            'optional' => false
        ]);
        $settings->createSetting('spacing', SpacingSettingFactory::class, [
            'usePadding' => true,
            'useMargin' => true
        ]);

        $settings->createSetting('timestampVisibility', CheckboxSettingFactory::class)
            ->withDefaultValue(false)
            ->withName('Widget.timestampVisibility')
            ->withTooltip('Widget.timestampVisibilityTooltip');

        $settings->createSetting('feedbacksPerPage')
            ->withType('number')
            ->withDefaultValue(10)
            ->withName('Widget.feedbacksPerPage')
            ->withTooltip('Widget.feedbacksPerPageTooltip');

        return $settings->toArray();
    }

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        // As only mobile is currently used, flatten breakpoints
        return [
            "options" => [
                "feedbacksPerPage" => $widgetSettings["feedbacksPerPage"]["mobile"],
                "timestampVisibility" => $widgetSettings["timestampVisibility"]["mobile"]
            ]
        ];
    }
}
