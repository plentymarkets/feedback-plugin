<template>
  <section class="feedback-container orderFeedback-confirmation widget-primary border">
    <div class="h1">
      {{ $translate("Feedback::Feedback.orderFeedbackConfirmationTitle") }}
    </div>
    <p class="pt-2 pb-2">
      {{ $translate("Feedback::Feedback.orderFeedbackConfirmationQuestion") }}
    </p>
    <div class="btn-group">
      <button class="btn btn-appearance">
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationYes") }}
      </button>
      <button class="btn btn-default ml-4">
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationNo") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
