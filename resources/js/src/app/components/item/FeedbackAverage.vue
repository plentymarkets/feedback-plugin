<template>
    <div v-if="showEmptyRatings || counts.averageValue > 0">
        <div class="feedback-stars-average" v-bind:class="size">
            <div class="feedback-stars-background clearfix">
                <div class="feedback-star" v-for="index in 5">
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="feedback-stars-overlay-wrap" :style="{width:fill}">
                <div class="feedback-stars-overlay clearfix">
                    <div class="feedback-star" v-for="index in 5">
                        <i class="fa fa-star"></i>
                    </div>
                </div
            </div>
        </div>
        <span v-if="showRatingsAmount" :class="size"><a v-on:click.prevent="scrollTo" href="#">({{ counts.ratingsCountTotal }})</a></span>
    </div>
</template>

<script>
export default {
    props: ['showEmptyRatings', 'sizeOfStars', 'showRatingsAmount'],

    inject: {
        itemId: {
          default: null
        }
    },

    data() {
        return {
            counts: {
              'averageValue': 0,
              'ratingsCountTotal': 0
            }
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
    }
}
</script>
