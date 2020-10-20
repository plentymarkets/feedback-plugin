import "./app/publicPath";

const Vue = window.Vue;

Vue.component("feedback-average", () => import("./app/components/item/FeedbackAverage.vue"));
Vue.component("feedback-container", () => import("./app/components/item/singleitem/FeedbackContainer.vue"));
Vue.component("feedback-order-container", () => import("./app/components/order/FeedbackOrder.vue"));

