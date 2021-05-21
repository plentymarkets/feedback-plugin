<template>
  <section class="feedback-container">
    <div class="title">
      {{ $translate("Feedback::Feedback.customerReviews") }}
      <small class="feedback-average-count"> ({{ counts.ratingsCountTotal }})</small>
    </div>
    <div class="feedback-stars-average">
      <div class="feedback-stars-background clearfix">
        <div
          v-for="index in 5"
          :key="'feedback_stars_background' + index"
          class="feedback-star"
        >
          <i class="fa fa-star" />
        </div>
      </div>
      <div
        class="feedback-stars-overlay-wrap"
        :style="{ width: ((counts.averageValue * 100) / 5) + '%' }"
      >
        <div class="feedback-stars-overlay clearfix">
          <div
            v-for="index in 5"
            :key="'feedback_stars_overlay_' + index"
            class="feedback-star"
          >
            <i class="fa fa-star" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="row my-2"
      :class="classes"
      :style="styles"
    >
      <div class="col-sm-6">
        <div class="feedback-bars">
          <div class="feedback-bar-wrap">
            <p class="feedback-bar-text-before">
              5 <i class="fa fa-star" />
            </p>
            <div class="feedback-bar">
              <div
                class="feedback-bar-fill bg-primary bg-appearance"
                :style="{ width: (counts.ratingsCountOf5 / counts.highestCount * 100) + '%' }"
              />
            </div>
            <p class="feedback-bar-text-after">
              {{ counts.ratingsCountOf5 }}
            </p>
          </div>

          <div class="feedback-bar-wrap">
            <p class="feedback-bar-text-before">
              4 <i class="fa fa-star" />
            </p>
            <div class="feedback-bar">
              <div
                class="feedback-bar-fill bg-primary bg-appearance"
                :style="{ width: (counts.ratingsCountOf4 / counts.highestCount * 100) + '%' }"
              />
            </div>
            <p class="feedback-bar-text-after">
              {{ counts.ratingsCountOf4 }}
            </p>
          </div>

          <div class="feedback-bar-wrap">
            <p class="feedback-bar-text-before">
              3 <i class="fa fa-star" />
            </p>
            <div class="feedback-bar">
              <div
                class="feedback-bar-fill bg-primary bg-appearance"
                :style="{ width: (counts.ratingsCountOf3 / counts.highestCount * 100) + '%' }"
              />
            </div>
            <p class="feedback-bar-text-after">
              {{ counts.ratingsCountOf3 }}
            </p>
          </div>

          <div class="feedback-bar-wrap">
            <p class="feedback-bar-text-before">
              2 <i class="fa fa-star" />
            </p>
            <div class="feedback-bar">
              <div
                class="feedback-bar-fill bg-primary bg-appearance"
                :style="{ width: (counts.ratingsCountOf2 / counts.highestCount * 100) + '%' }"
              />
            </div>
            <p class="feedback-bar-text-after">
              {{ counts.ratingsCountOf2 }}
            </p>
          </div>

          <div class="feedback-bar-wrap">
            <p class="feedback-bar-text-before">
              1 <i class="fa fa-star" />
            </p>
            <div class="feedback-bar">
              <div
                class="feedback-bar-fill bg-primary bg-appearance"
                :style="{ width: (counts.ratingsCountOf1 / counts.highestCount * 100) + '%' }"
              />
            </div>
            <p class="feedback-bar-text-after">
              {{ counts.ratingsCountOf1 }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <feedback-form
          v-if="!isLoading"
          :variation-id="variationId"
          :options="optionsForm"
        />
      </div>
    </div>


    <feedback-list
      :feedbacks="authenticatedUser.feedbacks"
      :is-last-page="true"
      :show-controls="true"
      :classes="classes"
      :styles="styles"
      :options="optionsList"
      @delete="showDeleteConfirmation($event)"
    />

    <feedback-list
      :feedbacks="feedbacks"
      :is-last-page="pagination.isLastPage"
      :show-controls="false"
      :classes="classes"
      :styles="styles"
      :options="optionsList"
      @load-more="loadFeedbacks()"
      @delete="showDeleteConfirmation($event)"
    />

    <p
      v-if="isLoading"
      class="loading-hint"
    >
      {{ $translate("Feedback::Feedback.loadingFeedbacks") }}
    </p>

    <!-- Modal -->
    <div
      ref="confirmDeleteModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      :aria-labelledby="'feedbackConfirmDeleteLabel-' + _uid"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <span
              :id="'feedbackConfirmDeleteLabel-' + _uid"
              class="modal-title h5"
            >{{ $translate("Feedback::Feedback.deleteConfirm") }}</span>
          </div>
          <div class="modal-body">
            <p
              v-if="!!feedbackToDelete && feedbackToDelete.isReply"
              class="feedback-delete-confirmation"
            >
              {{ $translate("Feedback::Feedback.deleteReply") }}
            </p>
            <p
              v-else
              class="feedback-delete-confirmation"
            >
              {{ $translate("Feedback::Feedback.deleteReview") }}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              {{ $translate("Feedback::Feedback.cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-appearance"
              @click="deleteFeedback()"
            >
              {{ $translate("Feedback::Feedback.yesDeleteIt") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeedbackForm from './FeedbackForm.vue'
import FeedbackList from './FeedbackList.vue'
import { mapState } from 'vuex'
import loadFeedbackModule from '../../../mixins/loadFeedbackModule'

export default {

  components: {
    'feedback-form': FeedbackForm,
    'feedback-list': FeedbackList
  },

  mixins: [loadFeedbackModule],

  inject: {
    itemId: {
      default: null
    }
  },

  props: {
    options: Object,
    classes: String,
    styles: String
  },

  data () {
    return {
      isLoading: true,
      feedbackToDelete: null,
      optionsList: {
        timestampVisibility: this.options.timestampVisibility,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      },
      optionsForm: {
        allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
        allowNoRatingFeedback: this.options.allowNoRatingFeedback,
        numberOfFeedbacks: this.options.numberOfFeedbacks,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      }
    }
  },

  computed:
    {
      currentVariation: function () {
        return this.$store.getters[this.itemId + '/currentItemVariation']
      },

      variationId: function () {
        return this.currentVariation && this.currentVariation.variation.id
      },

      ...mapState({
        authenticatedUser: state => state.feedback.authenticatedUser,
        counts: state => state.feedback.counts,
        feedbacks: state => state.feedback.feedbacks,
        pagination: state => state.feedback.pagination
      })
    },

  mounted () {
    if (!App.isShopBuilder) {
      const _self = this
      $.when(
        this.getUser(),
        this.getCounts(),
        this.loadFeedbacks()
      ).done(function () {
        _self.isLoading = false
        _self.generateJsonLD()
        Vue.nextTick(function () {
          // DOM updated
          window.dispatchEvent(new Event('resize'))
        })
      })
    } else {
      this.isLoading = false
    }
  },

  methods:
    {
      getUser () {
        return this.$store.dispatch('loadFeedbackUser', {
          data: {
            allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
            numberOfFeedbacks: this.options.numberOfFeedbacks
          },
          itemId: this.itemId,
          variationId: this.variationId
        })
      },

      getCounts () {
        return this.$store.dispatch('loadFeedbackCounts', this.itemId)
      },

      loadFeedbacks () {
        return this.$store.dispatch('loadPaginatedFeedbacks', {
          itemId: this.itemId,
          feedbacksPerPage: this.options.feedbacksPerPage
        })
      },

      showDeleteConfirmation (feedbackToDelete) {
        this.feedbackToDelete = feedbackToDelete
        $(this.$refs.confirmDeleteModal).modal('show')
      },

      deleteFeedback () {
        if (this.feedbackToDelete !== null) {
          const feedbackId = this.feedbackToDelete.feedbackId
          const parentFeedbackId = this.feedbackToDelete.parentFeedbackId

          this.$store.dispatch('deleteFeedback', {
            feedbackId: feedbackId,
            parentFeedbackId: parentFeedbackId,
            feedback: this.feedbackToDelete.feedbackObject
          })
        }

        $(this.$refs.confirmDeleteModal).modal('hide')
      },

      generateJsonLD () {
        if (this.counts.ratingsCountTotal > 0) {
          const jsonld = {
            '@context': 'http://schema.org/',
            '@type': 'Product',
            '@id': this.variationId.toString(),
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: this.counts.averageValue,
              reviewCount: this.counts.ratingsCountTotal
            },
            review: []
          }

          this.feedbacks.forEach(function (feedback) {
            let author

            if ((feedback.sourceRelation[0].feedbackRelationType === 'user' ||
                        feedback.sourceRelation[0].feedbackRelationType === 'contact') && feedback.sourceRelation[0].feedbackRelationSourceId > 0) {
              author = feedback.sourceRelation[0].sourceRelationLabel
            } else if (feedback.sourceRelation[0].feedbackRelationSourceId === '0' && feedback.authorName.trim().length > 0) {
              author = feedback.authorName
            } else {
              author = 'Anonymous'
            }

            const review = {
              '@type': 'Review',
              author: author,
              datePublished: feedback.createdAt,
              reviewBody: feedback.feedbackComment.comment.message,
              name: feedback.title,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: feedback.feedbackRating.rating.ratingValue
              }
            }

            jsonld.review.push(review)
          })

          const script = document.createElement('script')
          script.setAttribute('type', 'application/ld+json')
          script.textContent = JSON.stringify(jsonld)
          document.head.appendChild(script)
        }
      }
    }
}
</script>
