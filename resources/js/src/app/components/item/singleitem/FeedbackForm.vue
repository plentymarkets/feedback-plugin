<template>
  <div>
    <div
      v-if="authenticatedUser.isLoggedIn || options.allowGuestFeedbacks"
      class="createFeedback"
    >
      <div class="stars">
        <fieldset>
          <legend><span class="visually-hidden">{{ $translate("Feedback::Feedback.feedbackTextLegend") }}</span></legend>
          <template v-for="i in [5,4,3,2,1]">
            <input
              :id="'star-' + i + _uid"
              :key="'star_input_' + i"
              v-model="feedback.ratingValue"
              :class="'star star-' + i"
              type="radio"
              :value="i "
              :name="'ratingValue' + _uid"
            >
            <label
              :key="'star_label_' + i"
              :class="'star star-' + i"
              :for="'star-' + i + _uid"
            ><span class="visually-hidden">{{ $translate("Feedback::Feedback.feedbackAverageLabel", {"count": i }) }}</span></label>
          </template>
        </fieldset>
      </div>

      <p
        v-if="ratingMissing"
        class="feedback-error alert alert-danger"
      >
        {{ $translate("Feedback::Feedback.ratingRequired") }}
      </p>

      <div
        v-if="!authenticatedUser.isLoggedIn && options.allowGuestFeedbacks"
        class="form-group"
      >
        <input
          id="author"
          v-model="feedback.authorName"
          type="text"
          class="form-control"
          name="author"
          :placeholder="$translate('Feedback::Feedback.authorName')"
          :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased"
        >
        <label
          class="position-absolute"
          for="author"
        ><span class="visually-hidden">{{ $translate("Feedback::Feedback.authorName") }}</span></label>

        <input
          id="feedback-textfield"
          v-model="feedback.honeypot"
          type="text"
          class="form-control"
          name="feedback-textfield"
        >
        <label
          class="position-absolute"
          for="feedback-textfield"
        ><span class="visually-hidden">{{ $translate("Feedback::Feedback.feedbackTextLabel") }}</span></label>
      </div>

      <div class="form-group">
        <input
          id="title"
          v-model="feedback.title"
          type="text"
          class="form-control"
          :class="{'is-invalid': titleMissing}"
          name="title"
          :placeholder="$translate('Feedback::Feedback.title')"
          :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased"
        >
        <label
          class="position-absolute"
          for="title"
        ><span class="visually-hidden">{{ $translate("Feedback::Feedback.title") }}</span></label>
        <div class="invalid-feedback">
          {{ $translate("Feedback::Feedback.titleRequired") }}
        </div>
      </div>

      <div class="form-group">
        <textarea
          id="message"
          v-model="feedback.message"
          class="form-control"
          name="message"
          rows="3"
          :placeholder="$translate('Feedback::Feedback.reviewMessage')"
          :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased"
        />
        <label
          class="position-absolute"
          for="message"
        >
          <span class="visually-hidden">{{ $translate("Feedback::Feedback.reviewMessage") }}</span>
        </label>
      </div>

      <div
        v-if="authenticatedUser.limitReached"
        v-tooltip
        class="feedback-tooltip-wrapper"
        data-toggle="tooltip"
        data-placement="top"
        :data-original-title="$translate('Feedback::Feedback.maximumNumberOfFeedbacksReached')"
      >
        <button
          class="btn btn-primary btn-appearance"
          disabled
        >
          {{ $translate("Feedback::Feedback.submitReview") }}
        </button>
      </div>

      <div
        v-else-if="!authenticatedUser.hasPurchased"
        v-tooltip
        class="feedback-tooltip-wrapper"
        data-toggle="tooltip"
        data-placement="top"
        :data-original-title="$translate('Feedback::Feedback.errorDoesntOwnProduct')"
      >
        <button
          class="btn btn-primary btn-appearance"
          disabled
        >
          {{ $translate("Feedback::Feedback.submitReview") }}
        </button>
      </div>
      <button
        v-else
        class="btn btn-primary btn-appearance"
        :disabled="isLoading"
        @click="createFeedback()"
      >
        {{ $translate("Feedback::Feedback.submitReview") }}
      </button>
    </div>
    <div v-else>
      <div class="alert alert-info">
        {{ $translate("Feedback::Feedback.logInCustomerReviews") }}
      </div>

      <a
        class="btn btn-primary btn-appearance"
        data-toggle="modal"
        href="#login"
        @click="createLoginModal()"
      >
        <span>{{ $translate("Feedback::Feedback.login") }}</span>
        <i
          class="fa fa-user"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FeedbackForm',
  props: {
    variationId: Number,
    options: Object
  },

  data () {
    return {
      feedback: {
        ratingValue: 0,
        authorName: '',
        title: '',
        message: '',
        type: 'review',
        targetId: this.variationId,
        honeypot: ''
      },
      isLoading: false,
      titleMissing: false,
      ratingMissing: false
    }
  },

  computed: {
    ...mapState({
      authenticatedUser: state => state.feedback.authenticatedUser
    })
  },

  methods: {
    createFeedback () {
      if (this.isLoading) {
        return
      }

      if (this.feedback.honeypot.length > 0) {
        return
      }

      if (this.feedback.ratingValue <= 0) {
        this.ratingMissing = true
        return
      }

      if (!this.feedback.title) {
        this.titleMissing = true
        return
      }

      this.isLoading = true

      $.ajax({
        type: 'POST',
        url: '/rest/feedbacks/feedback/create',
        data: this.feedback,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: (data) => {
          this.$store.commit('addFeedback', data)
          this.isLoading = false
          this.feedback.authorName = ''
          this.feedback.message = ''
          this.feedback.title = ''
          this.feedback.ratingValue = 0
          this.titleMissing = false
          this.ratingMissing = false
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.error(errorThrown)
          this.isLoading = false
        }
      })
    },

    createLoginModal () {
      this.$store.dispatch('loadComponent', 'login-modal')
    }
  }
}

</script>
