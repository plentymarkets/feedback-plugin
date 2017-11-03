<?php
namespace Feedback\Extensions;

use IO\Services\ItemLoader\Contracts\FacetExtension;
use Plenty\Modules\Cloud\ElasticSearch\Lib\Search\Aggregation\AggregationInterface;
use Plenty\Modules\Item\Search\Aggregations\FeedbackAggregation;
use Plenty\Modules\Item\Search\Aggregations\FeedbackAggregationProcessor;
use Plenty\Modules\Item\Search\Filter\FeedbackRangeFilter;

/**
 * Class FeedbackFacet
 * @package Feedback\Extensions
 */
class FeedbackFacet implements FacetExtension
{
    /**
     * @return AggregationInterface
     */
    public function getAggregation(): AggregationInterface
    {
        $feedbackProcessor = pluginApp(FeedbackAggregationProcessor::class);
        return pluginApp(FeedbackAggregation::class, [$feedbackProcessor]);
    }

    /**
     * @param array $result
     * @return array
     */
    public function mergeIntoFacetsList($result): array
    {
        if (array_key_exists('feedback', $result) && !empty($result['feedback'])) {
            $feedback = [
                'id' => 'feedback',
                'names' => [
                    ['lang' => 'de', 'name' => 'Artikelbewertung']
                ],
                'values' => []
            ];

            for ($i = 1; $i <= 5; $i++) {
                if (isset($result['feedback'][$i])) {
                    $feedback['values'][] = [
                        'id' => 'feedback-' . $i,
                        'names' => [
                            ['lange' => 'de', 'name' => '']
                        ],
                        'total' => $result['feedback'][$i]
                    ];
                }
            }

            $result['facets'][] = $feedback;
        }

        return $result;
    }

    private function buildStartsMarkup($stars)
    {
        $markup = '';
        for($i = 1; $i<=5; $i++){
            $markup .= '<div class="feedback-star" '.($i <= $stars ? 'style="color:orange"':'').'><i class="fa fa-star"></i></div>';
        }
        return $markup;
    }

    /**
     * @param $filtersList
     * @return mixed
     */
    public function extractFilterParams($filtersList)
    {
        foreach ($filtersList as $filter) {
            if (strpos($filter, 'feedback-') === 0) {

                /** @var FeedbackRangeFilter $rangeFilter */
                $rangeFilter = pluginApp(FeedbackRangeFilter::class);
                $rangeFilter->hasFeedbackGreaterThan((INT)substr($filter, 9));

                return $rangeFilter;
            }
        }
    }
}