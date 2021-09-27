<?php

namespace Feedback\Jobs;

use Plenty\Modules\Account\Address\Contracts\AddressRepositoryContract;
use Plenty\Modules\Account\Address\Models\AddressOption;
use Plenty\Modules\Account\Address\Models\AddressRelationType;
use Plenty\Modules\Authorization\Services\AuthHelper;
use Plenty\Modules\Cron\Contracts\CronHandler;
use Plenty\Modules\Order\Date\Models\OrderDateType;
use Plenty\Modules\Order\Models\Order;
use Plenty\Modules\Order\Property\Contracts\OrderPropertyRepositoryContract;
use Plenty\Modules\Order\Property\Models\OrderPropertyType;
use Plenty\Modules\Order\Contracts\OrderRepositoryContract;
use Plenty\Plugin\Log\Loggable;
use Plenty\Plugin\Mail\Contracts\MailerContract;
use Carbon\Carbon;

class SendingFeedbackMail extends CronHandler
{
    use Loggable;

    /**
     * @throws \Throwable
     * @throws \Plenty\Exceptions\ValidationException
     */
    public function handle()
    {
        $this->getLogger(__METHOD__)->error('CRON_RUN');
        /** @var AuthHelper $authHelper */
        $authHelper = pluginApp(AuthHelper::class);
        /** @var OrderRepositoryContract $orderRepository */
        $orderRepository = pluginApp(OrderRepositoryContract::class);

        $orders = $authHelper->processUnguarded(function () use ($orderRepository) {
            $from = Carbon::today()->subDays(2)->toW3cString();
            $to = Carbon::today()->subDays(1)->toW3cString();
            $orderRepository->setFilters([
                'properties' => [
                    OrderPropertyType::PERMISSION_ORDER_FEEDBACK => 1
                ],
                'dates' => [
                    OrderDateType::ORDER_COMPLETED_ON => 'between:' . $from . ',' . $to
                ]
            ]);
            return $orderRepository->searchOrders();
        });

       //iterate through orders
       foreach($orders->getResult() as $order) {

           $addressId = null;

           foreach ($order['addressRelations'] as $address) {
               if ($address['typeId'] == AddressRelationType::BILLING_ADDRESS) {
                   $addressId = $address['addressId'];
                   break;
               }
           }
            /** @var AddressRepositoryContract $addressRepository */
           $addressRepository = pluginApp(AddressRepositoryContract::class);
           $address = $addressRepository->findAddressById($addressId);

           $mail = null;
           foreach ($address->options as $addressOption) {
               if ($addressOption['typeId'] == AddressOption::TYPE_EMAIL) {
                   $mail = $addressOption['value'];
                   break;
               }
           }
           /** @var MailerContract $mailer */
           $mailer = pluginApp(MailerContract::class);
           $mailer->sendHtml("<div>DAS IST EIN TEST</div>",$mail, "TEST FEEDBACK");
           foreach ($order['properties'] as &$property) {
               if ($property['typeId'] == OrderPropertyType::PERMISSION_ORDER_FEEDBACK) {
                   $property['value'] = '2';
                   break;
               }
           }
           //$orderRepository->update($order['id'], $order);
       }
    }
}