<template>
  <section class="feedback-container feedback-orderitem-container">
    <div class="title">
      {{ $translate("Feedback::Feedback.orderItemTitle") }}
    </div>
    <hr>
    <div
      v-if="!isLoading"
      class="feedback-items row"
    >
      <feedback-order-item
        v-for="order in pagination"
        :key="order.variationId"
        :item="order"
        :number-of-columns="trueItemsPerRow"
      />
    </div>
    <div
      v-else
      class="w-100 text-center"
    >
      <p>{{ $translate("Feedback::Feedback.loadingItems") }}</p>
    </div>
    <button
      v-if="!isLoading && (page * options.itemsPerRow * options.rowsPerPage < orderItems.length)"
      class="btn btn-default btn-block feedback-loadmore"
      @click="nextPage()"
    >
      Weitere Artikel anzeigen
    </button>
    <feedback-order-form
      v-if="!isLoading"
      :allow-guest-feedbacks="options.allowGuestFeedbacks"
      :number-of-feedbacks="options.numberOfFeedbacks"
      :access-key="accessKey"
      :order-id="orderId"
    />
  </section>
</template>

<script>
import FeedbackOrderForm from './FeedbackOrderForm.vue'
import FeedbackOrderItem from './FeedbackOrderItem.vue'
import loadFeedbackModule from '../../mixins/loadFeedbackModule'

export default {

  components: {
    'feedback-order-form': FeedbackOrderForm,
    'feedback-order-item': FeedbackOrderItem
  },

  mixins: [loadFeedbackModule],

  props: {
    variations: Object,
    items: Array,
    itemUrls: Object,
    itemImages: Object,
    options: Object,
    splitItemBundles: Number,
    accessKey: String,
    orderId: String
  },

  data () {
    return {
      isLoading: true,
      page: 1
    }
  },

  computed: {
    orderItems () {
      const aggregate = []

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].itemVariationId > 0 && this.items[i].orderItemName.indexOf('[-]') === -1) {
          const key = this.items[i].itemVariationId

          const bundleType = this.variations[key].variation.bundleType
          const itemName = this.items[i].orderItemName

          aggregate.push({
            name: this.filterItemName(itemName, bundleType),
            image: this.itemImages[key],
            url: this.itemUrls[key],
            variationId: key,
            itemId: this.variations[key].item.id
          })

          // Check itemBundleSplit
          if (bundleType === 'bundle' && this.splitItemBundles < 1) {
            for (let j = 0; j < this.items[i].bundleComponents.length; j++) {
              const variationId = this.items[i].bundleComponents[j].data.variation.id

              aggregate.push({
                name: this.$options.filters.itemName(this.items[i].bundleComponents[j].data),
                image: this.itemImages[variationId],
                url: this.itemUrls[variationId],
                variationId: variationId,
                itemId: this.items[i].bundleComponents[j].data.itemId
              })
            }
          }
        }
      }

      return aggregate
    },

    pagination () {
      const amount = this.page * this.options.itemsPerRow * this.options.rowsPerPage
      return this.orderItems.slice(0, amount)
    },

    trueItemsPerRow () {
      return Math.min(this.orderItems.length, this.options.itemsPerRow)
    }
  },

  mounted () {
    $.when(
      this.getUser()
    ).done(() => {
      this.isLoading = false
      Vue.nextTick(() => {
        // DOM updated
        window.dispatchEvent(new Event('resize'))
      })
    })
  },

  methods: {
    getUser () {
      // Get array of item and variationIds
      const itemIds = []
      const variationIds = []

      for (let i = 0; i < this.orderItems.length; i++) {
        const orderItem = this.orderItems[i]
        itemIds.push(orderItem.itemId)
        variationIds.push(orderItem.variationId)
      }
      const data = {
        itemIds: itemIds,
        variationIds: variationIds,
        allowFeedbacksOnlyIfPurchased: false,
        numberOfFeedbacks: this.options.numberOfFeedbacks
      }

      if (this.orderId && this.accessKey) {
        data.orderId = this.orderId
        data.accessKey = this.accessKey
      }

      return this.$store.dispatch('loadFeedbackUser', {
        data: data,
        itemId: this.itemId,
        variationId: this.variationId
      })
    },

    nextPage () {
      const amount = this.page * this.options.itemsPerRow * this.options.rowsPerPage

      if (amount < this.orderItems.length) {
        this.page += 1
      }
    },

    filterItemName (itemName, bundleType) {
      if (bundleType === 'bundle') {
        return itemName.replace('[BUNDLE]', '')
      }

      if (bundleType === 'bundle_item') {
        return itemName.replace('[-]', '')
      }

      return itemName
    }
  }
}
</script>
