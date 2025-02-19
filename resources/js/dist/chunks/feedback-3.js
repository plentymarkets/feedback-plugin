(self["webpackChunkplentymarkets_feedback"] = self["webpackChunkplentymarkets_feedback"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FeedbackForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedbackForm.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue");
/* harmony import */ var _FeedbackList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedbackList.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/loadFeedbackModule */ "./resources/js/src/app/mixins/loadFeedbackModule.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FeedbackContainer',
  components: {
    'feedback-form': _FeedbackForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'feedback-list': _FeedbackList_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [_mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_7__["default"]],
  inject: {
    itemId: {
      default: null
    }
  },
  props: {
    options: Object,
    classes: String,
    styles: String
  },
  data: function data() {
    return {
      isLoading: true,
      feedbackToDelete: null,
      optionsList: {
        timestampVisibility: this.options.timestampVisibility,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      },
      language: this.options.language,
      optionsForm: {
        allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
        numberOfFeedbacks: this.options.numberOfFeedbacks,
        allowGuestFeedbacks: this.options.allowGuestFeedbacks
      }
    };
  },
  computed: _objectSpread({
    currentVariation: function currentVariation() {
      return this.$store.getters[this.itemId + '/currentItemVariation'];
    },
    variationId: function variationId() {
      return this.currentVariation && this.currentVariation.variation.id;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapState)({
    authenticatedUser: function authenticatedUser(state) {
      return state.feedback.authenticatedUser;
    },
    counts: function counts(state) {
      return state.feedback.counts;
    },
    feedbacks: function feedbacks(state) {
      return state.feedback.feedbacks;
    },
    pagination: function pagination(state) {
      return state.feedback.pagination;
    }
  })),
  mounted: function mounted() {
    if (!App.isShopBuilder) {
      var _self = this;
      $.when(this.getUser(), this.getCounts(), this.loadFeedbacks()).done(function () {
        _self.isLoading = false;
        _self.generateJsonLD();
        Vue.nextTick(function () {
          // DOM updated
          window.dispatchEvent(new Event('resize'));
        });
      });
    } else {
      this.isLoading = false;
    }
  },
  methods: {
    getUser: function getUser() {
      return this.$store.dispatch('loadFeedbackUser', {
        data: {
          allowFeedbacksOnlyIfPurchased: this.options.allowFeedbacksOnlyIfPurchased,
          numberOfFeedbacks: this.options.numberOfFeedbacks
        },
        itemId: this.itemId,
        variationId: this.variationId
      });
    },
    getCounts: function getCounts() {
      return this.$store.dispatch('loadFeedbackCounts', this.itemId);
    },
    loadFeedbacks: function loadFeedbacks() {
      return this.$store.dispatch('loadPaginatedFeedbacks', {
        itemId: this.itemId,
        feedbacksPerPage: this.options.feedbacksPerPage,
        language: this.options.language
      });
    },
    showDeleteConfirmation: function showDeleteConfirmation(feedbackToDelete) {
      this.feedbackToDelete = feedbackToDelete;
      $(this.$refs.confirmDeleteModal).modal('show');
    },
    deleteFeedback: function deleteFeedback() {
      if (this.feedbackToDelete !== null) {
        var feedbackId = this.feedbackToDelete.feedbackId;
        var parentFeedbackId = this.feedbackToDelete.parentFeedbackId;
        this.$store.dispatch('deleteFeedback', {
          feedbackId: feedbackId,
          parentFeedbackId: parentFeedbackId,
          feedback: this.feedbackToDelete.feedbackObject
        });
      }
      $(this.$refs.confirmDeleteModal).modal('hide');
    },
    generateJsonLD: function generateJsonLD() {
      if (this.counts.ratingsCountTotal > 0) {
        var jsonld = {
          '@context': 'http://schema.org/',
          '@type': 'Product',
          '@id': this.variationId.toString(),
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: this.counts.averageValue,
            reviewCount: this.counts.ratingsCountTotal
          },
          review: []
        };
        var anonymous = this.$translate('Feedback::Feedback.anonymous') || 'Anonymous';
        this.feedbacks.forEach(function (feedback) {
          var author;
          if ((feedback.sourceRelation[0].feedbackRelationType === 'user' || feedback.sourceRelation[0].feedbackRelationType === 'contact') && feedback.sourceRelation[0].feedbackRelationSourceId > 0) {
            author = feedback.sourceRelation[0].sourceRelationLabel;
          } else if (feedback.sourceRelation[0].feedbackRelationSourceId === '0' && feedback.authorName.trim().length > 0) {
            author = feedback.authorName;
          } else {
            author = anonymous;
          }
          var review = {
            '@type': 'Review',
            author: {
              name: author,
              '@type': 'Person'
            },
            datePublished: feedback.createdAt,
            reviewBody: feedback.feedbackComment.comment.message,
            name: feedback.title,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: feedback.feedbackRating.rating.ratingValue
            }
          };
          jsonld.review.push(review);
        });
        var script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(jsonld);
        document.head.appendChild(script);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FeedbackForm',
  props: {
    variationId: Number,
    options: Object
  },
  data: function data() {
    return {
      feedback: {
        ratingValue: 0,
        authorName: '',
        title: '',
        message: '',
        type: 'review',
        targetId: this.variationId,
        honeypot: ''
      },
      isLoading: false,
      titleMissing: false,
      ratingMissing: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    authenticatedUser: function authenticatedUser(state) {
      return state.feedback.authenticatedUser;
    }
  })),
  methods: {
    createFeedback: function createFeedback() {
      var _this = this;
      if (this.isLoading) {
        return;
      }
      if (this.feedback.honeypot.length > 0) {
        return;
      }
      if (this.feedback.ratingValue <= 0) {
        this.ratingMissing = true;
        return;
      }
      if (!this.feedback.title) {
        this.titleMissing = true;
        return;
      }
      this.isLoading = true;
      $.ajax({
        type: 'POST',
        url: '/rest/feedbacks/feedback/create',
        data: this.feedback,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: function success(data) {
          _this.$store.commit('addFeedback', data);
          _this.isLoading = false;
          _this.feedback.authorName = '';
          _this.feedback.message = '';
          _this.feedback.title = '';
          _this.feedback.ratingValue = 0;
          _this.titleMissing = false;
          _this.ratingMissing = false;
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          _this.isLoading = false;
        }
      });
    },
    createLoginModal: function createLoginModal() {
      this.$store.dispatch('loadComponent', 'login-modal');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FeedbackList',
  components: {
    'feedback-list-entry': _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    feedbacks: Array,
    isLastPage: Boolean,
    showControls: Boolean,
    classes: String,
    styles: String,
    options: Object
  },
  methods: {
    onLoadMoreClicked: function onLoadMoreClicked() {
      this.$emit('load-more');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FeedbackListEntry',
  components: {
    'feedback-comment': function feedbackComment() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! ./FeedbackComment.vue */ "./resources/js/src/app/components/item/singleitem/FeedbackComment.vue"));
    }
  },
  props: {
    feedback: Object,
    isReply: Boolean,
    showControls: Boolean,
    classes: String,
    styles: String,
    options: Object
  },
  data: function data() {
    return {
      editableFeedback: null,
      isLoading: false,
      feedbackData: {}
    };
  },
  created: function created() {
    this.feedbackData = this.feedback;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)({
    authenticatedUser: function authenticatedUser(state) {
      return state.feedback.authenticatedUser;
    }
  })),
  methods: {
    showDeleteConfirmation: function showDeleteConfirmation() {
      var parentFeedbackId = null;
      if (this.isReply) {
        parentFeedbackId = parseInt(this.feedbackData.targetRelation.feedbackRelationTargetId);
      }
      this.$emit('delete', {
        feedbackId: this.feedbackData.id,
        isReply: this.isReply,
        parentFeedbackId: parentFeedbackId,
        feedbackObject: this.feedbackData
      });
    },
    editFeedback: function editFeedback() {
      if (this.editableFeedback === null) {
        $(this.$refs.editButton).tooltip('dispose');
        this.editableFeedback = {
          title: '',
          message: this.feedbackData.feedbackComment.comment.message,
          ratingValue: -1,
          isReply: this.isReply
        };
        if (!this.isReply) {
          this.editableFeedback.title = this.feedbackData.title;
          this.editableFeedback.ratingValue = this.feedbackData.feedbackRating.rating.ratingValue;
        }
      }
    },
    saveEditableFeedback: function saveEditableFeedback() {
      var _self = this;
      if (this.editableFeedback !== null) {
        var editableFeedback = this.editableFeedback;
        var requestBody = {
          message: editableFeedback.message
        };
        if (!editableFeedback.isReply) {
          requestBody.title = editableFeedback.title;
          requestBody.ratingValue = editableFeedback.ratingValue;
        }
        this.isLoading = true;
        $.ajax({
          type: 'PUT',
          url: '/rest/feedbacks/feedback/update/' + this.feedback.id,
          data: requestBody,
          success: function success(data) {
            _self.feedbackData.feedbackComment.comment.message = editableFeedback.message;
            _self.feedbackData.isVisible = data.isVisible;
            if (!editableFeedback.isReply) {
              _self.feedbackData.title = editableFeedback.title;
              _self.feedbackData.feedbackRating.rating.ratingValue = editableFeedback.ratingValue;
            }
            _self.isLoading = false;
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            console.error(errorThrown);
            _self.isLoading = false;
          }
        });
      }
      this.editableFeedback = null;
    },
    isFeedbackEditable: function isFeedbackEditable(id) {
      // we are on the list from the microservice
      var ids = [];
      if (this.showControls === false) {
        this.authenticatedUser.feedbacks.forEach(function (feedbackItem) {
          if (feedbackItem.isVisible) {
            ids.push(feedbackItem.id);
          }
        });
      }
      return ids.includes(id);
    }
  }
});

/***/ }),

