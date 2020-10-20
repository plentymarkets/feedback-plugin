import "./app/publicPath";

const Vue = window.Vue;

Vue.component("feedback-average", () => import("./app/components/item/FeedbackAverage.vue"));
Vue.component("feedback-container", () => import("./app/components/item/singleitemFeedback/FeedbackContainer.vue"));

