<template>
  <div
    class="feedback-item mb-4"
    :class="'col-12 col-sm-' + 12 / numberOfColumns"
  >
    <div
      class="stars"
      @click="handleRating(0)"
    >
      <form>
        <div role="radiogroup" class="d-flex flex-row-reverse">
          <template v-for="starId in starIds">
            <input
              :id="starId.id"
              :key="'stars_input_' + starId.id"
              v-model="feedback.ratingValue"
              :class="starId.class"
              type="radio"
              :value="starId.value"
              name="ratingValue"
              :disabled="isRated"
              @click="handleRating(starId.value)"
            >
            <label
              :key="'stars_label_' + starId.id"
              :for="starId.id"
              class="new_star"
            >
              <span class="d-none">{{ starId.id }}</span>
              <svg
                :class="starId.class"
                :for="starId.id"
                width="100%"
                height="100%"
                viewBox="0 0 31 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              ><path
                d="M30.5,11.564c0,0.265 -0.156,0.553 -0.469,0.866l-6.544,6.382l1.55,9.014c0.012,0.085 0.018,0.205 0.018,0.361c0,0.252 -0.063,0.466 -0.189,0.64c-0.126,0.174 -0.31,0.261 -0.55,0.261c-0.228,0 -0.469,-0.072 -0.721,-0.216l-8.095,-4.255l-8.095,4.255c-0.264,0.144 -0.505,0.216 -0.721,0.216c-0.253,0 -0.442,-0.087 -0.568,-0.261c-0.126,-0.174 -0.189,-0.388 -0.189,-0.64c0,-0.072 0.012,-0.192 0.036,-0.361l1.55,-9.014l-6.562,-6.382c-0.301,-0.325 -0.451,-0.613 -0.451,-0.866c0,-0.444 0.337,-0.721 1.01,-0.829l9.05,-1.316l4.057,-8.203c0.228,-0.493 0.522,-0.739 0.883,-0.739c0.361,0 0.655,0.246 0.883,0.739l4.057,8.203l9.05,1.316c0.673,0.108 1.01,0.385 1.01,0.829Z"
                style="fill-rule:nonzero;"
              /></svg>
            </label>
          </template>
        </div>
      </form>
    </div>
    <a :href="item.url">
      <img
        :alt="'image '+ item.name"
        :src="item.image"
        class="py-2"
      >
      <span class="feedback-item-title">{{ item.name }}</span>
    </a>
    <div class="feedback-item-link">
      <div
        v-for="attribute in item.attributes"
        :key="item.itemId+'-'+attribute.valueId"
      >
        <strong>{{ attribute.attribute.names.name }}: </strong>
        <span>{{ attribute.value.names.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackOrderItem',
  props: {
    item: Object,
    numberOfColumns: Number
  },

  data () {
    return {
      isRated: false,
      feedback: {
        ratingValue: 0,
        authorName: '',
        title: '',
        message: '',
        type: 'review',
        targetId: 0,
        honeypot: ''
      }
    }
  },

  computed: {
    starIds () {
      const ids = []
      const starClass = this.isRated ? 'star-rated' : 'star'

      for (let i = 5; i > 0; i--) {
        ids.push(
          {
            value: i,
            id: 'star-' + i + '-' + this.item.variationId,
            class: starClass
          }
        )
      }

      return ids
    },
    variationAttributes () {
      return null
    }
  },

  mounted () {
    vueEventHub.$on('orderItemFeedback_created', (event) => {
      if (event.feedback.targetId === this.item.variationId) {
        this.feedback = event.feedback
        this.isRated = true
      }
    })
  },

  methods: {
    handleRating (value) {
      if (!this.isRated && value > 0) {
        this.feedback.ratingValue = value
      }

      vueEventHub.$emit('orderItemFeedback_showform', {
        item: this.item,
        feedback: this.feedback,
        isRated: this.isRated
      })
    }
  }
}
</script>
