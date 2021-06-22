import FeedbackModule from './app/store/FeedbackModule'

function beforeCreate (context) {
  Vue.component('FeedbackAverage', () => import('./app/components/item/FeedbackAverage.vue'))
  Vue.component('FeedbackContainer', () => import('./app/components/item/singleitem/FeedbackContainer.vue'))
  Vue.component('FeedbackOrderContainer', () => import('./app/components/order/FeedbackOrder.vue'))
}

function beforeRender (vueApp) {
  vueApp.$store.registerModule('feedback', FeedbackModule)
}

export { beforeCreate, beforeRender }
