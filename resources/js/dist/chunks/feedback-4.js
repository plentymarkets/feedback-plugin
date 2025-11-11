"use strict";
(self["webpackChunkplentymarkets_feedback"] = self["webpackChunkplentymarkets_feedback"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FeedbackOrderForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedbackOrderForm.vue */ "./resources/js/src/app/components/order/FeedbackOrderForm.vue");
/* harmony import */ var _FeedbackOrderItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedbackOrderItem.vue */ "./resources/js/src/app/components/order/FeedbackOrderItem.vue");
/* harmony import */ var _mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/loadFeedbackModule */ "./resources/js/src/app/mixins/loadFeedbackModule.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FeedbackOrder',
  components: {
    'feedback-order-form': _FeedbackOrderForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'feedback-order-item': _FeedbackOrderItem_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [_mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    variations: Object,
    items: Array,
    itemUrls: Object,
    itemImages: Object,
    options: Object,
    splitItemBundles: Number,
    accessKey: String,
    orderId: String
  },
  data: function data() {
    return {
      isLoading: true,
      page: 1
    };
  },
  computed: {
    orderItems: function orderItems() {
      var aggregate = [];
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].itemVariationId > 0 && this.items[i].orderItemName.indexOf('[-]') === -1) {
          var key = this.items[i].itemVariationId;
          var bundleType = this.variations[key].variation.bundleType;
          var itemName = this.items[i].orderItemName;
          aggregate.push({
            name: this.filterItemName(itemName, bundleType),
            image: this.itemImages[key],
            url: this.itemUrls[key],
            variationId: key,
            itemId: this.variations[key].item.id,
            attributes: this.variations[key].attributes
          });

          // Check itemBundleSplit
          if (bundleType === 'bundle' && this.splitItemBundles < 1) {
            for (var j = 0; j < this.items[i].bundleComponents.length; j++) {
              var variationId = this.items[i].bundleComponents[j].data.variation.id;
              aggregate.push({
                name: this.$options.filters.itemName(this.items[i].bundleComponents[j].data),
                image: this.itemImages[variationId],
                url: this.itemUrls[variationId],
                variationId: variationId,
                itemId: this.items[i].bundleComponents[j].data.itemId,
                attributes: this.items[i].bundleComponents[j].data.attributes
              });
            }
          }
        }
      }
      return aggregate;
    },
    pagination: function pagination() {
      var amount = this.page * this.options.itemsPerRow * this.options.rowsPerPage;
      return this.orderItems.slice(0, amount);
    },
    trueItemsPerRow: function trueItemsPerRow() {
      return Math.min(this.orderItems.length, this.options.itemsPerRow);
    }
  },
  mounted: function mounted() {
    var _this = this;
    $.when(this.getUser()).done(function () {
      _this.isLoading = false;
      Vue.nextTick(function () {
        // DOM updated
        window.dispatchEvent(new Event('resize'));
      });
    });
  },
  methods: {
    getUser: function getUser() {
      // Get array of item and variationIds
      var itemIds = [];
      var variationIds = [];
      for (var i = 0; i < this.orderItems.length; i++) {
        var orderItem = this.orderItems[i];
        itemIds.push(orderItem.itemId);
        variationIds.push(orderItem.variationId);
      }
      var data = {
        itemIds: itemIds,
        variationIds: variationIds,
        allowFeedbacksOnlyIfPurchased: false,
        numberOfFeedbacks: this.options.numberOfFeedbacks
      };
      if (this.orderId && this.accessKey) {
        data.orderId = this.orderId;
        data.accessKey = this.accessKey;
      }
      return this.$store.dispatch('loadFeedbackUser', {
        data: data,
        itemId: this.itemId,
        variationId: this.variationId
      });
    },
    nextPage: function nextPage() {
      var amount = this.page * this.options.itemsPerRow * this.options.rowsPerPage;
      if (amount < this.orderItems.length) {
        this.page += 1;
      }
    },
    filterItemName: function filterItemName(itemName, bundleType) {
      if (bundleType === 'bundle') {
        return itemName.replace('[BUNDLE]', '');
      }
      if (bundleType === 'bundle_item') {
        return itemName.replace('[-]', '');
      }
      return itemName;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
//
//
//
//
//
//
//
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
  name: 'FeedbackOrderForm',
  props: {
    allowGuestFeedbacks: Boolean,
    numberOfFeedbacks: Number,
    accessKey: String,
    orderId: String,
    showEmptyRatings: Boolean
  },
  data: function data() {
    return {
      feedback: {
        ratingValue: 0,
        authorName: '',
        title: '',
        message: '',
        type: 'review',
        targetId: 0,
        honeypot: ''
      },
      isLoading: false,
      isRated: false,
      titleMissing: false,
      item: {
        url: '',
        image: '',
        variationId: 0,
        name: '',
        itemId: 0,
        attributes: {}
      }
    };
  },
  computed: _objectSpread({
    starIds: function starIds() {
      var ids = [];
      var starClass = this.isRated ? 'star-rated' : 'star';
      for (var i = 5; i > 0; i--) {
        ids.push({
          value: i,
          id: 'star-' + i + '-' + this.item.variationId + '-form',
          class: starClass
        });
      }
      return ids;
    },
    rows: function rows() {
      // Dynamically set rows to offset the optional authorName input
      return this.authenticatedUser.id > 0 ? 8 : 6;
    },
    limitReached: function limitReached() {
      var key = this.item.itemId;
      return this.authenticatedUser.limitReached[key];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    authenticatedUser: function authenticatedUser(state) {
      return state.feedback.authenticatedUser;
    }
  })),
  mounted: function mounted() {
    var _self = this;
    vueEventHub.$on('orderItemFeedback_showform', function (event) {
      _self.prepare(event);
    });
  },
  methods: {
    prepare: function prepare(event) {
      this.item = event.item;
      this.isRated = event.isRated;
      var _self = this;
      Vue.nextTick(function () {
        _self.feedback = event.feedback;
        $(_self.$refs.orderItemFeedbackModal).modal('show');
      });
    },
    createFeedback: function createFeedback() {
      if (this.isLoading || this.feedback.honeypot.length > 0) {
        return;
      }
      if (!this.feedback.title) {
        this.titleMissing = true;
        return;
      }
      if (this.limitReached) {
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
        success: function success(data) {
          vueEventHub.$emit('orderItemFeedback_created', {
            feedback: JSON.parse(JSON.stringify(_self.feedback))
          });
          _self.isLoading = false;
          _self.feedback.authorName = '';
          _self.feedback.message = '';
          _self.feedback.title = '';
          _self.feedback.ratingValue = 0;
          _self.titleMissing = false;
          _self.ratingMissing = false;
          $(_self.$refs.orderItemFeedbackModal).modal('hide');
          window.CeresNotification.success(this.$translate('Feedback::Feedback.notificationSuccess')).closeAfter(3000);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          _self.isLoading = false;
          window.CeresNotification.error(this.$translate('Feedback::Feedback.notificationFailure')).closeAfter(3000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FeedbackOrderItem',
  props: {
    item: Object,
    numberOfColumns: Number
  },
  data: function data() {
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
    };
  },
  computed: {
    starIds: function starIds() {
      var ids = [];
      var starClass = this.isRated ? 'star-rated' : 'star';
      for (var i = 5; i > 0; i--) {
        ids.push({
          value: i,
          id: 'star-' + i + '-' + this.item.variationId,
          class: starClass
        });
      }
      return ids;
    },
    variationAttributes: function variationAttributes() {
      return null;
    }
  },
  mounted: function mounted() {
    var _this = this;
    vueEventHub.$on('orderItemFeedback_created', function (event) {
      if (event.feedback.targetId === _this.item.variationId) {
        _this.feedback = event.feedback;
        _this.isRated = true;
      }
    });
  },
  methods: {
    handleRating: function handleRating(value) {
      if (!this.isRated && value > 0) {
        this.feedback.ratingValue = value;
      }
      vueEventHub.$emit('orderItemFeedback_showform', {
        item: this.item,
        feedback: this.feedback,
        isRated: this.isRated
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/app/mixins/loadFeedbackModule.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/app/mixins/loadFeedbackModule.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    invisibleFeedbacks: [],
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
    state.invisibleFeedbacks = state.authenticatedUser.feedbacks.filter(function (item) {
      return !item.isVisible;
    });
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
    state.invisibleFeedbacks.unshift(feedback);
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
      state.invisibleFeedbacks = filterFeedbackList(state.invisibleFeedbacks, feedbackId);
    } else {
      state.feedbacks = filterReplyList(state.feedbacks, parentFeedbackId, feedbackId);
      state.authenticatedUser.feedbacks = filterReplyList(state.authenticatedUser.feedbacks, parentFeedbackId, feedbackId);
      state.invisibleFeedbacks = filterReplyList(state.invisibleFeedbacks, parentFeedbackId, feedbackId);
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
  loadPaginatedFeedbacks: function loadPaginatedFeedbacks(_ref4, _ref5) {
    var commit = _ref4.commit,
      state = _ref4.state;
    var itemId = _ref5.itemId,
      feedbacksPerPage = _ref5.feedbacksPerPage,
      language = _ref5.language;
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
          commit('setFeedbackCounts', data.counts);
          loadPaginatedFeedbacksLock = false;
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          loadPaginatedFeedbacksLock = false;
        }
      });
      if (language) {
        commit('incrementCurrentFeedbackPage');
      }
      return request;
    }
  },
  deleteFeedback: function deleteFeedback(_ref6, _ref7) {
    var commit = _ref6.commit,
      state = _ref6.state;
    var feedbackId = _ref7.feedbackId,
      parentFeedbackId = _ref7.parentFeedbackId,
      feedback = _ref7.feedback;
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

/***/ "./resources/js/src/app/components/order/FeedbackOrder.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrder.vue ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackOrder_vue_vue_type_template_id_406beae6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackOrder.vue?vue&type=template&id=406beae6& */ "./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=template&id=406beae6&");
/* harmony import */ var _FeedbackOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackOrder.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackOrder_vue_vue_type_template_id_406beae6___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackOrder_vue_vue_type_template_id_406beae6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/order/FeedbackOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrderForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrderForm.vue ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackOrderForm_vue_vue_type_template_id_474982ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackOrderForm.vue?vue&type=template&id=474982ca& */ "./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=template&id=474982ca&");
/* harmony import */ var _FeedbackOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackOrderForm.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackOrderForm_vue_vue_type_template_id_474982ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackOrderForm_vue_vue_type_template_id_474982ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/order/FeedbackOrderForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrderItem.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrderItem.vue ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackOrderItem_vue_vue_type_template_id_713d3199___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackOrderItem.vue?vue&type=template&id=713d3199& */ "./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=template&id=713d3199&");
/* harmony import */ var _FeedbackOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackOrderItem.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackOrderItem_vue_vue_type_template_id_713d3199___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackOrderItem_vue_vue_type_template_id_713d3199___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/order/FeedbackOrderItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackOrderForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackOrderItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=template&id=406beae6&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=template&id=406beae6& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrder_vue_vue_type_template_id_406beae6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrder_vue_vue_type_template_id_406beae6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrder_vue_vue_type_template_id_406beae6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackOrder.vue?vue&type=template&id=406beae6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=template&id=406beae6&");


/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=template&id=474982ca&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=template&id=474982ca& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderForm_vue_vue_type_template_id_474982ca___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderForm_vue_vue_type_template_id_474982ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderForm_vue_vue_type_template_id_474982ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackOrderForm.vue?vue&type=template&id=474982ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=template&id=474982ca&");


/***/ }),

/***/ "./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=template&id=713d3199&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=template&id=713d3199& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderItem_vue_vue_type_template_id_713d3199___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderItem_vue_vue_type_template_id_713d3199___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackOrderItem_vue_vue_type_template_id_713d3199___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackOrderItem.vue?vue&type=template&id=713d3199& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=template&id=713d3199&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=template&id=406beae6&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrder.vue?vue&type=template&id=406beae6& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    { staticClass: "feedback-container feedback-orderitem-container" },
    [
      _c("div", { staticClass: "title" }, [
        _vm._v(
          "\n    " +
            _vm._s(_vm.$translate("Feedback::Feedback.orderItemTitle")) +
            "\n  "
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "div",
            { staticClass: "feedback-items row" },
            _vm._l(_vm.pagination, function(order) {
              return _c("feedback-order-item", {
                key: order.variationId,
                attrs: { item: order, "number-of-columns": _vm.trueItemsPerRow }
              })
            }),
            1
          )
        : _c("div", { staticClass: "w-100 text-center" }, [
            _c("p", [
              _vm._v(_vm._s(_vm.$translate("Feedback::Feedback.loadingItems")))
            ])
          ]),
      _vm._v(" "),
      !_vm.isLoading &&
      _vm.page * _vm.options.itemsPerRow * _vm.options.rowsPerPage <
        _vm.orderItems.length
        ? _c(
            "button",
            {
              staticClass: "btn btn-default btn-block feedback-loadmore",
              on: {
                click: function($event) {
                  return _vm.nextPage()
                }
              }
            },
            [_vm._v("\n    Weitere Artikel anzeigen\n  ")]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("feedback-order-form", {
            attrs: {
              "allow-guest-feedbacks": _vm.options.allowGuestFeedbacks,
              "number-of-feedbacks": _vm.options.numberOfFeedbacks,
              "access-key": _vm.accessKey,
              "order-id": _vm.orderId,
              "show-empty-ratings":
                _vm.options.showEmptyRatingsInOrderConfirmation === "true"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=template&id=474982ca&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderForm.vue?vue&type=template&id=474982ca& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    {
      ref: "orderItemFeedbackModal",
      staticClass: "modal fade feedback-orderitem-modal",
      attrs: {
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "feedbackOrderItem-" + _vm._uid,
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "span",
              {
                staticClass: "modal-title h3",
                attrs: { id: "feedbackConfirmDeleteLabel-" + _vm._uid }
              },
              [
                _vm._v(
                  _vm._s(_vm.$translate("Feedback::Feedback.customerReviews"))
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body row" }, [
            _c("div", { staticClass: "col-4" }, [
              _c("a", { attrs: { href: _vm.item.url } }, [
                _c("img", {
                  attrs: { src: _vm.item.image, alt: "image " + _vm.item.name }
                })
              ]),
              _vm._v(" "),
              _c("fieldset", [
                _c(
                  "div",
                  { staticClass: "stars" },
                  [
                    _c("legend", [
                      _c("span", { staticClass: "d-none" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$translate("Feedback::Feedback.customerReviews")
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.starIds, function(starId) {
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
                          key: "stars_input_" + starId.id,
                          class: starId.class,
                          attrs: {
                            id: starId.id,
                            type: "radio",
                            disabled: _vm.isRated,
                            name: "ratingValue"
                          },
                          domProps: {
                            value: starId.value,
                            checked: _vm._q(
                              _vm.feedback.ratingValue,
                              starId.value
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.feedback,
                                "ratingValue",
                                starId.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            key: "stars_label_" + starId.id,
                            staticClass: "new_star",
                            attrs: { for: starId.id }
                          },
                          [
                            _c("span", { staticClass: "d-none" }, [
                              _vm._v(_vm._s(starId.id))
                            ]),
                            _vm._v(" "),
                            _c(
                              "svg",
                              {
                                class: starId.class,
                                staticStyle: {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  "stroke-linejoin": "round",
                                  "stroke-miterlimit": "2"
                                },
                                attrs: {
                                  for: starId.id,
                                  width: "100%",
                                  height: "100%",
                                  viewBox: "0 0 31 30",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  "xml:space": "preserve",
                                  "xmlns:serif": "http://www.serif.com/"
                                }
                              },
                              [
                                _c("path", {
                                  staticStyle: { "fill-rule": "nonzero" },
                                  attrs: {
                                    d:
                                      "M30.5,11.564c0,0.265 -0.156,0.553 -0.469,0.866l-6.544,6.382l1.55,9.014c0.012,0.085 0.018,0.205 0.018,0.361c0,0.252 -0.063,0.466 -0.189,0.64c-0.126,0.174 -0.31,0.261 -0.55,0.261c-0.228,0 -0.469,-0.072 -0.721,-0.216l-8.095,-4.255l-8.095,4.255c-0.264,0.144 -0.505,0.216 -0.721,0.216c-0.253,0 -0.442,-0.087 -0.568,-0.261c-0.126,-0.174 -0.189,-0.388 -0.189,-0.64c0,-0.072 0.012,-0.192 0.036,-0.361l1.55,-9.014l-6.562,-6.382c-0.301,-0.325 -0.451,-0.613 -0.451,-0.866c0,-0.444 0.337,-0.721 1.01,-0.829l9.05,-1.316l4.057,-8.203c0.228,-0.493 0.522,-0.739 0.883,-0.739c0.361,0 0.655,0.246 0.883,0.739l4.057,8.203l9.05,1.316c0.673,0.108 1.01,0.385 1.01,0.829Z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-8" }, [
              _c(
                "a",
                {
                  staticClass: "mb-3",
                  attrs: {
                    id: "feedbackOrderItem-" + _vm._uid,
                    href: _vm.item.url
                  }
                },
                [
                  _vm._v(_vm._s(_vm.item.name) + "\n            "),
                  _vm._l(_vm.item.attributes, function(attribute) {
                    return [
                      _vm._v(
                        " | " +
                          _vm._s(attribute.attribute.names.name) +
                          ": " +
                          _vm._s(attribute.value.names.name)
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              !_vm.authenticatedUser.isLoggedIn
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
                        disabled: _vm.isRated || _vm.limitReached,
                        placeholder: _vm.$translate(
                          "Feedback::Feedback.authorName"
                        )
                      },
                      domProps: { value: _vm.feedback.authorName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.feedback,
                            "authorName",
                            $event.target.value
                          )
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
                        id: "feedback-textfield",
                        type: "text",
                        disabled: _vm.isRated || _vm.limitReached,
                        name: "feedback-textfield",
                        "aria-hidden": "true",
                        tabindex: "-1"
                      },
                      domProps: { value: _vm.feedback.honeypot },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.feedback,
                            "honeypot",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _c(
                      "label",
                      {
                        staticClass: "position-absolute",
                        attrs: { for: "feedback-textfield" }
                      },
                      [
                        _c("span", { staticClass: "visually-hidden" }, [
                          _vm._v(
                            _vm._s(
                              _vm.$translate("Feedback::Feedback.honeypotLabel")
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
                    "aria-label": _vm.$translate("Feedback::Feedback.title"),
                    type: "text",
                    name: "title",
                    disabled: _vm.isRated || _vm.limitReached,
                    placeholder: _vm.$translate("Feedback::Feedback.title")
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
                  _vm._v(
                    "\n              " +
                      _vm._s(
                        _vm.$translate("Feedback::Feedback.titleRequired")
                      ) +
                      "\n            "
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
                    "aria-label": _vm.$translate(
                      "Feedback::Feedback.reviewMessage"
                    ),
                    name: "message",
                    rows: _vm.rows,
                    disabled: _vm.isRated || _vm.limitReached,
                    placeholder: _vm.$translate(
                      "Feedback::Feedback.reviewMessage"
                    )
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
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            !_vm.isRated && !_vm.limitReached
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-appearance btn-block",
                    attrs: {
                      type: "button",
                      disabled:
                        _vm.isRated ||
                        (_vm.showEmptyRatings && _vm.feedback.ratingValue === 0)
                    },
                    on: {
                      click: function($event) {
                        return _vm.createFeedback()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$translate("Feedback::Feedback.submitReview")
                        ) +
                        "\n        "
                    )
                  ]
                )
              : _vm.limitReached
              ? _c("div", { staticClass: "w-100 text-center" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.$translate(
                          "Feedback::Feedback.maximumNumberOfFeedbacksReached"
                        )
                      ) +
                      "\n        "
                  )
                ])
              : _c("div", { staticClass: "w-100 text-center" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.$translate("Feedback::Feedback.thankYou")) +
                      "\n        "
                  )
                ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=template&id=713d3199&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/order/FeedbackOrderItem.vue?vue&type=template&id=713d3199& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    {
      staticClass: "feedback-item mb-4",
      class: "col-12 col-sm-" + 12 / _vm.numberOfColumns
    },
    [
      _c(
        "div",
        {
          staticClass: "stars",
          on: {
            click: function($event) {
              return _vm.handleRating(0)
            }
          }
        },
        [
          _c("form", [
            _c(
              "fieldset",
              { staticClass: "d-flex flex-row-reverse" },
              [
                _c("legend", [
                  _c("span", { staticClass: "d-none" }, [
                    _vm._v(_vm._s(_vm.item.name))
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.starIds, function(starId) {
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
                      key: "stars_input_" + starId.id,
                      class: starId.class,
                      attrs: {
                        id: starId.id,
                        type: "radio",
                        name: "ratingValue",
                        disabled: _vm.isRated
                      },
                      domProps: {
                        value: starId.value,
                        checked: _vm._q(_vm.feedback.ratingValue, starId.value)
                      },
                      on: {
                        click: function($event) {
                          return _vm.handleRating(starId.value)
                        },
                        change: function($event) {
                          return _vm.$set(
                            _vm.feedback,
                            "ratingValue",
                            starId.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        key: "stars_label_" + starId.id,
                        staticClass: "new_star",
                        attrs: { for: starId.id }
                      },
                      [
                        _c("span", { staticClass: "d-none" }, [
                          _vm._v(_vm._s(starId.id))
                        ]),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            class: starId.class,
                            staticStyle: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              "stroke-linejoin": "round",
                              "stroke-miterlimit": "2"
                            },
                            attrs: {
                              for: starId.id,
                              width: "100%",
                              height: "100%",
                              viewBox: "0 0 31 30",
                              version: "1.1",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                              "xml:space": "preserve",
                              "xmlns:serif": "http://www.serif.com/"
                            }
                          },
                          [
                            _c("path", {
                              staticStyle: { "fill-rule": "nonzero" },
                              attrs: {
                                d:
                                  "M30.5,11.564c0,0.265 -0.156,0.553 -0.469,0.866l-6.544,6.382l1.55,9.014c0.012,0.085 0.018,0.205 0.018,0.361c0,0.252 -0.063,0.466 -0.189,0.64c-0.126,0.174 -0.31,0.261 -0.55,0.261c-0.228,0 -0.469,-0.072 -0.721,-0.216l-8.095,-4.255l-8.095,4.255c-0.264,0.144 -0.505,0.216 -0.721,0.216c-0.253,0 -0.442,-0.087 -0.568,-0.261c-0.126,-0.174 -0.189,-0.388 -0.189,-0.64c0,-0.072 0.012,-0.192 0.036,-0.361l1.55,-9.014l-6.562,-6.382c-0.301,-0.325 -0.451,-0.613 -0.451,-0.866c0,-0.444 0.337,-0.721 1.01,-0.829l9.05,-1.316l4.057,-8.203c0.228,-0.493 0.522,-0.739 0.883,-0.739c0.361,0 0.655,0.246 0.883,0.739l4.057,8.203l9.05,1.316c0.673,0.108 1.01,0.385 1.01,0.829Z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("a", { attrs: { href: _vm.item.url } }, [
        _c("img", {
          staticClass: "py-2",
          attrs: { alt: "image " + _vm.item.name, src: _vm.item.image }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "feedback-item-title" }, [
          _vm._v(_vm._s(_vm.item.name))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "feedback-item-link" },
        _vm._l(_vm.item.attributes, function(attribute) {
          return _c("div", { key: _vm.item.itemId + "-" + attribute.valueId }, [
            _c("strong", [
              _vm._v(_vm._s(attribute.attribute.names.name) + ": ")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(attribute.value.names.name))])
          ])
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=feedback-4.js.map