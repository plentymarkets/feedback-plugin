import FeedbackModule from './app/store/FeedbackModule'
import './app/publicPath'

const Vue = window.Vue

Vue.component('FeedbackAverage', () => import('./app/components/item/FeedbackAverage.vue'))
Vue.component('FeedbackContainer', () => import('./app/components/item/singleitem/FeedbackContainer.vue'))
Vue.component('FeedbackOrderContainer', () => import('./app/components/order/FeedbackOrder.vue'))

window.afterCreate.push(() => {
  window.vueApp.$store.registerModule('feedback', FeedbackModule, { preserveState: !!vueApp.$store.state.feedback })
})
