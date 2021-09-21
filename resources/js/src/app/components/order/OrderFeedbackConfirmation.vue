<template>
  <section class="feedback-container orderFeedback-confirmation">
    <div
      v-if="display === 1"
    >
      <div class="mb-3">
        {{ $translate("Feedback::Feedback.orderFeeedbackConfirmationAfterYes") }}
      </div>
      <div class="d-flex">
        <button
          class="btn btn-light mx-auto"
          :disabled="isDisabled"
          @click="feedback(0);"
        >
          {{ $translate("Feedback::Feedback.orderFeedbackConfirmationRevoke") }}
        </button>
      </div>
    </div>
    <div v-else>
      <div class="h3">
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationTitle") }}
      </div>
      <p>
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationQuestion") }}
      </p>
      <div class="btn-group">
        <button
          class="btn btn-appearance"
          :disabled="isDisabled"
          @click="feedback(1)"
        >
          {{ $translate("Feedback::Feedback.orderFeedbackConfirmationYes") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderFeedbackContainer',
  props: { orderId: null, displayMode: null },

  data () {
    return {
      display: this.displayMode,
      isDisabled: false
    }
  },

  methods:
      {
        feedback (value) {
          this.isDisabled = true
          $.ajax({
            type: 'POST',
            url: '/rest/feedbacks/feedback/order/notification',
            data: { permission: value, orderId: this.orderId },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            success: (data) => {
              console.log(data)
              this.display = value
              this.isDisabled = false
            },
            error: (jqXHR, textStatus, errorThrown) => {
              console.error(errorThrown)
              this.isDisabled = false
            }
          })
        }
      }

}
</script>
