<template>
  <section class="feedback-container orderFeedback-confirmation widget-primary">
    <div class="h1">
      {{ $translate("Feedback::Feedback.orderFeedbackConfirmationTitle") }}
    </div>
    <p>
      {{ $translate("Feedback::Feedback.orderFeedbackConfirmationQuestion") }}
    </p>
    <div class="btn-group">
      <button class="btn btn-primary">
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationYes") }}
      </button>
      <button class="btn ml-3 btn-light ">
        {{ $translate("Feedback::Feedback.orderFeedbackConfirmationNo") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
