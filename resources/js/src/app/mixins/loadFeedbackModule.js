import FeedbackModule from '../store/FeedbackModule'

export default {
  created () {
    if (!this.$store.hasModule('feedback') && !App.isSSR) {
      this.$store.registerModule('feedback', FeedbackModule, { preserveState: !!this.$store.state.feedback })
    }
  }
}
