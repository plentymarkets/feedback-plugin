<template>
  <div class="fb-avg-1">
    <div
      v-if="showEmptyRatings || counts.averageValue > 0"
      class="feedback-stars-average"
      :class="size"
    ><div class="feedback-stars-background">
        <div
          v-for="index in 5"
          :key="'star_background_' + index"
          class="feedback-star"
        >
          <i class="fa fa-star" />
        </div>
      </div>
      <div class="feedback-stars-overlay-wrap"
        :style="{width:fill}">
        <div class="feedback-stars-overlay">
          <div
            v-for="index in 5"
            :key="'star_overlay_' + index"
            class="feedback-star"
          >
            <i class="fa fa-star" />
          </div>
        </div>
      </div>
    </div>
    <span
      v-if="showRatingsAmount && (showEmptyRatings || counts.averageValue > 0)"
      :class="size"
    ><a
      href="#"
      @click.prevent="scrollTo"
    >({{ counts.ratingsCountTotal }})</a></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import loadFeedbackModule from '../../mixins/loadFeedbackModule'

export default {

  mixins: [loadFeedbackModule],
  inject: {
    itemId: {
      default: null
    }
  },

  props: {
    showEmptyRatings: Boolean,
    sizeOfStars: {
      type: String,
      default: 'small'
    },
    showRatingsAmount: Boolean
  },

  computed: {
    fill () {
      let fillValue = (this.counts.averageValue * 100) / 5
      fillValue += '%'
      return fillValue
    },

    size () {
      return this.sizeOfStars.indexOf('-stars') !== -1 ? this.sizeOfStars : this.sizeOfStars + '-stars'
    },

    ...mapState({
      counts: state => state.feedback.counts
    })
  },

  mounted () {
    if (!App.isShopBuilder) {
      this.getAverage()
    }
  },

  methods: {
    getAverage () {
      this.$store.dispatch('loadFeedbackCounts', this.itemId)
    },

    scrollTo () {
      let targetElement = document.querySelector('[data-feedback]')
      const headerMargin = document.querySelector('#vue-app').offsetTop

      if (targetElement) {
        while (!(targetElement.clientHeight && targetElement.classList.contains('widget')) && !!targetElement.parentElement) {
          targetElement = targetElement.parentElement
        }

        if (targetElement) {
          const elementTop = targetElement.getBoundingClientRect().top + window.scrollY - headerMargin

          window.scrollTo(
            {
              top: elementTop,
              behavior: 'smooth'
            }
          )
        }
      }
    }
  }
}
</script>
