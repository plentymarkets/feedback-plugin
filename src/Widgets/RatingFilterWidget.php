<?php

namespace Feedback\Widgets;

use Ceres\Widgets\Category\Filter\FilterBaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\WidgetTypes;
use IO\Services\ItemSearch\Factories\Faker\Traits\FakeNumber;
use IO\Services\ItemSearch\Factories\Faker\Traits\FakeString;

class RatingFilterWidget extends FilterBaseWidget
{
    use FakeNumber, FakeString;

    protected $allowedFacetTypes = ['feedback'];
    protected $className = 'rating';

    public function getData(): array
    {
        return WidgetDataFactory::make('Feedback::RatingFilterWidget')
            ->withLabel('Widget.ratingFilterLabel')
            ->withPreviewImageUrl('/images/rating-filter.svg')
            ->withType(WidgetTypes::CATEGORY_ITEM)
            ->withCategory(WidgetTypes::CATEGORY_ITEM)
            ->withPosition(1100)
            ->toArray();
    }

    public function getSettings(): array
    {
        return parent::getSettings();
    }

    protected function getPreviewData($widgetSettings)
    {
        $valuesCount = 5;

        $feedback = [
            'id' => 'feedback',
            'name' => $this->trans('Feedback::Widget.feedbackLabel'),
            'position' => 0,
            'values' => [],
            'minHitCount' => 1,
            'maxResultCount' => $valuesCount,
            'type' => 'feedback'
        ];

        for ($i = 1; $i <= $valuesCount; $i++) {
            $feedback['values'][] =
                [
                    'id' => 'feedback-' . $i,
                    'names' =>
                        [
                            ['lang' => 'de', 'name' => '']
                        ],
                    'count' => $this->number(3, 20),
                ];
        }
        $feedback['count'] = $valuesCount;

        return ['facets' => [$feedback]];
    }
}
