<template>
  <div
    class="feedback-comment"
    :class="classes"
    :style="styles"
  >
    <div v-if="!isReply">
      <p class="feedback-comment-title">
        {{ feedback.title }}
      </p>

      <div
        v-if="feedback.feedbackRating.rating.ratingValue > 0"
        class="feedback-rating"
      >
        <i
          v-for="i in 5"
          :key="'feedback_rating_' + i"
          class="fa fa-star"
          :class="{full: feedback.feedbackRating.rating.ratingValue >= i, empty: feedback.feedbackRating.rating.ratingValue < i }"
        />
      </div>

      <div class="feedback-attributes-list">
        <p>
          <span
            v-if="isPurchased"
            class="feedback-verified-tag"
          >
            {{ $translate("Feedback::Feedback.verifiedPurchase") }}
          </span>

          <span
            v-for="(variationAttribute, index) in variationAttributes"
            :key="'feedback_attributes_' + index"
            class="feedback-attributes"
          >
            {{ variationAttribute.name }}: {{ variationAttribute.value }}
          </span>
        </p>
      </div>
    </div>

    <p
      class="feedback-comment-text"
      v-html="message"
    />
    <p class="feedback-info">
      <span class="feedback-info-segment">
        <strong>
          <span
            v-if="feedback.sourceRelation[0].feedbackRelationType === 'user'"
            v-tooltip
            class="feedback-admin"
            data-toggle="tooltip"
            data-placement="top"
            :data-original-title="$translate('Feedback::Feedback.shopManagerLabel')"
          >
            <i class="fa fa-check-square" />
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

      <span
        v-if="options.timestampVisibility"
        class="feedback-info-segment"
      >
        <i class="fa fa-calendar text-muted" />
        {{ feedback.createdAt | date($translate("Ceres::Template.devDateFormatMoment") || "DD.MM.YYYY") }}
      </span>

      <span
        v-if="!isReply && (authenticatedUser.isLoggedIn || options.allowGuestFeedbacks)"
        class="feedback-info-segment btn btn-sm btn-default"
        @click="replyFormVisible = !replyFormVisible"
      >
        {{ $translate("Feedback::Feedback.addComment") }}
      </span>

      <span
        v-if="(!!feedback.replies && feedback.replies.length > 0) && !replyListVisible"
        class="feedback-info-segment btn btn-sm btn-default"
        @click="replyListVisible = !replyListVisible"
      >
        {{ $translate("Feedback::Feedback.viewComments") }} ({{ feedback.replies.length }})
      </span>
      <span
        v-else-if="(!!feedback.replies && feedback.replies.length > 0) && replyListVisible"
        class="feedback-info-segment btn btn-sm btn-default"
        @click="replyListVisible = !replyListVisible"
      >
        {{ $translate("Feedback::Feedback.hideComments") }}
      </span>
    </p>

    <div
      v-if="replyFormVisible && !isReply && (authenticatedUser.isLoggedIn || options.allowGuestFeedbacks)"
      class="feedback-add-reply"
    >
      <div
        v-if="!authenticatedUser.isLoggedIn && options.allowGuestFeedbacks"
        class="form-group"
      >
        <input
          id="author"
          v-model="authorName"
          type="text"
          class="form-control"
          name="author"
          :placeholder="$translate('Feedback::Feedback.authorName')"
          :disabled="authenticatedUser.limitReached || !authenticatedUser.hasPurchased"
        >

        <input
          id="comment-textfield"
          v-model="honeypot"
          type="text"
          class="form-control"
          name="comment-textfield"
        >
      </div>

      <div class="form-group">
        <textarea
          v-model="replyMessage"
          class="form-control"
          name="message"
          rows="3"
          :placeholder="$translate('Feedback::Feedback.commentMessage')"
        />
      </div>

      <button
        class="btn btn-primary btn-appearance"
        :disabled="!replyMessage"
        @click="createReply()"
      >
        {{ $translate("Feedback::Feedback.submitComment") }}
      </button>
    </div>

    <div
      v-if="!!feedback.replies && feedback.replies.length > 0 && replyListVisible"
      class="feedback-replies"
    >
      <feedback-list-entry
        v-for="reply in feedback.replies"
        :key="reply.id"
        :feedback="reply"
        :item-attributes="itemAttributes"
        :authenticated-user="authenticatedUser"
        :is-reply="true"
        :show-controls="showControls"
        :classes="classes"
        :styles="styles"
        :options="options"
        @delete="$emit('delete', $event)"
      />
    </div>
  </div>
</template>

<script>
import FeedbackListEntry from './FeedbackListEntry.vue'

export default {
  name: 'FeedbackComment',
  components: {
    'feedback-list-entry': FeedbackListEntry
  },
  props: ['feedback', 'itemAttributes', 'authenticatedUser', 'isReply', 'showControls', 'classes', 'styles', 'options'],

  data () {
    return {
      authorName: '',
      replyMessage: '',
      replyFormVisible: false,
      replyListVisible: false,
      honeypot: ''
    }
  },

  computed: {
    variationAttributes () {
      if (this.feedback.targetRelation.feedbackRelationType !== 'variation' ||
                this.feedback.targetRelation.targetRelationName.length <= 0 ||
                !this.feedback.targetRelation.variationAttributes ||
                !this.itemAttributes) {
        return []
      }

      const _self = this
      return this.feedback
        .targetRelation
        .variationAttributes
        .map(function (attributeIds) {
          const targetId = _self.feedback.targetRelation.feedbackRelationTargetId
          if (!_self.itemAttributes.hasOwnProperty(targetId) ||
                        !_self.itemAttributes[targetId].hasOwnProperty(attributeIds.attributeId) ||
                        !_self.itemAttributes[targetId][attributeIds.attributeId].hasOwnProperty(attributeIds.valueId)) {
            return null
          }
          const attribute = _self.itemAttributes[targetId][attributeIds.attributeId][attributeIds.valueId]
          return {
            name: attribute.attributeName,
            value: attribute.attributeValue
          }
        })
        .filter(function (entry) {
          return entry !== null
        })
    },

    displayName () {
      const rawName = this.feedback.sourceRelation[0].sourceRelationLabel

      if (rawName !== ' ') {
        return rawName.split(' ')
          .map(function (namePart, index) {
            if (index === 0) {
              return namePart + ' '
            }
            return namePart.substr(0, 1) + '.'
          })
          .join('')
      } else {
        return $translate('Feedback::Feedback.guestName')
      }
    },

    message () {
      if (!this.feedback.feedbackComment) {
        return ''
      }
      return this.feedback
        .feedbackComment
        .comment
        .message.split('\n')
        .join('<br />')
    },

    isPurchased () {
      return this.feedback
        .sourceRelation
        .find(function (relation) {
          return relation.feedbackRelationType === 'orderItem'
        })
    }
  },

  methods: {
    createReply () {
      if (!this.replyMessage || this.honeypot.length > 0) {
        return
      }

      const _self = this
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
        success: function (data) {
          if (!_self.feedback.replies) {
            _self.feedback.replies = []
          }
          _self.feedback.replies.unshift(data)
          _self.replyMessage = ''
          _self.replyFormVisible = false
          _self.replyListVisible = true
        }
      })
    }
  }
}
</script>
