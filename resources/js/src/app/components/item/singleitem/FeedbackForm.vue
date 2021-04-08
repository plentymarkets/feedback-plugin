<template>
  <div>
    <div
      v-if="authenticatedUser.isLoggedIn || options.allowGuestFeedbacks"
      class="createFeedback"
    >
      <div class="stars">
        <input
          v-for="i in 5"
          :id="'star-' + i + _uid"
          v-model="feedback.ratingValue"
          :class="'star star-' + i"
          type="radio"
          :value="i "
          :name="'ratingValue' + _uid"
        >
        <label
          v-for="i in 5"
          :class="'star star-' + i"
          :for="'star-' + i + _uid"
        />
      </div>

      <p
        v-if="ratingMissing && !options.allowNoRatingFeedback"
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

        <input
          id="feedback-textfield"
          v-model="feedback.honeypot"
          type="text"
          class="form-control"
          name="feedback-textfield"
        >
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
export default {
    props: ['variationId', 'authenticatedUser', 'options'],

    data()
    {
        return {
            feedback: {
                ratingValue: 0,
                authorName: "",
                title: "",
                message: "",
                type: 'review',
                targetId: this.variationId,
                honeypot: ""
            },
            isLoading: false,
            titleMissing: false,
            ratingMissing: false
        };
    },

    methods: {
        createFeedback()
        {
            if( this.isLoading )
            {
                return;
            }

            if(this.feedback.honeypot.length > 0)
            {
                return;
            }

            if ( !this.options.allowNoRatingFeedback && this.feedback.ratingValue <= 0 )
            {
                this.ratingMissing = true;
                return;
            }

            if ( !this.feedback.title )
            {
                this.titleMissing = true;
                return;
            }

            this.isLoading = true;

            this.feedback.options = this.options;

            var _self = this;
            $.ajax({
                type: 'POST',
                url: '/rest/feedbacks/feedback/create',
                data: this.feedback,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data)
                {
                    _self.$emit('feedback-added', data);
                    _self.isLoading = false;
                    _self.feedback['authorName'] = '';
                    _self.feedback['message'] = '';
                    _self.feedback['title'] = '';
                    _self.feedback['ratingValue'] = 0;
                    _self.titleMissing = false;
                    _self.ratingMissing = false;
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    console.error(errorThrown);
                    _self.isLoading = false;
                }
            });
        },

        createLoginModal()
        {
            this.$store.dispatch("loadComponent", "login-modal");
        }
    }
}

</script>
