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
    <hr>
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
          :authenticated-user="authenticatedUser"
          :options="optionsForm"
          @feedback-added="onFeedbackAdded($event)"
        />
      </div>
    </div>

    <hr>

    <feedback-list
      :feedbacks="authenticatedUser.feedbacks"
      :is-last-page="true"
      :authenticated-user="authenticatedUser"
      :item-attributes="itemAttributes"
      :show-controls="true"
      :classes="classes"
      :styles="styles"
      :options="optionsList"
      @delete="showDeleteConfirmation($event)"
    />

    <feedback-list
      :feedbacks="feedbacks"
      :is-last-page="isLastPage"
      :authenticated-user="authenticatedUser"
      :item-attributes="itemAttributes"
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
    <script
      v-if="counts.ratingsCountTotal > 0"
      type="application/ld+json"
      v-html="jsonld"
    />
  </section>
</template>

<script>
import FeedbackForm from './FeedbackForm.vue'
import FeedbackList from './FeedbackList.vue'

export default {

  components: {
    'feedback-form': FeedbackForm,
    'feedback-list': FeedbackList
  },

  inject: {
    itemId: {
      default: null
    }
  },
  props: ['options', 'classes', 'styles'],

  data () {
    return {
      authenticatedUser: {
        id: 0,
        isLoggedIn: false,
        hasPurchased: false,
        limitReached: false,
        feedbacks: []
      },
      counts: {},
      feedbacks: [],
      currentPage: 1,
      lastPage: 0,
      isLastPage: true,
      isLoading: true,
      itemAttributes: [],
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
      },
      jsonld: {}
    }
  },

  computed:
    {
      currentVariation: function () {
        return this.$store.getters[this.itemId + '/currentItemVariation']
      },

      variationId: function () {
        return this.currentVariation && this.currentVariation.variation.id
      }
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
        const _self = this
        return $.ajax({
          type: 'GET',
          url: '/rest/feedbacks/user/' + _self.itemId + '/' + _self.variationId,
          data:
                    {
                      allowFeedbacksOnlyIfPurchased: _self.options.allowFeedbacksOnlyIfPurchased,
                      numberOfFeedbacks: _self.options.numberOfFeedbacks
                    },
          success: function (data) {
            _self.authenticatedUser = data
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown)
          }
        })
      },
      getCounts () {
        const _self = this
        return $.ajax({
          type: 'GET',
          url: '/rest/feedbacks/feedback/helper/counts/' + _self.itemId,
          success: function (data) {
            _self.counts = data.counts
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown)
          }
        })
      },
      loadFeedbacks () {
        const _self = this
        const page = this.currentPage++
        return $.ajax({
          type: 'GET',
          url: '/rest/feedbacks/feedback/helper/feedbacklist/' + _self.itemId + '/' + page,
          data: {
            feedbacksPerPage: _self.options.feedbacksPerPage
          },
          success: function (data) {
            _self.feedbacks = _self.feedbacks.concat(data.feedbacks)
            _self.itemAttributes = data.itemAttributes
            _self.lastPage = data.pagination.lastPage
            _self.isLastPage = data.pagination.isLastPage
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown)
          }
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
          const _self = this
          $.ajax({
            type: 'DELETE',
            url: '/rest/feedbacks/feedback/delete/' + feedbackId,
            success: function (data) {
              function filterFeedbackList (feedbackList, feedbackId) {
                return feedbackList.filter(function (feedback) {
                  return feedback.id !== feedbackId
                })
              }

              function filterReplyList (feedbackList, feedbackId, replyId) {
                return feedbackList.map(function (feedback) {
                  if (feedbackId === feedback.id) {
                    feedback.replies = feedback.replies.filter(function (reply) {
                      return reply.id !== replyId
                    })
                  }
                  return feedback
                })
              }

              // If visible, adjust counts
              if (_self.feedbackToDelete.feedbackObject.isVisible && parentFeedbackId === null) {
                const feedback = _self.feedbackToDelete.feedbackObject
                const ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue)
                if (ratingValue > 0 && ratingValue <= 5) {
                  _self.counts['ratingsCountOf' + ratingValue]--
                  _self.counts.ratingsCountTotal--

                  // Calculate average anew
                  let average = 0
                  average += _self.counts.ratingsCountOf5 * 5
                  average += _self.counts.ratingsCountOf4 * 4
                  average += _self.counts.ratingsCountOf3 * 3
                  average += _self.counts.ratingsCountOf2 * 2
                  average += _self.counts.ratingsCountOf1 * 1
                  average /= _self.counts.ratingsCountTotal

                  _self.counts.averageValue = average
                  _self.$root.$emit('averageRecalc')
                }
              }

              if (parentFeedbackId === null) {
                _self.feedbacks = filterFeedbackList(_self.feedbacks, feedbackId)
                _self.authenticatedUser.feedbacks = filterFeedbackList(_self.authenticatedUser.feedbacks, feedbackId)
              } else {
                _self.feedbacks = filterReplyList(_self.feedbacks, parentFeedbackId, feedbackId)
                _self.authenticatedUser.feedbacks = filterReplyList(_self.authenticatedUser.feedbacks, parentFeedbackId, feedbackId)
              }

              _self.feedbackToDelete = null
            }
          })
        }
        $(this.$refs.confirmDeleteModal).modal('hide')
      },
      onFeedbackAdded (feedback) {
        this.authenticatedUser.feedbacks.unshift(feedback)
        if (feedback.isVisible) {
          const ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue)
          if (ratingValue > 0 && ratingValue <= 5) {
            this.counts['ratingsCountOf' + ratingValue]++
            this.counts.ratingsCountTotal++
            // Calculate average anew
            let average = 0
            average += this.counts.ratingsCountOf5 * 5
            average += this.counts.ratingsCountOf4 * 4
            average += this.counts.ratingsCountOf3 * 3
            average += this.counts.ratingsCountOf2 * 2
            average += this.counts.ratingsCountOf1 * 1
            average /= this.counts.ratingsCountTotal

            this.counts.averageValue = average

            this.$root.$emit('averageRecalc')
          }
        }
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
