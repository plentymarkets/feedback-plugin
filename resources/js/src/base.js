import "./app/publicPath";

const Vue = window.Vue;

Vue.component("feedback-average", () => import("./app/components/item/FeedbackAverage.vue"));
// Vue.component("feedback-item", () => import("./app/components/item/FeedbackItem.vue"));

console.log("Feedback bundle loaded!");
