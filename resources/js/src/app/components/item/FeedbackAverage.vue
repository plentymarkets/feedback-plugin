<template>
  <div v-if="showEmptyRatings || counts.averageValue > 0">
    <div
      class="feedback-stars-average"
      :class="size"
    >
      <div class="feedback-stars-background clearfix">
        <div
          v-for="index in 5"
          class="feedback-star"
        >
          <i class="fa fa-star" />
        </div>
      </div>
      <div
        class="feedback-stars-overlay-wrap"
        :style="{width:fill}"
      >
        <div class="feedback-stars-overlay clearfix">
          <div
            v-for="index in 5"
            class="feedback-star"
          >
            <i class="fa fa-star" />
          </div>
        </div>
      </div>
      <span
        v-if="showRatingsAmount"
        :class="size"
      ><a
        href="#"
        @click.prevent="scrollTo"
      >({{ counts.ratingsCountTotal }})</a></span>
    </div>
  </div>
</template>

<script>
export default {

    inject: {
        itemId: {
          default: null
        }
    },
    props: ['showEmptyRatings', 'sizeOfStars', 'showRatingsAmount'],

    data() {
        return {
            counts: {
              'averageValue': 0,
              'ratingsCountTotal': 0
            }
        }
    },

    computed: {
        fill() {
            let fillValue = (this.counts.averageValue * 100) / 5;
            fillValue += "%";
            return fillValue;
        },

        size() {
            return this.sizeOfStars.indexOf("-stars") !== -1 ? this.sizeOfStars : this.sizeOfStars + "-stars";
        }
    },

    created() {
        const _self = this;
        this.$root.$on('averageRecalc', function() {
            _self.getAverage();
        });

        if(!App.isShopBuilder)
        {
            this.getAverage();
        }
    },

    methods: {
        getAverage() {
            const _self = this;
            return $.ajax({
                type: 'GET',
                url: '/rest/feedbacks/feedback/helper/average/' + _self.itemId,
                success: function(data)
                {
                    _self.counts = data;
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                    console.error(errorThrown);
                }
            });
        },

        scrollTo() {
            let targetElement = document.querySelector("[data-feedback]");
            const headerMargin = document.querySelector("#vue-app").offsetTop;

            if (targetElement)

            {
                while (!(targetElement.clientHeight && targetElement.classList.contains("widget")) && !!targetElement.parentElement)
                {
                    targetElement = targetElement.parentElement;
                }

                if (targetElement)
                {
                    const elementTop = targetElement.getBoundingClientRect().top + window.scrollY - headerMargin;

                    window.scrollTo(
                        {
                          top: elementTop,
                          behavior: "smooth"
                        }
                    );
                }
            }
        }
    }
}
</script>
