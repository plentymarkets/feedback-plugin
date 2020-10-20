<template>
    <div class="feedback-list">
        <feedback-list-entry
            v-for="feedback in feedbacks"
            :key="feedback.id"
            :feedback="feedback"
            :authenticated-user="authenticatedUser"
            :item-attributes="itemAttributes"
            :is-reply="false" @delete="$emit('delete', $event)"
            :show-controls="showControls"
            :classes="classes"
            :styles="styles"
            :options="options">
        </feedback-list-entry>

        <a class="btn btn-default btn-block feedback-loadmore" v-if="!isLastPage" @click="onLoadMoreClicked()">
            {{ $translate("Feedback::Feedback.loadMore") }}
        </a>
    </div>
</template>

<script>
import FeedbackListEntry from "./FeedbackListEntry.vue";

export default {
    props: ['feedbacks', 'isLastPage', 'authenticatedUser', 'itemAttributes', 'showControls', 'classes', 'styles', 'options'],

    components: {
        'feedback-list-entry': FeedbackListEntry
    },

    methods: {
        onLoadMoreClicked()
        {
            this.$emit('load-more');
        }
    }
}
</script>
