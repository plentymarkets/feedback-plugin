<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\Settings\CustomClassSettingFactory;
use Ceres\Widgets\Helper\Factories\Settings\SpacingSettingFactory;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\WidgetCategories;
use Ceres\Widgets\Helper\WidgetTypes;
use Plenty\Modules\ShopBuilder\Factories\Settings\CheckboxSettingFactory;
use Plenty\Modules\ShopBuilder\Factories\Settings\SelectSettingFactory;
use Plenty\Modules\ShopBuilder\Factories\Settings\ValueListFactory;
use Plenty\Modules\ShopBuilder\Factories\WidgetSettingsFactory;

class FeedbackAverageWidget extends BaseWidget
{
    protected $template = "Feedback::Widgets.FeedbackAverageWidget";

    /**
     * @inheritDoc
     */
    public function getData()
    {
        return WidgetDataFactory::make("Feedback::FeedbackAverageWidget")
            ->withLabel("Widget.feedbackAverageLabel")
            ->withPreviewImageUrl("/images/feedback-average.svg")
            ->withType(WidgetTypes::ITEM)
            ->withCategory(WidgetCategories::ITEM)
            ->withPosition(800)
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
        $settings->createSetting('spacing', SpacingSettingFactory::class, [
            'usePadding' => false,
            'useMargin' => true
        ]);
        $settings->createSetting('sizeOfStars', SelectSettingFactory::class)
            ->withName('Widget.sizeOfStars')
            ->withTooltip('Widget.sizeOfStarsTooltip')
            ->withDefaultValue('small')
            ->withListBoxValues(ValueListFactory::make()
                ->addEntry('small', 'Widget.sizeOfStarsSmall')
                ->addEntry('big', 'Widget.sizeOfStarsBig')
                ->toArray()
            );

        $settings->createSetting('showEmptyRatings', CheckboxSettingFactory::class)
            ->withDefaultValue(true)
            ->withName('Widget.showEmptyRatings')
            ->withTooltip('Widget.showEmptyRatingsTooltip');

        $settings->createSetting('showNumberOfRatings', CheckboxSettingFactory::class)
            ->withDefaultValue(false)
            ->withName('Widget.showNumberOfRatings')
            ->withTooltip('Widget.showNumberOfRatingsTooltip');


        return $settings->toArray();
    }
}
