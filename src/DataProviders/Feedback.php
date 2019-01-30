<?php
/**
 * Created by PhpStorm.
 * User: Constantin Purcaru
 * Date: 03/09/2017
 * Time: 14:13
 */

namespace Feedback\DataProviders;


use Feedback\Helpers\FeedbackCoreHelper;
use Feedback\Services\FeedbackService;
use IO\Services\SessionStorageService;
use Plenty\Modules\Feedback\Contracts\FeedbackAverageRepositoryContract;
use Plenty\Modules\Feedback\Contracts\FeedbackRepositoryContract;
use Plenty\Modules\Feedback\Controllers\FeedbackController;
use Plenty\Modules\Frontend\Services\AccountService;
use Plenty\Modules\Item\Attribute\Contracts\AttributeNameRepositoryContract;
use Plenty\Modules\Item\Attribute\Contracts\AttributeValueNameRepositoryContract;
use Plenty\Modules\Item\Item\Contracts\ItemRepositoryContract;
use Plenty\Modules\Item\Variation\Contracts\VariationRepositoryContract;
use Plenty\Modules\Order\Contracts\OrderRepositoryContract;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Templates\Twig;

class Feedback
{
    /**
     * @param $item
     * @param Request $request
     * @param Twig $twig
     * @param FeedbackService $feedbackService
     * @param FeedbackCoreHelper $coreHelper
     * @param FeedbackRepositoryContract $feedbackRepository
     * @param FeedbackAverageRepositoryContract $feedbackAverageRepository
     * @param AccountService $accountService
     * @return string
     */
    public function call(Request $request, Twig $twig, FeedbackService $feedbackService, FeedbackCoreHelper $coreHelper, FeedbackRepositoryContract $feedbackRepository, FeedbackAverageRepositoryContract $feedbackAverageRepository, AccountService $accountService, SessionStorageService $sessionStorage, $item)
    {

        $variationId = $item[0]['documents'][0]['data']['variation']['id'];
        $itemId = $item[0]['documents'][0]['data']['item']['id'];
        $systemLanguage = $sessionStorage->getLang();



        $itemVariations = [];
        $itemDatas = pluginApp(ItemRepositoryContract::class)->show($itemId,['*'],$systemLanguage,['variations']);
        foreach($itemDatas['variations'] as $itemData){
            $itemVariations[] = $itemData['id'];
        }

        $itemAttributes = [];
        foreach($itemVariations as $itemVariation){
            $variationAttributes = pluginApp(VariationRepositoryContract::class)->show($itemVariation,['variationAttributeValues' => true],'*');

            $a[0] = $variationAttributes;
            $b[0] = $a;
            $actualVariationAttributes = $b[0][0]['variationAttributeValues'];

            foreach($actualVariationAttributes as $variationAttribute){
                $attributeName = pluginApp(AttributeNameRepositoryContract::class)->findOne($variationAttribute->attribute_id, $systemLanguage);
                $attributeValue = pluginApp(AttributeValueNameRepositoryContract::class)->findOne($variationAttribute->value_id, $systemLanguage);

                $itemAttributes[$itemVariation][$variationAttribute->attribute_id][$variationAttribute->value_id] = [
                    'attributeName' => $attributeName->name,
                    'attributeValue' => $attributeValue->name
                ];
            }
        }



        // Details about the user currently authenticated
        $authenticatedContact = [
            'id' => $accountService->getAccountContactId(),
            'check' => $accountService->getIsAccountLoggedIn(),
            'hasPurchased' => false
        ];

        $options['systemLanguage'] = $systemLanguage;
        $options['itemAttributes'] = $itemAttributes;

        $options['timestampVisibility'] = $coreHelper->configValue(FeedbackCoreHelper::KEY_TIMESTAMP_VISIBILITY) == 'true' ? true : false;
        $options['allowNoRatingFeedback'] = $coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_NO_RATING_FEEDBACK) == 'true' ? true : false;

        $allowFeedbacksOnlyIfPurchased = $coreHelper->configValue(FeedbackCoreHelper::KEY_ALLOW_FEEDBACKS_ONLY_IF_PURCHASED) == 'true' ? true : false;
        $options['allowFeedbacksOnlyIfPurchased'] = $allowFeedbacksOnlyIfPurchased;


        $limitFeedbacksPerUserPerItem = (int)$coreHelper->configValue(FeedbackCoreHelper::KEY_MAXIMUM_NR_FEEDBACKS);

        $average = $feedbackAverageRepository->getFeedbackAverage($itemId);



        if($allowFeedbacksOnlyIfPurchased && $accountService->getIsAccountLoggedIn()) {

            // get variations bought
            $orders = pluginApp(OrderRepositoryContract::class)->allOrdersByContact($accountService->getAccountContactId());

            $purchasedVariations = [];

            foreach ($orders->getResult() as $order) {
                foreach ($order->orderItems as $orderItem) {
                    $purchasedVariations[] = $orderItem->variation->itemId;
                }
            }

            $authenticatedContact['hasPurchased'] = in_array($itemId, $purchasedVariations) ? true : false;

        }


        if(empty($average)){

            // Default values if the average table doesn't have any entry for this item/variation
            $counts = [
                'ratingsCountOf1' => 0,
                'ratingsCountOf2' => 0,
                'ratingsCountOf3' => 0,
                'ratingsCountOf4' => 0,
                'ratingsCountOf5' => 0,
                'ratingsCountTotal' => 0,
                'averageValue' => 0,
                'highestCount' => 0
            ];

        }else{

            $counts = [
                'ratingsCountOf1' => $average->ratingsCountOf1,
                'ratingsCountOf2' => $average->ratingsCountOf2,
                'ratingsCountOf3' => $average->ratingsCountOf3,
                'ratingsCountOf4' => $average->ratingsCountOf4,
                'ratingsCountOf5' => $average->ratingsCountOf5
            ];

            $highestCount = max($counts);

            $counts['ratingsCountTotal'] = $average->ratingsCountTotal;
            $counts['averageValue'] = number_format($average->averageValue, 1, '.', '');
            $counts['highestCount'] = $highestCount;

        }


        if($authenticatedContact['check']){

            // Pagination settings for currently authenticated user's feedbacks
            $page = $request->get('page', 1);
            $itemsPerPage = $request->get('itemsPerPage', 50);

            $with = [];
            $filters = [
                'itemId' => $itemId,
                'sourceId' => $authenticatedContact['id']
            ];

            // List of currently authenticated user's feedbacks
            $feedbacks = $feedbackService->listFeedbacks($feedbackRepository, $page, $itemsPerPage, $with, $filters);
            $feedbackResults = $feedbacks->getResult();

            foreach($feedbackResults as $feedback){
                if($feedback->targetRelation->feedbackRelationType == 'variation'){
                    $feedback->targetRelation->variationAttributes = json_decode($feedback->targetRelation->targetRelationName);
                }
            }

            $authenticatedContact['limitReached'] = $limitFeedbacksPerUserPerItem <= $feedbacks->getTotalCount() ? true : false;

            $data['feedbacks'] = $feedbackResults;

        }

        $data['options'] = $options;
        $data['counts'] = $counts;
        $data['authenticatedContact'] = $authenticatedContact;
        $data['item'] = $item;

        return $twig->render('Feedback::DataProvider.Feedback', $data);
    }
}