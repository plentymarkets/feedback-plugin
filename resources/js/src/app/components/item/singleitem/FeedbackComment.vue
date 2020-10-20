<template>
    <div class="feedback-comment" :class="classes" :style="styles">
        <div v-if="!isReply">
            <p class="feedback-comment-title">{{ feedback.title }}</p>

            <div class="feedback-rating" v-if="feedback.feedbackRating.rating.ratingValue > 0">
                <i v-for="i in 5" class="fa fa-star" :class="{full: feedback.feedbackRating.rating.ratingValue >= i, empty: feedback.feedbackRating.rating.ratingValue < i }"></i>
            </div>

            <div class="feedback-attributes-list">
                <p>
                <span class="feedback-verified-tag"
                      v-if="isPurchased">
                    {{ $translate("Feedback::Feedback.verifiedPurchase") }}
                </span>

                    <span class="feedback-attributes" v-for="variationAttribute in variationAttributes">
                    {{ variationAttribute.name }}: {{ variationAttribute.value }}
                </span>
                </p>
            </div>
        </div>

        <p class="feedback-comment-text" v-html="message"></p>
        <p class="feedback-info">
        <span class="feedback-info-segment">
            <strong>
                <span class="feedback-admin"
                      v-tooltip
                      data-toggle="tooltip"
                      data-placement="top"
                      :data-original-title="$translate('Feedback::Feedback.shopManagerLabel')"
                      v-if="feedback.sourceRelation[0].feedbackRelationType === 'user'">
                        <i class="fa fa-check-square"></i>
                        {{ feedback.sourceRelation[0].sourceRelationLabel }}
                </span>
            <span v-else-if="feedback.sourceRelation[0].feedbackRelationSourceId == 0 && feedback.authorName.length > 0">
                    {{ feedback.authorName }}
                </span>
            <span v-else-if="feedback.sourceRelation[0].feedbackRelationSourceId == 0">
                    {{ $translate("Feedback::Feedback.guestName") }}
                </span>
            <span v-else>
                    {{ displayName }}
                </span>
            </strong>
            </span>

            <span class="feedback-info-segment"
                  v-if="options.timestampVisibility">
            <i class="fa fa-calendar text-muted"></i>
            {{ feedback.createdAt | date($translate("Ceres::Template.devDateFormatMoment") || "DD.MM.YYYY") }}
        </span>

            <span class="feedback-info-segment btn btn-sm btn-default"
                  @click="replyFormVisible = !replyFormVisible"
                  v-if="!isReply && (authenticatedUser.isLoggedIn || options.allowGuestFeedbacks)">
            {{ $translate("Feedback::Feedback.addComment") }}
        </span>

            <span class="feedback-info-segment btn btn-sm btn-default"
                  @click="replyListVisible = !replyListVisible"
                  v-if="(!!feedback.replies && feedback.replies.length > 0) && !replyListVisible">
            {{ $translate("Feedback::Feedback.viewComments") }} ({{ feedback.replies.length }})
        </span>
            <span class="feedback-info-segment btn btn-sm btn-default"
                  @click="replyListVisible = !replyListVisible"
                  v-else-if="(!!feedback.replies && feedback.replies.length > 0) && replyListVisible">
            {{ $translate("Feedback::Feedback.hideComments") }}
        </span>
        </p>

        <div class="feedback-add-reply" v-if="replyFormVisible && !isReply && (authenticatedUser.isLoggedIn || options.allowGuestFeedbacks)">
            <div class="form-group" v-if="!authenticatedUser.isLoggedIn && options.allowGuestFeedbacks">
                <input type="text"
                       v-model="authorName"
                       class="form-control"
                       id="author"
                       name="author"
                       :placeholder="$translate('Feedback::Feedback.authorName')"
                :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased">

                <input type="text"
                       v-model="honeypot"
                       class="form-control"
                       id="comment-textfield"
                       name="comment-textfield">
            </div>

            <div class="form-group">
            <textarea class="form-control"
                      name="message"
                      rows="3"
                      v-model="replyMessage"
                      :placeholder="$translate('Feedback::Feedback.commentMessage')">
                </textarea>
            </div>

            <button class="btn btn-primary btn-appearance" @click="createReply()" :disabled="!replyMessage">{{ $translate("Feedback::Feedback.submitComment") }}</button>
        </div>

        <div class="feedback-replies" v-if="!!feedback.replies && feedback.replies.length > 0 && replyListVisible">
            <feedback-list-entry
                v-for="reply in feedback.replies"
                :key="reply.id"
                :feedback="reply"
                :item-attributes="itemAttributes"
                :authenticated-user="authenticatedUser"
                :is-reply="true"
                :show-controls="showControls"
                @delete="$emit('delete', $event)"
                :classes="classes"
                :styles="styles"
                :options="options">
            </feedback-list-entry>
        </div>
    </div>
