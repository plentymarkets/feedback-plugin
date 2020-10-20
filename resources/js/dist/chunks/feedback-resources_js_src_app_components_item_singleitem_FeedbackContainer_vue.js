(self["webpackChunkplentymarkets_feedback"] = self["webpackChunkplentymarkets_feedback"] || []).push([["resources_js_src_app_components_item_singleitem_FeedbackContainer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackForm.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue");
/* harmony import */ var _FeedbackList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackList.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['options', 'classes', 'styles'],
  components: {
    'feedback-form': _FeedbackForm_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    'feedback-list': _FeedbackList_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  inject: {
    itemId: {
      default: null
    }
  },

  data() {
    return {
      authenticatedUser: {
        id: 0,
        isLoggedIn: false,
        hasPurchased: false,
        limitReached: false,
        feedbacks: []
      },
      counts: {},
      feedbacks: [],
      currentPage: 1,
      lastPage: 0,
      isLastPage: true,
      isLoading: true,
      itemAttributes: [],
      feedbackToDelete: null,
      optionsList: {
        timestampVisibility: this.options.timestampVisibility,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      },
      optionsForm: {
        allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
        allowNoRatingFeedback: this.options.allowNoRatingFeedback,
        numberOfFeedbacks: this.options.numberOfFeedbacks,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      }
    };
  },

  mounted() {
    if (!App.isShopBuilder) {
      var _self = this;

      $.when(this.getUser(), this.getCounts(), this.loadFeedbacks()).done(function () {
        _self.isLoading = false;
        Vue.nextTick(function () {
          // DOM updated
          window.dispatchEvent(new Event('resize'));
        });
      });
    } else {
      this.isLoading = false;
    }
  },

  computed: {
    currentVariation: function () {
      return this.$store.getters[this.itemId + "/currentItemVariation"];
    },
    variationId: function () {
      return this.currentVariation && this.currentVariation.variation.id;
    }
  },
  methods: {
    getUser() {
      var _self = this;

      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/user/' + _self.itemId + '/' + _self.variationId,
        data: {
          "allowFeedbacksOnlyIfPurchased": _self.options.allowFeedbacksOnlyIfPurchased,
          "numberOfFeedbacks": _self.options.numberOfFeedbacks
        },
        success: function (data) {
          _self.authenticatedUser = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
        }
      });
    },

    getCounts() {
      var _self = this;

      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/feedback/helper/counts/' + _self.itemId,
        success: function (data) {
          _self.counts = data.counts;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
        }
      });
    },

    loadFeedbacks() {
      var _self = this;

      var page = this.currentPage++;
      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/feedback/helper/feedbacklist/' + _self.itemId + '/' + page,
        data: {
          "feedbacksPerPage": _self.options.feedbacksPerPage
        },
        success: function (data) {
          _self.feedbacks = _self.feedbacks.concat(data.feedbacks);
          _self.itemAttributes = data.itemAttributes;
          _self.lastPage = data.pagination.lastPage;
          _self.isLastPage = data.pagination.isLastPage;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
        }
      });
    },

    showDeleteConfirmation(feedbackToDelete) {
      this.feedbackToDelete = feedbackToDelete;
      $(this.$refs.confirmDeleteModal).modal('show');
    },

    deleteFeedback() {
      if (this.feedbackToDelete !== null) {
        var feedbackId = this.feedbackToDelete.feedbackId;
        var parentFeedbackId = this.feedbackToDelete.parentFeedbackId;

        var _self = this;

        $.ajax({
          type: "DELETE",
          url: '/rest/feedbacks/feedback/delete/' + feedbackId,
          success: function (data) {
            function filterFeedbackList(feedbackList, feedbackId) {
              return feedbackList.filter(function (feedback) {
                return feedback.id !== feedbackId;
              });
            }

            function filterReplyList(feedbackList, feedbackId, replyId) {
              return feedbackList.map(function (feedback) {
                if (feedbackId === feedback.id) {
                  feedback.replies = feedback.replies.filter(function (reply) {
                    return reply.id !== replyId;
                  });
                }

                return feedback;
              });
            } // If visible, adjust counts


            if (_self.feedbackToDelete.feedbackObject.isVisible && parentFeedbackId === null) {
              var feedback = _self.feedbackToDelete.feedbackObject;
              var ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue);

              if (ratingValue > 0 && ratingValue <= 5) {
                _self.counts['ratingsCountOf' + ratingValue]--;
                _self.counts.ratingsCountTotal--; // Calculate average anew

                var average = 0;
                average += _self.counts['ratingsCountOf5'] * 5;
                average += _self.counts['ratingsCountOf4'] * 4;
                average += _self.counts['ratingsCountOf3'] * 3;
                average += _self.counts['ratingsCountOf2'] * 2;
                average += _self.counts['ratingsCountOf1'] * 1;
                average /= _self.counts.ratingsCountTotal;
                _self.counts.averageValue = average;

                _self.$root.$emit('averageRecalc');
              }
            }

            if (parentFeedbackId === null) {
              _self.feedbacks = filterFeedbackList(_self.feedbacks, feedbackId);
              _self.authenticatedUser.feedbacks = filterFeedbackList(_self.authenticatedUser.feedbacks, feedbackId);
            } else {
              _self.feedbacks = filterReplyList(_self.feedbacks, parentFeedbackId, feedbackId);
              _self.authenticatedUser.feedbacks = filterReplyList(_self.authenticatedUser.feedbacks, parentFeedbackId, feedbackId);
            }

            _self.feedbackToDelete = null;
          }
        });
      }

      $(this.$refs.confirmDeleteModal).modal('hide');
    },

    onFeedbackAdded(feedback) {
      this.authenticatedUser.feedbacks.unshift(feedback);

      if (feedback.isVisible) {
        var ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue);

        if (ratingValue > 0 && ratingValue <= 5) {
          this.counts['ratingsCountOf' + ratingValue]++;
          this.counts.ratingsCountTotal++; // Calculate average anew

          var average = 0;
          average += this.counts['ratingsCountOf5'] * 5;
          average += this.counts['ratingsCountOf4'] * 4;
          average += this.counts['ratingsCountOf3'] * 3;
          average += this.counts['ratingsCountOf2'] * 2;
          average += this.counts['ratingsCountOf1'] * 1;
          average /= this.counts.ratingsCountTotal;
          this.counts.averageValue = average;
          this.$root.$emit('averageRecalc');
        }
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['variationId', 'authenticatedUser', 'options'],

  data() {
    return {
      feedback: {
        ratingValue: 0,
        authorName: "",
        title: "",
        message: "",
        type: 'review',
        targetId: this.variationId,
        honeypot: ""
      },
      isLoading: false,
      titleMissing: false,
      ratingMissing: false
    };
  },

  methods: {
    createFeedback() {
      if (this.isLoading) {
        return;
      }

      if (this.feedback.honeypot.length > 0) {
        return;
      }

      if (!this.options.allowNoRatingFeedback && this.feedback.ratingValue <= 0) {
        this.ratingMissing = true;
        return;
      }

      if (!this.feedback.title) {
        this.titleMissing = true;
        return;
      }

      this.isLoading = true;
      this.feedback.options = this.options;

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
        success: function (data) {
          _self.$emit('feedback-added', data);

          _self.isLoading = false;
          _self.feedback['authorName'] = '';
          _self.feedback['message'] = '';
          _self.feedback['title'] = '';
          _self.feedback['ratingValue'] = 0;
          _self.titleMissing = false;
          _self.ratingMissing = false;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          _self.isLoading = false;
        }
      });
    },

    createLoginModal() {
      this.$store.dispatch("loadComponent", "login-modal");
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackListEntry.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['feedbacks', 'isLastPage', 'authenticatedUser', 'itemAttributes', 'showControls', 'classes', 'styles', 'options'],
  components: {
    'feedback-list-entry': _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    onLoadMoreClicked() {
      this.$emit('load-more');
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['feedback', 'authenticatedUser', 'itemAttributes', 'isReply', 'showControls', 'classes', 'styles', 'options'],
  name: 'feedback-list-entry',
  components: {
    'feedback-comment': () => __webpack_require__.e(/*! import() */ "resources_js_src_app_components_item_singleitem_FeedbackComment_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./FeedbackComment.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue"))
  },

  data() {
    return {
      editableFeedback: null,
      isLoading: false
    };
  },

  methods: {
    showDeleteConfirmation() {
      let parentFeedbackId = null;

      if (this.isReply) {
        parentFeedbackId = parseInt(this.feedback.targetRelation.feedbackRelationTargetId);
      }

      this.$emit('delete', {
        feedbackId: this.feedback.id,
        isReply: this.isReply,
        parentFeedbackId: parentFeedbackId,
        feedbackObject: this.feedback
      });
    },

    editFeedback() {
      if (this.editableFeedback === null) {
        $(this.$refs.editButton).tooltip('dispose');
        this.editableFeedback = {
          title: "",
          message: this.feedback.feedbackComment.comment.message,
          ratingValue: -1,
          isReply: this.isReply
        };

        if (!this.isReply) {
          this.editableFeedback.title = this.feedback.title;
          this.editableFeedback.ratingValue = this.feedback.feedbackRating.rating.ratingValue;
        }
      }
    },

    saveEditableFeedback() {
      const _self = this;

      if (this.editableFeedback !== null) {
        const editableFeedback = this.editableFeedback;
        const requestBody = {
          message: editableFeedback.message
        };

        if (!editableFeedback.isReply) {
          requestBody.title = editableFeedback.title;
          requestBody.ratingValue = editableFeedback.ratingValue;
        }

        this.isLoading = true;
        $.ajax({
          type: "PUT",
          url: '/rest/feedbacks/feedback/update/' + this.feedback.id,
          data: requestBody,
          success: function (data) {
            _self.feedback.feedbackComment.comment.message = editableFeedback.message;
            _self.feedback.isVisible = data.isVisible;

            if (!editableFeedback.isReply) {
              _self.feedback.title = editableFeedback.title;
              _self.feedback.feedbackRating.rating.ratingValue = editableFeedback.ratingValue;
            }

            _self.isLoading = false;
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
            _self.isLoading = false;
          }
        });
      }

      this.editableFeedback = null;
    }

  }
});

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue ***!
  \*******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackContainer.vue?vue&type=template&id=877a4a3c& */ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&");