/***/ "./resources/js/src/app/mixins/loadFeedbackModule.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/app/mixins/loadFeedbackModule.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_FeedbackModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/FeedbackModule */ "./resources/js/src/app/store/FeedbackModule.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    if (!this.$store.hasModule('feedback') && !App.isSSR) {
      this.$store.registerModule('feedback', _store_FeedbackModule__WEBPACK_IMPORTED_MODULE_0__["default"], {
        preserveState: !!this.$store.state.feedback
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/app/store/FeedbackModule.js":
/*!******************************************************!*\
  !*** ./resources/js/src/app/store/FeedbackModule.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);



var loadPaginatedFeedbacksLock = false;
var loadFeedbackUserLock = false;
var state = function state() {
  return {
    authenticatedUser: {},
    counts: {},
    feedbacks: [],
    itemAttributes: [],
    pagination: {
      isLastPage: true,
      lastPage: 1,
      currentPage: 1
    }
  };
};
var mutations = {
  setFeedbackAuthenticatedUser: function setFeedbackAuthenticatedUser(state, authenticatedUser) {
    state.authenticatedUser = authenticatedUser;
  },
  setFeedbackCounts: function setFeedbackCounts(state, counts) {
    state.counts = counts;
  },
  setFeedbacks: function setFeedbacks(state, feedbacks) {
    state.feedbacks = state.feedbacks.concat(feedbacks);
  },
  setFeedbackItemAttributes: function setFeedbackItemAttributes(state, attributes) {
    state.itemAttributes = attributes;
  },
  setFeedbackPagination: function setFeedbackPagination(state, pagination) {
    state.pagination.lastPage = pagination.lastPage;
    state.pagination.isLastPage = pagination.isLastPage;
  },
  incrementCurrentFeedbackPage: function incrementCurrentFeedbackPage(state) {
    state.pagination.currentPage++;
  },
  addFeedback: function addFeedback(state, feedback) {
    // Add the feedback to the current users feedback list
    state.authenticatedUser.feedbacks.unshift(feedback);
    if (feedback.isVisible) {
      var ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue);
      if (ratingValue > 0 && ratingValue <= 5) {
        state.counts['ratingsCountOf' + ratingValue]++;
        state.counts.ratingsCountTotal++;
        recalculateAverage(state);
      }
    }
  },
  deleteFeedback: function deleteFeedback(state, _ref) {
    var feedbackId = _ref.feedbackId,
      parentFeedbackId = _ref.parentFeedbackId,
      feedback = _ref.feedback;
    // If visible, adjust counts
    if (feedback.isVisible && parentFeedbackId === null) {
      var ratingValue = parseInt(feedback.feedbackRating.rating.ratingValue);
      if (ratingValue > 0 && ratingValue <= 5) {
        state.counts['ratingsCountOf' + ratingValue]--;
        state.counts.ratingsCountTotal--;
        recalculateAverage(state);
      }
    }
    if (parentFeedbackId === null) {
      state.feedbacks = filterFeedbackList(state.feedbacks, feedbackId);
      state.authenticatedUser.feedbacks = filterFeedbackList(state.authenticatedUser.feedbacks, feedbackId);
    } else {
      state.feedbacks = filterReplyList(state.feedbacks, parentFeedbackId, feedbackId);
      state.authenticatedUser.feedbacks = filterReplyList(state.authenticatedUser.feedbacks, parentFeedbackId, feedbackId);
    }
  }
};
var actions = {
  loadFeedbackUser: function loadFeedbackUser(_ref2, _ref3) {
    var commit = _ref2.commit;
    var itemId = _ref3.itemId,
      variationId = _ref3.variationId;
    if (!loadFeedbackUserLock) {
      loadFeedbackUserLock = true;
      var itemString = '';
      if (itemId !== undefined && variationId !== undefined) {
        itemString = "/".concat(itemId, "/").concat(variationId);
      }
      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/user' + itemString,
        success: function success(data) {
          commit('setFeedbackAuthenticatedUser', data);
          loadFeedbackUserLock = false;
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          loadFeedbackUserLock = false;
          console.error(errorThrown);
        }
      });
    }
  },
  loadFeedbackCounts: function loadFeedbackCounts(_ref4, itemId) {
    var commit = _ref4.commit,
      state = _ref4.state;
    if (!countsLoaded) {
      countsLoaded = true;
      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/feedback/helper/counts/' + itemId,
        success: function success(data) {
          commit('setFeedbackCounts', data.counts);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
        }
      });
    }
  },
  loadPaginatedFeedbacks: function loadPaginatedFeedbacks(_ref5, _ref6) {
    var commit = _ref5.commit,
      state = _ref5.state;
    var itemId = _ref6.itemId,
      feedbacksPerPage = _ref6.feedbacksPerPage,
      language = _ref6.language;
    if (!loadPaginatedFeedbacksLock) {
      loadPaginatedFeedbacksLock = true;
      var request = $.ajax({
        type: 'GET',
        url: '/rest/storefront/feedbacks/feedback/helper/feedbacklist/' + itemId + '/' + state.pagination.currentPage,
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader('lang', language);
        },
        data: {
          feedbacksPerPage: feedbacksPerPage
        },
        success: function success(data) {
          commit('setFeedbacks', data.feedbacks);
          commit('setFeedbackItemAttributes', data.itemAttributes);
          commit('setFeedbackPagination', data.pagination);
          loadPaginatedFeedbacksLock = false;
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          loadPaginatedFeedbacksLock = false;
        }
      });
      commit('incrementCurrentFeedbackPage');
      return request;
    }
  },
  deleteFeedback: function deleteFeedback(_ref7, _ref8) {
    var commit = _ref7.commit,
      state = _ref7.state;
    var feedbackId = _ref8.feedbackId,
      parentFeedbackId = _ref8.parentFeedbackId,
      feedback = _ref8.feedback;
    return $.ajax({
      type: 'DELETE',
      url: '/rest/feedbacks/feedback/delete/' + feedbackId,
      success: function success(data) {
        commit('deleteFeedback', {
          feedbackId: feedbackId,
          parentFeedbackId: parentFeedbackId,
          feedback: feedback
        });
      }
    });
  }
};
var getters = {};
var countsLoaded = false;
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});

// Utility functions
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
}
function recalculateAverage(state) {
  // Calculate average anew
  var average = 0;
  average += state.counts.ratingsCountOf5 * 5;
  average += state.counts.ratingsCountOf4 * 4;
  average += state.counts.ratingsCountOf3 * 3;
  average += state.counts.ratingsCountOf2 * 2;
  average += state.counts.ratingsCountOf1 * 1;
  average /= state.counts.ratingsCountTotal;
  state.counts.averageValue = average;
}

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackContainer.vue?vue&type=template&id=877a4a3c& */ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&");
/* harmony import */ var _FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackContainer.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=template&id=1b526f73& */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&");
/* harmony import */ var _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackList.vue?vue&type=template&id=4f4b964d& */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&");
/* harmony import */ var _FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackList.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackListEntry.vue?vue&type=template&id=05e71156& */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&");
/* harmony import */ var _FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackListEntry.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackListEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackContainer_vue_vue_type_template_id_877a4a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackContainer.vue?vue&type=template&id=877a4a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_1b526f73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackForm.vue?vue&type=template&id=1b526f73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackForm.vue?vue&type=template&id=1b526f73&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackList_vue_vue_type_template_id_4f4b964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackList.vue?vue&type=template&id=4f4b964d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackList.vue?vue&type=template&id=4f4b964d&");


/***/ }),

/***/ "./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackListEntry_vue_vue_type_template_id_05e71156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackListEntry.vue?vue&type=template&id=05e71156& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackListEntry.vue?vue&type=template&id=05e71156&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitem/FeedbackContainer.vue?vue&type=template&id=877a4a3c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
          "\n    " +
            _vm._s(_vm.$translate("Feedback::Feedback.customerReviews")) +
            "\n    "
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
            return _c(
              "div",
              {
                key: "feedback_stars_background" + index,
                staticClass: "feedback-star"
              },
              [_c("i", { staticClass: "fa fa-star" })]
            )
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
                return _c(
                  "div",
                  {
                    key: "feedback_stars_overlay_" + index,
                    staticClass: "feedback-star"
                  },
                  [_c("i", { staticClass: "fa fa-star" })]
                )
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
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf5) +
                      "\n          "
                  )
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
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf4) +
                      "\n          "
                  )
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
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf3) +
                      "\n          "
                  )
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
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf2) +
                      "\n          "
                  )
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
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.counts.ratingsCountOf1) +
                      "\n          "
                  )
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
                      options: _vm.optionsForm
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
          "is-last-page": _vm.pagination.isLastPage,
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
              "\n    " +
                _vm._s(_vm.$translate("Feedback::Feedback.loadingFeedbacks")) +
                "\n  "
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
                  ),
                  _vm._v(" "),
                  _vm._m(5)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  !!_vm.feedbackToDelete && _vm.feedbackToDelete.isReply
                    ? _c("p", { staticClass: "feedback-delete-confirmation" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.deleteReply")
                            ) +
                            "\n          "
                        )
                      ])
                    : _c("p", { staticClass: "feedback-delete-confirmation" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.deleteReview")
                            ) +
                            "\n          "
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
                        "\n            " +
                          _vm._s(_vm.$translate("Feedback::Feedback.cancel")) +
                          "\n          "
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
                        "\n            " +
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.yesDeleteIt")
                          ) +
                          "\n          "
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
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
      _vm._v("\n            5 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            4 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            3 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            2 "),
      _c("i", { staticClass: "fa fa-star" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "feedback-bar-text-before" }, [
      _vm._v("\n            1 "),
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
              _vm._l([5, 4, 3, 2, 1], function(i) {
                return [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.ratingValue,
                        expression: "feedback.ratingValue"
                      }
                    ],
                    key: "star_input_" + i,
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
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      key: "star_label_" + i,
                      class: "star star-" + i,
                      attrs: { for: "star-" + i + _vm._uid }
                    },
                    [
                      _c("span", { staticClass: "d-none" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$translate(
                              "Feedback::Feedback.feedbackAverageLabel"
                            )
                          )
                        )
                      ])
                    ]
                  )
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.ratingMissing
            ? _c("p", { staticClass: "feedback-error alert alert-danger" }, [
                _vm._v(
                  "\n      " +
                    _vm._s(
                      _vm.$translate("Feedback::Feedback.ratingRequired")
                    ) +
                    "\n    "
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
                    id: "author",
                    type: "text",
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
                _c(
                  "label",
                  {
                    staticClass: "position-absolute",
                    attrs: { for: "author" }
                  },
                  [
                    _c("span", { staticClass: "d-none" }, [
                      _vm._v(
                        _vm._s(_vm.$translate("Feedback::Feedback.authorName"))
                      )
                    ])
                  ]
                ),
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
                    id: "feedback-textfield",
                    type: "text",
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
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "position-absolute",
                    attrs: { for: "feedback-textfield" }
                  },
                  [
                    _c("span", { staticClass: "d-none" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.feedbackTextLabel")
                        )
                      )
                    ])
                  ]
                )
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
                id: "title",
                type: "text",
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
            _c(
              "label",
              { staticClass: "position-absolute", attrs: { for: "title" } },
              [
                _c("span", { staticClass: "d-none" }, [
                  _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.title")))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$translate("Feedback::Feedback.titleRequired")) +
                  "\n      "
              )
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
            }),
            _vm._v(" "),
            _c(
              "label",
              { staticClass: "position-absolute", attrs: { for: "message" } },
              [
                _c("span", { staticClass: "d-none" }, [
                  _vm._v(
                    _vm._s(_vm.$translate("Feedback::Feedback.reviewMessage"))
                  )
                ])
              ]
            )
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
                        "\n        " +
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.submitReview")
                          ) +
                          "\n      "
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
                        "\n        " +
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.submitReview")
                          ) +
                          "\n      "
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
                    "\n      " +
                      _vm._s(
                        _vm.$translate("Feedback::Feedback.submitReview")
                      ) +
                      "\n    "
                  )
                ]
              )
        ])
      : _c("div", [
          _c("div", { staticClass: "alert alert-info" }, [
            _vm._v(
              "\n      " +
                _vm._s(
                  _vm.$translate("Feedback::Feedback.logInCustomerReviews")
                ) +
                "\n    "
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
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
                "\n    " +
                  _vm._s(_vm.$translate("Feedback::Feedback.loadMore")) +
                  "\n  "
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return (_vm.showControls && !_vm.feedbackData.isVisible) || !_vm.showControls
    ? _c(
        "div",
        { staticClass: "feedback clearfix", class: { loading: _vm.isLoading } },
        [
          (!_vm.editableFeedback && _vm.showControls) ||
          _vm.isFeedbackEditable(_vm.feedbackData.id)
            ? _c("div", { staticClass: "feedback-options" }, [
                !_vm.feedbackData.isVisible
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
                  feedback: _vm.feedbackData,
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
                      placeholder: _vm.$translate(
                        "Feedback::Feedback.replyMessage"
                      )
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
                  [
                    _vm._v(
                      "\n      " +
                        _vm._s(_vm.$translate("Feedback::Feedback.editReply")) +
                        "\n    "
                    )
                  ]
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
                  [
                    _vm._v(
                      "\n      " +
                        _vm._s(_vm.$translate("Feedback::Feedback.cancel")) +
                        "\n    "
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !!_vm.editableFeedback && !_vm.isReply
            ? _c("div", [
                _c(
                  "div",
                  { staticClass: "stars" },
                  [
                    _vm._l([5, 4, 3, 2, 1], function(i) {
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
                          key: "stars_input_" + i,
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
                          key: "stars_label_" + i,
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
                        _vm.$set(
                          _vm.editableFeedback,
                          "title",
                          $event.target.value
                        )
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
                  [
                    _vm._v(
                      "\n      " +
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.editReview")
                        ) +
                        "\n    "
                    )
                  ]
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
                  [
                    _vm._v(
                      "\n      " +
                        _vm._s(_vm.$translate("Feedback::Feedback.cancel")) +
                        "\n    "
                    )
                  ]
                )
              ])
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=feedback-3.js.map