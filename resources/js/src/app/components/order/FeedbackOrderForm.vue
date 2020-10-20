<template>
    <!-- Modal -->
    <div class="modal fade feedback-orderitem-modal"
         ref="orderItemFeedbackModal"
         tabindex="-1"
         role="dialog"
         :aria-labelledby="'feedbackOrderItem-' + _uid"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title h3" :id="'feedbackConfirmDeleteLabel-' + _uid">{{ $translate("Feedback::Feedback.customerReviews") }}</span>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body row">
                    <div class="col-4">
                        <img :alt="item.name" :src="item.image">
                        <div class="stars">
                            <template v-for="starId in starIds">
                                <input v-model="feedback.ratingValue"
                                       :class="starId.class"
                                       :id="starId.id"
                                       type="radio"
                                       :value="starId.value"
                                       :disabled="isRated"
                                       name="ratingValue"/>
                                <label :for="starId.id" class="new_star">
                                    <svg :class="starId.class" :for="starId.id" width="100%" height="100%" viewBox="0 0 31 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M30.5,11.564c0,0.265 -0.156,0.553 -0.469,0.866l-6.544,6.382l1.55,9.014c0.012,0.085 0.018,0.205 0.018,0.361c0,0.252 -0.063,0.466 -0.189,0.64c-0.126,0.174 -0.31,0.261 -0.55,0.261c-0.228,0 -0.469,-0.072 -0.721,-0.216l-8.095,-4.255l-8.095,4.255c-0.264,0.144 -0.505,0.216 -0.721,0.216c-0.253,0 -0.442,-0.087 -0.568,-0.261c-0.126,-0.174 -0.189,-0.388 -0.189,-0.64c0,-0.072 0.012,-0.192 0.036,-0.361l1.55,-9.014l-6.562,-6.382c-0.301,-0.325 -0.451,-0.613 -0.451,-0.866c0,-0.444 0.337,-0.721 1.01,-0.829l9.05,-1.316l4.057,-8.203c0.228,-0.493 0.522,-0.739 0.883,-0.739c0.361,0 0.655,0.246 0.883,0.739l4.057,8.203l9.05,1.316c0.673,0.108 1.01,0.385 1.01,0.829Z" style="fill-rule:nonzero;"/></svg>
                                </label>
                            </template>
                        </div>
                    </div>
                    <div class="col-8">
                        <a :href="item.url">{{ item.name }}</a>

                        <div class="form-group" v-if="!authenticatedUser.isLoggedIn && allowGuestFeedbacks">
                            <input type="text"
                                   v-model="feedback.authorName"
                                   class="form-control"
                                   id="author"
                                   name="author"
                                   :disabled="isRated || limitReached"
                                   :placeholder="$translate('Feedback::Feedback.authorName')">

                            <input type="text"
                                   v-model="feedback.honeypot"
                                   class="form-control"
                                   id="feedback-textfield"
                                   :disabled="isRated || limitReached"
                                   name="feedback-textfield">

                        </div>

                        <div class="form-group">
                            <input type="text"
                                   v-model="feedback.title"
                                   class="form-control"
                                   :class="{'is-invalid': titleMissing}"
                                   id="title"
                                   name="title"
                                   :disabled="isRated || limitReached"
                                   :placeholder="$translate('Feedback::Feedback.title')">

                            <div class="invalid-feedback">{{ $translate("Feedback::Feedback.titleRequired") }}</div>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control"
                                      v-model="feedback.message"
                                      id="message"
                                      name="message"
                                      :rows="rows"
                                      :disabled="isRated || limitReached"
                                      :placeholder="$translate('Feedback::Feedback.reviewMessage')"></textarea>
                        </div>
                    </div>
                </div>
                <div  class="modal-footer">
                    <button v-if="!isRated && !limitReached" type="button" class="btn btn-primary btn-appearance btn-block" :disabled="isRated" @click="createFeedback()">{{ $translate("Feedback::Feedback.submitReview") }}</button>
                    <div v-else-if="limitReached" class="w-100 text-center">
                        {{ $translate("Feedback::Feedback.maximumNumberOfFeedbacksReached") }}
                    </div>
                    <div v-else class="w-100 text-center">
                        {{ $translate("Feedback::Feedback.thankYou") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['authenticatedUser', 'allowGuestFeedbacks', 'numberOfFeedbacks', 'accessKey', 'orderId'],

    data: function()
    {
        return {
            feedback: {
                ratingValue: 0,
                authorName: "",
                title: "",
                message: "",
                type: 'review',
                targetId: 0,
                honeypot: ""
            },
            isLoading: false,
            isRated : false,
            titleMissing: false,
            item: {
                url: "",
                image: "",
                variationId: 0,
                name: "",
                itemId: 0
            }
        };
    },

    mounted: function() {
        var _self = this;
        vueEventHub.$on('orderItemFeedback_showform', function(event) {
            _self.prepare(event);
        });
    },

    computed: {
        starIds: function() {
            var ids = [];
            var starClass = this.isRated ? "star-rated" : "star";

            for(var i = 5; i > 0; i--) {
                ids.push(
                    {
                        value: i,
                        id: "star-" + i + "-" + this.item.variationId + "-form",
                        class: starClass
                    }
                );
            }

            return ids;
        },

        rows: function() {
            // Dynamically set rows to offset the optional authorName input
            return this.authenticatedUser.id > 0 ? 8 : 6;
        },

        limitReached: function()
        {
            var key = this.item.itemId;
            return this.authenticatedUser.limitReached[key];
        }
    },

    methods: {
        prepare: function(event) {
            this.item = event.item;
            this.isRated = event.isRated;
            var _self = this;

            Vue.nextTick(function () {
                _self.feedback = event.feedback;
                $(_self.$refs.orderItemFeedbackModal).modal('show');
            });
        },
        createFeedback: function()
        {
            if( this.isLoading || this.feedback.honeypot.length > 0)
            {
                return;
            }

            if (!this.feedback.title )
            {
                this.titleMissing = true;
                return;
            }

            if(this.limitReached)
            {
                return;
            }

            this.isLoading = true;

            this.feedback.options = this.options;
            this.feedback.targetId = this.item.variationId;

            this.feedback.accessKey = this.accessKey;
            this.feedback.orderId = this.orderId;

            var _self = this;
            $.ajax({
                type: 'POST',
                url: '/rest/feedbacks/feedback/create',
                data: this.feedback,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data)
                {
                    vueEventHub.$emit('orderItemFeedback_created', {
                        feedback: JSON.parse(JSON.stringify(_self.feedback))
                    });

                    _self.isLoading = false;
                    _self.feedback['authorName'] = '';
                    _self.feedback['message'] = '';
                    _self.feedback['title'] = '';
                    _self.feedback['ratingValue'] = 0;
                    _self.titleMissing = false;
                    _self.ratingMissing = false;


                    $(_self.$refs.orderItemFeedbackModal).modal('hide');
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    console.error(errorThrown);
                    _self.isLoading = false;
                }
            });
        }
    }
}
</script>
