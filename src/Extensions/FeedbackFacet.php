<?php
namespace Feedback\Extensions;

use IO\Services\SessionStorageService;
use IO\Services\ItemSearch\Contracts\FacetExtension;

use Plenty\Plugin\Log\Loggable;
use Plenty\Modules\Item\Search\Filter\FeedbackRangeFilter;
use Plenty\Modules\Item\Search\Aggregations\FeedbackAggregation;
use Plenty\Modules\Item\Search\Aggregations\FeedbackAggregationProcessor;
use Plenty\Modules\Cloud\ElasticSearch\Lib\Search\Aggregation\AggregationInterface;

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

            $this->getLogger('merge into facets')->debug('Feedback::Debug.filterResponse', $result['feedback']);

            $facetName = '';

            // TODO: get facet name from property file
            $lang = pluginApp( SessionStorageService::class )->getLang();
            if ( $lang === 'de' )
            {
                $facetName = 'Artikelbewertung';
            }
            else
            {
                $facetName = 'Item rating';
            }

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
                'maxResultCount' => 5
            ];

            for ($i = 1; $i <= 5; $i++) {
                if (isset($result['feedback'][$i]) && (is_null($this->currentActiveRatingFilter) || $this->currentActiveRatingFilter == $i)) {
                    $feedback['values'][] = [
                        'id' => 'feedback-' . $i,
                        'names' => [
                            ['lang' => 'de', 'name' => '']
                        ],
                        'count' => $result['feedback'][$i],
                        'total' => $result['feedback'][$i] //TODO: remove after release of Ceres with new facet logic
                    ];
                }
            }
            $feedback['count'] = count($feedback['values']);
            $result['facets'][] = $feedback;
        }

        return $result;
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