</template>

<script>
import FeedbackListEntry from "./FeedbackListEntry.vue";

export default {
    props: ['feedback', 'itemAttributes', 'authenticatedUser', 'isReply', 'showControls', 'classes', 'styles', 'options'],
    name: 'feedback-comment',
    components: {
        'feedback-list-entry': FeedbackListEntry
    },

    data()
    {
        return {
            authorName: '',
            replyMessage: '',
            replyFormVisible: false,
            replyListVisible: false,
            honeypot: ''
        };
    },

    computed: {
        variationAttributes()
        {
            if ( this.feedback.targetRelation.feedbackRelationType !== 'variation'
                || this.feedback.targetRelation.targetRelationName.length <= 0
                || !this.feedback.targetRelation.variationAttributes
                || !this.itemAttributes )
            {
                return [];
            }

            var _self = this;
            return this.feedback
                .targetRelation
                .variationAttributes
                .map(function(attributeIds) {
                    var targetId = _self.feedback.targetRelation.feedbackRelationTargetId;
                    if ( !_self.itemAttributes.hasOwnProperty(targetId)
                        || !_self.itemAttributes[targetId].hasOwnProperty(attributeIds.attributeId)
                        || !_self.itemAttributes[targetId][attributeIds.attributeId].hasOwnProperty(attributeIds.valueId) )
                    {
                        return null;
                    }
                    var attribute = _self.itemAttributes[targetId][attributeIds.attributeId][attributeIds.valueId];
                    return {
                        name: attribute.attributeName,
                        value: attribute.attributeValue
                    };
                })
                .filter(function(entry)
                {
                    return entry !== null;
                })
        },

        displayName()
        {
            var rawName =  this.feedback.sourceRelation[0].sourceRelationLabel;

            if(rawName !== " ") {
                return rawName.split(" ")
                    .map(function (namePart, index) {
                        if (index === 0) {
                            return namePart + " "
                        }
                        return namePart.substr(0, 1) + ".";
                    })
                    .join("");
            } else {
                return $translate('Feedback::Feedback.guestName');
            }
        },

        message()
        {
            if ( !this.feedback.feedbackComment )
            {
                return "";
            }
            return this.feedback
                .feedbackComment
                .comment
                .message.split('\n')
                .join('<br />');
        },

        isPurchased()
        {
            return this.feedback
                .sourceRelation
                .find(function(relation)
                {
                    return relation.feedbackRelationType === 'orderItem';
                });
        }
    },

    methods: {
        createReply()
        {
            if ( !this.replyMessage || this.honeypot.length > 0)
            {
                return;
            }

            var _self = this;
            $.ajax({
                type: 'POST',
                url: '/rest/feedbacks/feedback/create',
                data: {
                    authorName: this.authorName,
                    message: this.replyMessage,
                    targetId: this.feedback.id,
                    type: 'reply'
                },
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data)
                {
                    if ( !_self.feedback.replies )
                    {
                        _self.feedback.replies = [];
                    }
                    _self.feedback.replies.unshift(data);
                    _self.replyMessage = '';
                    _self.replyFormVisible = false;
                    _self.replyListVisible = true;

                }
            });
        }
    }
}
</script>
