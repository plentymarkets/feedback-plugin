<?php

namespace Feedback\Extensions;

use IO\Helper\Utils;
use Plenty\Modules\Cloud\ElasticSearch\Lib\Search\Aggregation\AggregationInterface;
use Plenty\Modules\Pim\SearchService\Aggregations\Feedback\FeedbackRangeAggregation;
use Plenty\Modules\Pim\SearchService\Aggregations\Processors\FeedbackRangeAggregationProcessor;
use Plenty\Modules\Pim\SearchService\Filter\FeedbackRangeFilter;
use Plenty\Modules\Webshop\Contracts\LocalizationRepositoryContract;
use Plenty\Modules\Webshop\ItemSearch\Contracts\FacetExtension;
use Plenty\Plugin\Log\Loggable;

/**
 * Class FeedbackFacet
 * @package Feedback\Extensions
 */
class FeedbackFacet implements FacetExtension
{
    use Loggable;

    /**
     * @var null
     */
    private $currentActiveRatingFilter = null;

    /**
     * @return AggregationInterface
     */
    public function getAggregation(): AggregationInterface
    {
        $feedbackProcessor = pluginApp(FeedbackRangeAggregationProcessor::class);
        return pluginApp(FeedbackRangeAggregation::class, [$feedbackProcessor]);
    }

    /**
     * @param array $result
     * @return array
     */
    public function mergeIntoFacetsList($result): array
    {
        $feedback = [];

        if (count($result)) {
            $this->getLogger('merge into facets')->debug('Feedback::Debug.filterResponse', $result);

            $facetName = Utils::translate('Feedback::Feedback.facetName');
            $feedback = [
                'id' => 'feedback',
                'name' => $facetName,
                'position' => 10, //TODO: load from config
                // TODO: still required?
                'names' => [
                    ['lang' => 'de', 'name' => 'Artikelbewertung'],
                    ['lang' => 'en', 'name' => 'Item rating'],
                ],
                'values' => [],
                'minHitCount' => 1,
                'maxResultCount' => 5,
                'type' => 'feedback'
            ];

            for ($i = 1; $i <= 5; $i++) {
                if (isset($result[$i]) && (is_null(
                            $this->currentActiveRatingFilter
                        ) || $this->currentActiveRatingFilter == $i)) {
                    $feedback['values'][] = [
                        'id' => 'feedback-' . $i,
                        'names' => [
                            ['lang' => 'de', 'name' => '']
                        ],
                        'count' => $result[$i],
                    ];
                }
            }
            $feedback['count'] = count($feedback['values']);
        }

        return $feedback;
    }

    /**
     * @param $filtersList
     * @return mixed
     */
    public function extractFilterParams($filtersList)
    {
        foreach ($filtersList as $filter) {
            if (strpos($filter, 'feedback-') === 0) {
                $this->currentActiveRatingFilter = (INT)substr($filter, 9);

                /** @var FeedbackRangeFilter $rangeFilter */
                $rangeFilter = pluginApp(FeedbackRangeFilter::class);
                $rangeFilter->hasFeedbackGreaterThan($this->currentActiveRatingFilter);

                return $rangeFilter;
            }
        }
    }
}
