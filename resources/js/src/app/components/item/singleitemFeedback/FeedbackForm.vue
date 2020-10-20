<template>
    <div>
        <div class="createFeedback" v-if="authenticatedUser.isLoggedIn || options.allowGuestFeedbacks">
            <div class="stars">
                <input v-model="feedback.ratingValue"
                       v-for="i in 5"
                       :class="'star star-' + i"
                       :id="'star-' + i + _uid"
                       type="radio"
                       :value="i "
                       :name="'ratingValue' + _uid"/>
                <label v-for="i in 5" :class="'star star-' + i" :for="'star-' + i + _uid"></label>
            </div>

            <p v-if="ratingMissing && !options.allowNoRatingFeedback" class="feedback-error alert alert-danger">
                {{ $translate("Feedback::Feedback.ratingRequired") }}
            </p>

            <div class="form-group" v-if="!authenticatedUser.isLoggedIn && options.allowGuestFeedbacks">
                <input type="text"
                       v-model="feedback.authorName"
                       class="form-control"
                       id="author"
                       name="author"
                       :placeholder="$translate('Feedback::Feedback.authorName')"
                :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased">

                <input type="text"
                       v-model="feedback.honeypot"
                       class="form-control"
                       id="feedback-textfield"
                       name="feedback-textfield">
            </div>

            <div class="form-group">
                <input type="text"
                       v-model="feedback.title"
                       class="form-control"
                       :class="{'is-invalid': titleMissing}"
                       id="title"
                       name="title"
                       :placeholder="$translate('Feedback::Feedback.title')"
                :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased">

                <div class="invalid-feedback">{{ $translate("Feedback::Feedback.titleRequired") }}</div>
            </div>

            <div class="form-group">
                <textarea class="form-control"
                          v-model="feedback.message"
                          id="message"
                          name="message"
                          rows="3"
                          :placeholder="$translate('Feedback::Feedback.reviewMessage')"
                :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased"></textarea>
            </div>

            <div class="feedback-tooltip-wrapper"
                 v-if="authenticatedUser.limitReached"
                 v-tooltip
                 data-toggle="tooltip"
                 data-placement="top"
                 :data-original-title="$translate('Feedback::Feedback.maximumNumberOfFeedbacksReached')" >
            <button class="btn btn-primary btn-appearance" disabled>{{ $translate("Feedback::Feedback.submitReview") }}</button>
            </div>

            <div class="feedback-tooltip-wrapper"
                 v-else-if="!authenticatedUser.hasPurchased"
                 v-tooltip
                 data-toggle="tooltip"
                 data-placement="top"
                 :data-original-title="$translate('Feedback::Feedback.errorDoesntOwnProduct')" >
                <button class="btn btn-primary btn-appearance" disabled>{{ $translate("Feedback::Feedback.submitReview") }}</button>
            </div>
            <button v-else class="btn btn-primary btn-appearance" @click="createFeedback()" :disabled="isLoading">
                {{ $translate("Feedback::Feedback.submitReview") }}
            </button>
        </div>
        <div v-else>
            <div class="alert alert-info">
                {{ $translate("Feedback::Feedback.logInCustomerReviews") }}
            </div>

            <a class="btn btn-primary btn-appearance" data-toggle="modal" href="#login" @click="createLoginModal()">
                <span>{{ $translate("Feedback::Feedback.login") }}</span>
                <i class="fa fa-user" aria-hidden="true"></i>
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
