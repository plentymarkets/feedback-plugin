<template>
  <div class="feedback-list">
    <feedback-list-entry
      v-for="feedback in feedbacks"
      :key="feedback.id"
      :feedback="feedback"
      :authenticated-user="authenticatedUser"
      :item-attributes="itemAttributes"
      :is-reply="false"
      :show-controls="showControls"
      :classes="classes"
      :styles="styles"
      :options="options"
      @delete="$emit('delete', $event)"
    />

    <a
      v-if="!isLastPage"
      class="btn btn-default btn-block feedback-loadmore"
      @click="onLoadMoreClicked()"
    >
      {{ $translate("Feedback::Feedback.loadMore") }}
    </a>
  </div>
</template>

<script>
import FeedbackListEntry from "./FeedbackListEntry.vue";

export default {

    components: {
        'feedback-list-entry': FeedbackListEntry
    },
    props: ['feedbacks', 'isLastPage', 'authenticatedUser', 'itemAttributes', 'showControls', 'classes', 'styles', 'options'],

    methods: {
        onLoadMoreClicked()
        {
            this.$emit('load-more');
        }
    }
}
</script>
