import FeedbackModule from '../store/FeedbackModule'

export default {
  mounted () {
    if (!this.$store.hasModule('feedback') && !App.isSSR) {
      console.log('MODULE CREATED')
      this.$store.registerModule('feedback', FeedbackModule, { preserveState: !!this.$store.state.feedback })
    } else {
      console.log('MODULE ALREADY EXISTS')
    }
  }
}
