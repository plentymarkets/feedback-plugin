<template>
  <div
    class="feedback clearfix"
    :class="{'loading':isLoading}"
  >
    <div
      v-if="(!editableFeedback && showControls) || (isFeedbackEditable(feedbackData.id) || canUserEdit())"
      class="feedback-options"
    >
      <span
        v-if="!feedbackData.isVisible"
        v-tooltip
        class="btn-sm btn-danger"
        data-toggle="tooltip"
        data-placement="top"
        :data-original-title="$translate('Feedback::Feedback.moderationMessage')"
      >
        <i class="fa fa-eye-slash" />
      </span>

      <span
        v-if="authenticatedUser.isLoggedIn"
        ref="editButton"
        v-tooltip
        class="btn btn-sm btn-danger"
        data-toggle="tooltip"
        data-placement="top"
        :data-original-title="isReply ? $translate('Feedback::Feedback.editReply') : $translate('Feedback::Feedback.editReview')"
        @click="editFeedback()"
      >
        <i class="fa fa-pencil" />
      </span>

      <span
        v-if="authenticatedUser.isLoggedIn"
        v-tooltip
        class="btn btn-sm btn-danger"
        data-toggle="tooltip"
        data-placement="top"
        :data-original-title="isReply ? $translate('Feedback::Feedback.deleteReply') : $translate('Feedback::Feedback.deleteReview')"
        @click="showDeleteConfirmation()"
      >
        <i class="fa fa-trash-o" />
      </span>
    </div>

    <feedback-comment
      v-if="!editableFeedback"
      :feedback="feedbackData"
      :is-reply="isReply"
      :show-controls="showControls"
      :classes="classes"
      :styles="styles"
      :options="options"
      @delete="$emit('delete', $event)"
    />

    <div v-if="!!editableFeedback && isReply">
      <div class="form-group">
        <textarea
          v-model="editableFeedback.message"
          class="form-control"
          rows="3"
          :placeholder="$translate('Feedback::Feedback.replyMessage')"
        />
      </div>
      <button
        class="btn btn-primary btn-appearance"
        @click="saveEditableFeedback()"
      >
        {{ $translate("Feedback::Feedback.editReply") }}
      </button>
      <button
        class="btn btn-secondary feedback-edit-cancel"
        @click="editableFeedback = null"
      >
        {{ $translate("Feedback::Feedback.cancel") }}
      </button>
    </div>

    <div v-if="!!editableFeedback && !isReply">
      <div class="stars">
        <template v-for="i in [5,4,3,2,1]">
          <input
            :id="'star-' + _uid + '-' + i"
            :key="'stars_input_' + i"
            v-model="editableFeedback.ratingValue"
            :class="'star star-' + i"
            type="radio"
            :value="i"
            name="ratingValue"
            :aria-label="`${$translate('Feedback::Feedback.feedbackTextLegend')}-${i}`"
          >
        </template>
      </div>
      <div class="form-group">
        <input
          v-model="editableFeedback.title"
          type="text"
          class="form-control"
          name="title"
          :placeholder="$translate('Feedback::Feedback.title')"
          required
          :aria-label="`${$translate('Feedback::Feedback.editReview')}-${$translate('Feedback::Feedback.title')}`"
        >
      </div>
      <div class="form-group">
        <textarea
          v-model="editableFeedback.message"
          class="form-control"
          name="message"
          rows="3"
          :placeholder="$translate('Feedback::Feedback.title')"
          :aria-label="`${$translate('Feedback::Feedback.editReview')}-${$translate('Feedback::Feedback.commentMessage')}`"
        />
      </div>

      <button
        class="btn btn-primary btn-appearance"
        @click="saveEditableFeedback()"
      >
        {{ $translate("Feedback::Feedback.editReview") }}
      </button>
      <button
        class="btn btn-secondary feedback-edit-cancel"
        @click="editableFeedback = null"
      >
        {{ $translate("Feedback::Feedback.cancel") }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FeedbackListEntry',

  components: {
    'feedback-comment': () => import('./FeedbackComment.vue')
  },

  props: {
    feedback: Object,
    isReply: Boolean,
    showControls: Boolean,
    classes: String,
    styles: String,
    options: Object
  },

  data () {
    return {
      editableFeedback: null,
      isLoading: false,
      feedbackData: {}
    }
  },

  created () {
    this.feedbackData = this.feedback
  },

  computed: {
    ...mapState({
      authenticatedUser: state => state.feedback.authenticatedUser
    })
  },

  methods: {
    showDeleteConfirmation () {
      let parentFeedbackId = null
      if (this.isReply) {
        parentFeedbackId = parseInt(this.feedbackData.targetRelation.feedbackRelationTargetId)
      }
      this.$emit('delete', {
        feedbackId: this.feedbackData.id,
        isReply: this.isReply,
        parentFeedbackId: parentFeedbackId,
        feedbackObject: this.feedbackData
      })
    },

    editFeedback () {
      if (this.editableFeedback === null) {
        $(this.$refs.editButton).tooltip('dispose')
        this.editableFeedback = {
          title: '',
          message: this.feedbackData.feedbackComment.comment.message,
          ratingValue: -1,
          isReply: this.isReply
        }

        if (!this.isReply) {
          this.editableFeedback.title = this.feedbackData.title
          this.editableFeedback.ratingValue = this.feedbackData.feedbackRating.rating.ratingValue
        }
      }
    },

    saveEditableFeedback () {
      const _self = this
      if (this.editableFeedback !== null) {
        const editableFeedback = this.editableFeedback
        const requestBody = {
          message: editableFeedback.message
        }

        if (!editableFeedback.isReply) {
          requestBody.title = editableFeedback.title
          requestBody.ratingValue = editableFeedback.ratingValue
        }

        this.isLoading = true
        $.ajax({
          type: 'PUT',
          url: '/rest/feedbacks/feedback/update/' + this.feedback.id,
          data: requestBody,
          success: function (data) {
            _self.feedbackData.feedbackComment.comment.message = editableFeedback.message
            _self.feedbackData.isVisible = data.isVisible

            if (!editableFeedback.isReply) {
              _self.feedbackData.title = editableFeedback.title
              _self.feedbackData.feedbackRating.rating.ratingValue = editableFeedback.ratingValue
            }
            _self.isLoading = false
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown)
            _self.isLoading = false
          }
        })
      }
      this.editableFeedback = null
    },

    isFeedbackEditable (id) {
      // we are on the list from the microservice
      const ids = []
      if (this.showControls === false && this.authenticatedUser.feedbacks) {
        this.authenticatedUser.feedbacks.forEach((feedbackItem) => {
          if (feedbackItem.isVisible) {
            ids.push(feedbackItem.id)
          }
        })
      }

      return ids.includes(id)
    },

    canUserEdit () {
      if (!this.feedbackData.sourceRelation[0].feedbackRelationSourceId) {
        return false
      }
      return this.feedbackData.sourceRelation[0].feedbackRelationType === 'contact' &&
          parseInt(this.feedbackData.sourceRelation[0].feedbackRelationSourceId) === this.authenticatedUser.id
    }

  }
}
</script>
