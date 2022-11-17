<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\Settings\AppearanceSettingFactory;
use Ceres\Widgets\Helper\Factories\Settings\CustomClassSettingFactory;
use Ceres\Widgets\Helper\Factories\Settings\SpacingSettingFactory;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\WidgetCategories;
use Ceres\Widgets\Helper\WidgetTypes;
use Ceres\Widgets\OrderConfirmation\OrderConfirmationBaseWidget;
use Feedback\Helpers\FeedbackCoreHelper;
use Plenty\Modules\ShopBuilder\Factories\Settings\SelectSettingFactory;
use Plenty\Modules\ShopBuilder\Factories\Settings\ValueListFactory;
use Plenty\Modules\ShopBuilder\Factories\WidgetSettingsFactory;

class FeedbackOrderWidget extends OrderConfirmationBaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackOrderWidget";

    public function getData()
    {
        return WidgetDataFactory::make("Feedback::FeedbackOrderItemWidget")
            ->withLabel("Widget.feedbackLabel")
            ->withPreviewImageUrl("/images/order-item-feedback.svg")
            ->withType(WidgetTypes::DEFAULT)
            ->withCategory(WidgetCategories::ORDER_CONFIRMATION)
            ->withPosition(800)
            ->withMaxPerPage(1)
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
            'usePadding' => false,
            'useMargin' => true
        ]);

        $settings->createSetting('itemsPerRow', SelectSettingFactory::class)
            ->withName('Widget.itemsPerRow')
            ->withTooltip('Widget.itemsPerRowTooltip')
            ->withDefaultValue('3')
            ->withListBoxValues(ValueListFactory::make()
                ->addEntry('1', 'Widget.1')
                ->addEntry('2', 'Widget.2')
                ->addEntry('3', 'Widget.3')
                ->addEntry('4', 'Widget.4')
                ->toArray()
            );

        $settings->createSetting('rowsPerPage')
            ->withType('number')
            ->withDefaultValue(1)
            ->withName('Widget.rowsPerPage')
            ->withTooltip('Widget.rowsPerPageTooltip');

        return $settings->toArray();
    }

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $coreHelper = pluginApp(FeedbackCoreHelper::class);
        $allowGuestFeedbacks = $coreHelper->configValueAsBool(FeedbackCoreHelper::KEY_ALLOW_GUEST_FEEDBACKS);
        $numberOfFeedbacks = pluginApp(FeedbackCoreHelper::class)->configValue(FeedbackCoreHelper::KEY_NUMBER_OF_FEEDBACKS);

        // As only mobile is currently used, flatten breakpoints
        return [
            "options" => [
                "numberOfFeedbacks" => $numberOfFeedbacks,
                "allowGuestFeedbacks" => $allowGuestFeedbacks,
                "itemsPerRow" => $widgetSettings["itemsPerRow"]["mobile"],
                "rowsPerPage" => $widgetSettings["rowsPerPage"]["mobile"]
            ]
        ];
    }
}
