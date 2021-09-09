<template>
  <section class="feedback-container orderFeedback-confirmation">
      <div v-if="noFeedback" class="h4 mb-3">
        {{ $translate("Feedback::Feedback.orderFeeedbackConfirmationAfterNo") }}
      </div>
      <div class="d-flex">
        <button
            class="btn btn-outline-appearance mx-auto"
            :disabled="isDisabled"
            @click="feedback(NULL)"
        >
          {{ $translate("Feedback::Feedback.orderFeedbackConfirmationRevoke") }}
        </button>
      </div>
    <div
      v-if="display"
    >
      <div class="h4 mb-3">
        {{ $translate("Feedback::Feedback.orderFeeedbackConfirmationAfterYes") }}
      </div>
      <div class="d-flex">
        <button
            class="btn btn-outline-appearance mx-auto"
            :disabled="isDisabled"
            @click="feedback(0)"
        >
          {{ $translate("Feedback::Feedback.orderFeedbackConfirmationRevoke") }}
        </button>
      </div>
    </div>
    <div v-else-if="!noFeedback">
      <div class="h1">
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
        <button
          class="btn ml-3 btn-outline-appearance"
          :disabled="isDisabled"
          @click="feedback(0)"
        >
          {{ $translate("Feedback::Feedback.orderFeedbackConfirmationNo") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderFeedbackContainer',
  props: { orderId: null },

  data () {
    return {
      isDisabled: false,
      noFeedback: false,
      revokation: false
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
              if (value === 1) {
                this.display = true
              } else {
                this.display = false
                this.noFeedback = true
              }
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