/* harmony import */ var _FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackContainer.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue ***!
  \**************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=template&id=1b526f73& */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&");
/* harmony import */ var _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue ***!
  \**************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackList.vue?vue&type=template&id=4f4b964d& */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&");
/* harmony import */ var _FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackList.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue ***!
  \*******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackListEntry.vue?vue&type=template&id=05e71156& */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&");
/* harmony import */ var _FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackListEntry.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackListEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& ***!
  \**************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackContainer.vue?vue&type=template&id=877a4a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& ***!
  \*********************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackForm.vue?vue&type=template&id=1b526f73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& ***!
  \*********************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackList.vue?vue&type=template&id=4f4b964d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& ***!
  \**************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackListEntry.vue?vue&type=template&id=05e71156& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "feedback-container" },
    [
      _c("div", { staticClass: "title" }, [
        _vm._v(
          "\n        " +
            _vm._s(_vm.$translate("Feedback::Feedback.customerReviews")) +
            "\n        "
        ),
        _c("small", { staticClass: "feedback-average-count" }, [
          _vm._v(" (" + _vm._s(_vm.counts.ratingsCountTotal) + ")")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "feedback-stars-average" }, [
        _c(
          "div",
          { staticClass: "feedback-stars-background clearfix" },
          _vm._l(5, function(index) {
            return _c("div", { staticClass: "feedback-star" }, [
              _c("i", { staticClass: "fa fa-star" })
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "feedback-stars-overlay-wrap",
            style: { width: (_vm.counts.averageValue * 100) / 5 + "%" }
          },
          [
            _c(
              "div",
              { staticClass: "feedback-stars-overlay clearfix" },
              _vm._l(5, function(index) {
                return _c("div", { staticClass: "feedback-star" }, [
                  _c("i", { staticClass: "fa fa-star" })
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row my-2", class: _vm.classes, style: _vm.styles },
        [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "feedback-bars" }, [
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf5 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(_vm._s(_vm.counts.ratingsCountOf5))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf4 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(_vm._s(_vm.counts.ratingsCountOf4))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf3 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(_vm._s(_vm.counts.ratingsCountOf3))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf2 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(_vm._s(_vm.counts.ratingsCountOf2))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-bar-wrap" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-bar" }, [
                  _c("div", {
                    staticClass: "feedback-bar-fill bg-primary bg-appearance",
                    style: {
                      width:
                        (_vm.counts.ratingsCountOf1 / _vm.counts.highestCount) *
                          100 +
                        "%"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "feedback-bar-text-after" }, [
                  _vm._v(_vm._s(_vm.counts.ratingsCountOf1))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-6" },
            [
              !_vm.isLoading
                ? _c("feedback-form", {
                    attrs: {
                      "variation-id": _vm.variationId,
                      "authenticated-user": _vm.authenticatedUser,
                      options: _vm.optionsForm
                    },
                    on: {
                      "feedback-added": function($event) {
                        return _vm.onFeedbackAdded($event)
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("feedback-list", {
        attrs: {
          feedbacks: _vm.authenticatedUser.feedbacks,
          "is-last-page": true,
          "authenticated-user": _vm.authenticatedUser,
          "item-attributes": _vm.itemAttributes,
          "show-controls": true,
          classes: _vm.classes,
          styles: _vm.styles,
          options: _vm.optionsList
        },
        on: {
          delete: function($event) {
            return _vm.showDeleteConfirmation($event)
          }
        }
      }),
      _vm._v(" "),
      _c("feedback-list", {
        attrs: {
          feedbacks: _vm.feedbacks,
          "is-last-page": _vm.isLastPage,
          "authenticated-user": _vm.authenticatedUser,
          "item-attributes": _vm.itemAttributes,
          "show-controls": false,
          classes: _vm.classes,
          styles: _vm.styles,
          options: _vm.optionsList
        },
        on: {
          "load-more": function($event) {
            return _vm.loadFeedbacks()
          },
          delete: function($event) {
            return _vm.showDeleteConfirmation($event)
          }
        }
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("p", { staticClass: "loading-hint" }, [
            _vm._v(
              _vm._s(_vm.$translate("Feedback::Feedback.loadingFeedbacks"))
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "confirmDeleteModal",
          staticClass: "modal fade",
          attrs: {
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "feedbackConfirmDeleteLabel-" + _vm._uid,
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "modal-title h5",
                      attrs: { id: "feedbackConfirmDeleteLabel-" + _vm._uid }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.deleteConfirm")
                        )
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  !!_vm.feedbackToDelete && _vm.feedbackToDelete.isReply
                    ? _c("p", { staticClass: "feedback-delete-confirmation" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.deleteReply")
                            ) +
                            "\n                    "
                        )
                      ])
                    : _c("p", { staticClass: "feedback-delete-confirmation" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.deleteReview")
                            ) +
                            "\n                    "
                        )
                      ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$translate("Feedback::Feedback.cancel"))
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-appearance",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteFeedback()
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$translate("Feedback::Feedback.yesDeleteIt"))
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.counts.ratingsCountTotal > 0
        ? _c("script2", { attrs: { type: "application/ld+json" } }, [
            _vm._v(
              '\n        {\n            "@context": "http://schema.org/",\n            "@type": "Product",\n            "@id": "' +
                _vm._s(_vm.variationId) +
                '",\n            "aggregateRating": {\n                "@type": "AggregateRating",\n                "ratingValue": "' +
                _vm._s(_vm.counts.averageValue) +
                '",\n                "reviewCount": "' +
                _vm._s(_vm.counts.ratingsCountTotal) +
                '"\n            }\n        }\n    '
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("5 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("4 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("3 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("2 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("1 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.authenticatedUser.isLoggedIn || _vm.options.allowGuestFeedbacks
      ? _c("div", { staticClass: "createFeedback" }, [
          _c(
            "div",
            { staticClass: "stars" },
            [
              _vm._l(5, function(i) {
                return _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback.ratingValue,
                      expression: "feedback.ratingValue"
                    }
                  ],
                  class: "star star-" + i,
                  attrs: {
                    id: "star-" + i + _vm._uid,
                    type: "radio",
                    name: "ratingValue" + _vm._uid
                  },
                  domProps: {
                    value: i,
                    checked: _vm._q(_vm.feedback.ratingValue, i)
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.feedback, "ratingValue", i)
                    }
                  }
                })
              }),
              _vm._v(" "),
              _vm._l(5, function(i) {
                return _c("label", {
                  class: "star star-" + i,
                  attrs: { for: "star-" + i + _vm._uid }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.ratingMissing && !_vm.options.allowNoRatingFeedback
            ? _c("p", { staticClass: "feedback-error alert alert-danger" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(
                      _vm.$translate("Feedback::Feedback.ratingRequired")
                    ) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.authenticatedUser.isLoggedIn && _vm.options.allowGuestFeedbacks
            ? _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback.authorName,
                      expression: "feedback.authorName"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "author",
                    name: "author",
                    placeholder: _vm.$translate(
                      "Feedback::Feedback.authorName"
                    ),
                    disabled:
                      _vm.authenticatedUser.limitReached ||
                      !_vm.authenticatedUser.hasPurchased
                  },
                  domProps: { value: _vm.feedback.authorName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.feedback, "authorName", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback.honeypot,
                      expression: "feedback.honeypot"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "feedback-textfield",
                    name: "feedback-textfield"
                  },
                  domProps: { value: _vm.feedback.honeypot },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.feedback, "honeypot", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.feedback.title,
                  expression: "feedback.title"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.titleMissing },
              attrs: {
                type: "text",
                id: "title",
                name: "title",
                placeholder: _vm.$translate("Feedback::Feedback.title"),
                disabled:
                  _vm.authenticatedUser.limitReached ||
                  !_vm.authenticatedUser.hasPurchased
              },
              domProps: { value: _vm.feedback.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.feedback, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.titleRequired")))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.feedback.message,
                  expression: "feedback.message"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "message",
                name: "message",
                rows: "3",
                placeholder: _vm.$translate("Feedback::Feedback.reviewMessage"),
                disabled:
                  _vm.authenticatedUser.limitReached ||
                  !_vm.authenticatedUser.hasPurchased
              },
              domProps: { value: _vm.feedback.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.feedback, "message", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm.authenticatedUser.limitReached
            ? _c(
                "div",
                {
                  directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                  staticClass: "feedback-tooltip-wrapper",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    "data-original-title": _vm.$translate(
                      "Feedback::Feedback.maximumNumberOfFeedbacksReached"
                    )
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-appearance",
                      attrs: { disabled: "" }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.submitReview")
                        )
                      )
                    ]
                  )
                ]
              )
            : !_vm.authenticatedUser.hasPurchased
            ? _c(
                "div",
                {
                  directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                  staticClass: "feedback-tooltip-wrapper",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    "data-original-title": _vm.$translate(
                      "Feedback::Feedback.errorDoesntOwnProduct"
                    )
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-appearance",
                      attrs: { disabled: "" }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.submitReview")
                        )
                      )
                    ]
                  )
                ]
              )
            : _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-appearance",
                  attrs: { disabled: _vm.isLoading },
                  on: {
                    click: function($event) {
                      return _vm.createFeedback()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.$translate("Feedback::Feedback.submitReview")
                      ) +
                      "\n        "
                  )
                ]
              )
        ])
      : _c("div", [
          _c("div", { staticClass: "alert alert-info" }, [
            _vm._v(
              "\n            " +
                _vm._s(
                  _vm.$translate("Feedback::Feedback.logInCustomerReviews")
                ) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-primary btn-appearance",
              attrs: { "data-toggle": "modal", href: "#login" },
              on: {
                click: function($event) {
                  return _vm.createLoginModal()
                }
              }
            },
            [
              _c("span", [
                _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.login")))
              ]),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-user",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "feedback-list" },
    [
      _vm._l(_vm.feedbacks, function(feedback) {
        return _c("feedback-list-entry", {
          key: feedback.id,
          attrs: {
            feedback: feedback,
            "authenticated-user": _vm.authenticatedUser,
            "item-attributes": _vm.itemAttributes,
            "is-reply": false,
            "show-controls": _vm.showControls,
            classes: _vm.classes,
            styles: _vm.styles,
            options: _vm.options
          },
          on: {
            delete: function($event) {
              return _vm.$emit("delete", $event)
            }
          }
        })
      }),
      _vm._v(" "),
      !_vm.isLastPage
        ? _c(
            "a",
            {
              staticClass: "btn btn-default btn-block feedback-loadmore",
              on: {
                click: function($event) {
                  return _vm.onLoadMoreClicked()
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$translate("Feedback::Feedback.loadMore")) +
                  "\n    "
              )
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "feedback clearfix", class: { loading: _vm.isLoading } },
    [
      !_vm.editableFeedback && _vm.showControls
        ? _c("div", { staticClass: "feedback-options" }, [
            !_vm.feedback.isVisible
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    staticClass: "btn-sm btn-danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.$translate(
                        "Feedback::Feedback.moderationMessage"
                      )
                    }
                  },
                  [_c("i", { staticClass: "fa fa-eye-slash" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.authenticatedUser.isLoggedIn
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    ref: "editButton",
                    staticClass: "btn btn-sm btn-danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.isReply
                        ? _vm.$translate("Feedback::Feedback.editReply")
                        : _vm.$translate("Feedback::Feedback.editReview")
                    },
                    on: {
                      click: function($event) {
                        return _vm.editFeedback()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-pencil" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.authenticatedUser.isLoggedIn
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    staticClass: "btn btn-sm btn-danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.isReply
                        ? _vm.$translate("Feedback::Feedback.deleteReply")
                        : _vm.$translate("Feedback::Feedback.deleteReview")
                    },
                    on: {
                      click: function($event) {
                        return _vm.showDeleteConfirmation()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-trash-o" })]
                )
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.editableFeedback
        ? _c("feedback-comment", {
            attrs: {
              feedback: _vm.feedback,
              "item-attributes": _vm.itemAttributes,
              "authenticated-user": _vm.authenticatedUser,
              "is-reply": _vm.isReply,
              "show-controls": _vm.showControls,
              classes: _vm.classes,
              styles: _vm.styles,
              options: _vm.options
            },
            on: {
              delete: function($event) {
                return _vm.$emit("delete", $event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      !!_vm.editableFeedback && _vm.isReply
        ? _c("div", [
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editableFeedback.message,
                    expression: "editableFeedback.message"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  rows: "3",
                  placeholder: _vm.$translate("Feedback::Feedback.replyMessage")
                },
                domProps: { value: _vm.editableFeedback.message },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.editableFeedback,
                      "message",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-appearance",
                on: {
                  click: function($event) {
                    return _vm.saveEditableFeedback()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$translate("Feedback::Feedback.editReply")))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary feedback-edit-cancel",
                on: {
                  click: function($event) {
                    _vm.editableFeedback = null
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$translate("Feedback::Feedback.cancel")))]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !!_vm.editableFeedback && !_vm.isReply
        ? _c("div", [
            _vm._v("\n        {% set uid = uid() %}\n        "),
            _c(
              "div",
              { staticClass: "stars" },
              [
                _vm._l(5, function(i) {
                  return [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editableFeedback.ratingValue,
                          expression: "editableFeedback.ratingValue"
                        }
                      ],
                      class: "star star-" + i,
                      attrs: {
                        id: "star-" + _vm._uid + "-" + i,
                        type: "radio",
                        name: "ratingValue"
                      },
                      domProps: {
                        value: i,
                        checked: _vm._q(_vm.editableFeedback.ratingValue, i)
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(
                            _vm.editableFeedback,
                            "ratingValue",
                            i
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", {
                      class: "star star-" + i,
                      attrs: { for: "star-" + _vm._uid + "-" + i }
                    })
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editableFeedback.title,
                    expression: "editableFeedback.title"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "title",
                  placeholder: _vm.$translate("Feedback::Feedback.title"),
                  required: ""
                },
                domProps: { value: _vm.editableFeedback.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.editableFeedback, "title", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editableFeedback.message,
                    expression: "editableFeedback.message"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "message",
                  rows: "3",
                  placeholder: _vm.$translate("Feedback::Feedback.title")
                },
                domProps: { value: _vm.editableFeedback.message },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.editableFeedback,
                      "message",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-appearance",
                on: {
                  click: function($event) {
                    return _vm.saveEditableFeedback()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$translate("Feedback::Feedback.editReview")))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary feedback-edit-cancel",
                on: {
                  click: function($event) {
                    _vm.editableFeedback = null
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$translate("Feedback::Feedback.cancel")))]
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=feedback-resources_js_src_app_components_item_singleitem_FeedbackContainer_vue.js.map