<template>
    <div class="feedback clearfix" :class="{'loading':isLoading}">
        <div class="feedback-options" v-if="!editableFeedback && showControls">
            <span class="btn-sm btn-danger"
                  v-tooltip
                  data-toggle="tooltip"
                  data-placement="top"
                  :data-original-title="$translate('Feedback::Feedback.moderationMessage')"
            v-if="!feedback.isVisible">
            <i class="fa fa-eye-slash"></i>
            </span>

            <span class="btn btn-sm btn-danger"
                  v-if="authenticatedUser.isLoggedIn"
                  ref="editButton"
                  v-tooltip
                  data-toggle="tooltip"
                  data-placement="top"
                  :data-original-title="isReply ? $translate('Feedback::Feedback.editReply') : $translate('Feedback::Feedback.editReview')"
            @click="editFeedback()">
            <i class="fa fa-pencil"></i>
            </span>

            <span class="btn btn-sm btn-danger"
                  v-if="authenticatedUser.isLoggedIn"
                  v-tooltip
                  data-toggle="tooltip"
                  data-placement="top"
                  :data-original-title="isReply ? $translate('Feedback::Feedback.deleteReply') : $translate('Feedback::Feedback.deleteReview')"
            @click="showDeleteConfirmation()">
            <i class="fa fa-trash-o"></i>
            </span>
        </div>

        <feedback-comment
            v-if="!editableFeedback"
            :feedback="feedback"
            :item-attributes="itemAttributes"
            :authenticated-user="authenticatedUser"
            :is-reply="isReply"
            :show-controls="showControls"
            @delete="$emit('delete', $event)"
            :classes="classes"
            :styles="styles"
            :options="options">
        </feedback-comment>

        <div v-if="!!editableFeedback && isReply">
            <div class="form-group">
                <textarea class="form-control"
                          rows="3"
                          :placeholder="$translate('Feedback::Feedback.replyMessage')"
                v-model="editableFeedback.message">
                </textarea>
            </div>
            <button class="btn btn-primary btn-appearance" @click="saveEditableFeedback()">{{ $translate("Feedback::Feedback.editReply") }}</button>
            <button class="btn btn-secondary feedback-edit-cancel" @click="editableFeedback = null">{{ $translate("Feedback::Feedback.cancel") }}</button>
        </div>

        <div v-if="!!editableFeedback && !isReply">
            {% set uid = uid() %}
            <div class="stars">
                <template v-for="i in 5">
                    <input :class="'star star-' + i" :id="'star-' + _uid  + '-' + i" type="radio" :value="i" name="ratingValue" v-model="editableFeedback.ratingValue">
                    <label :class="'star star-' + i" :for="'star-' + _uid + '-' + i"></label>
                </template>
            </div>
            <div class="form-group">
                <input type="text"
                       class="form-control"
                       name="title"
                       v-model="editableFeedback.title"
                       :placeholder="$translate('Feedback::Feedback.title')"
                required>
            </div>
            <div class="form-group">
                <textarea class="form-control"
                          name="message" rows="3"
                          :placeholder="$translate('Feedback::Feedback.title')"
                v-model="editableFeedback.message"></textarea>
            </div>

            <button class="btn btn-primary btn-appearance" @click="saveEditableFeedback()">{{ $translate("Feedback::Feedback.editReview") }}</button>
            <button class="btn btn-secondary feedback-edit-cancel" @click="editableFeedback = null">{{ $translate("Feedback::Feedback.cancel") }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['feedback', 'authenticatedUser', 'itemAttributes', 'isReply', 'showControls', 'classes', 'styles', 'options'],
    name: 'feedback-list-entry',
    components: {
        'feedback-comment': () => import("./FeedbackComment.vue")
    },

    data()
    {
        return {
            editableFeedback: null,
            isLoading: false
        };
    },

    methods: {
        showDeleteConfirmation()
        {
            let parentFeedbackId = null;
            if ( this.isReply )
            {
                parentFeedbackId = parseInt(this.feedback.targetRelation.feedbackRelationTargetId);
            }
            this.$emit('delete', {
                feedbackId: this.feedback.id,
                isReply: this.isReply,
                parentFeedbackId: parentFeedbackId,
                feedbackObject: this.feedback
            });
        },

        editFeedback()
        {
            if ( this.editableFeedback === null )
            {
                $(this.$refs.editButton).tooltip('dispose');
                this.editableFeedback = {
                    title: "",
                    message: this.feedback.feedbackComment.comment.message,
                    ratingValue: -1,
                    isReply: this.isReply
                };

                if ( !this.isReply )
                {
                    this.editableFeedback.title = this.feedback.title;
                    this.editableFeedback.ratingValue = this.feedback.feedbackRating.rating.ratingValue;
                }
            }
        },

        saveEditableFeedback()
        {
            const _self = this;
            if ( this.editableFeedback !== null )
            {
                const editableFeedback = this.editableFeedback;
                const requestBody = {
                    message: editableFeedback.message
                };

                if ( !editableFeedback.isReply )
                {
                    requestBody.title = editableFeedback.title;
                    requestBody.ratingValue = editableFeedback.ratingValue;
                }

                this.isLoading = true;
                $.ajax({
                    type: "PUT",
                    url: '/rest/feedbacks/feedback/update/' + this.feedback.id,
                    data: requestBody,
                    success: function(data)
                    {
                        _self.feedback.feedbackComment.comment.message = editableFeedback.message;
                        _self.feedback.isVisible = data.isVisible;

                        if ( !editableFeedback.isReply )
                        {
                            _self.feedback.title = editableFeedback.title;
                            _self.feedback.feedbackRating.rating.ratingValue = editableFeedback.ratingValue;
                        }
                        _self.isLoading = false;
                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        console.error(errorThrown);
                        _self.isLoading = false;
                    }
                });
            }
            this.editableFeedback = null;
        }
    }
}
</script>
