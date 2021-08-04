<template>
  <section class="feedback-container orderFeedback-confirmation widget-primary">
    <div class="h1">
      {{ $translate("Feedback::Feedback.orderFeedbackConfirmationTitle") }}
    </div>
    <p>
      {{ $translate("Feedback::Feedback.orderFeedbackConfirmationQuestion") }}
    </p>
    <div class="btn-group">
      <button
        class="btn btn-primary"
        :disabled="isDisabled"
        @click="feedback(1)"
      >
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationYes") }}
      </button>
      <button
        class="btn ml-3 btn-light"
        :disabled="isDisabled"
        @click="feedback(0)"
      >
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationNo") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: { orderId: null },

  data () {
    return {
      isDisabled: false
    }
  },

  methods:
      {
        feedback (value) {
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
            },
            error: (jqXHR, textStatus, errorThrown) => {
              console.error(errorThrown)
            }
          })
        }
      }

}
</script>
