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
use Ceres\Widgets\OrderConfirmation\OrderConfirmationBaseWidget;
use Plenty\Modules\ShopBuilder\Factories\WidgetSettingsFactory;

class OrderFeedbackWidget extends OrderConfirmationBaseWidget
{
    protected $template = "Feedback::Widgets.OrderFeedbackConfirmationWidget";

    public function getData()
    {
        return WidgetDataFactory::make("Feedback::OrderFeedbackConfirmationWidget")
            ->withLabel("Widget.orderFeedbackLabel")
            ->withPreviewImageUrl("/images/feedback.svg")
            ->withType(WidgetTypes::DEFAULT)
            ->withCategory(WidgetCategories::ORDER_CONFIRMATION)
            ->withPosition(800)
            ->withMaxPerPage(1)
            ->withSearchKeywords([
                                     "feedback", "bewertung", "datenschutz"
                                 ])
            ->toArray();
    }

    /**
     * @inheritDoc
     */
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


        return $settings->toArray();
    }
}
