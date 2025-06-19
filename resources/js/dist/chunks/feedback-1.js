"use strict";
(self["webpackChunkplentymarkets_feedback"] = self["webpackChunkplentymarkets_feedback"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/loadFeedbackModule */ "./resources/js/src/app/mixins/loadFeedbackModule.js");






function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FeedbackAverage',
  mixins: [_mixins_loadFeedbackModule__WEBPACK_IMPORTED_MODULE_6__["default"]],
  inject: {
    itemId: {
      default: null
    }
  },
  props: {
    showEmptyRatings: Boolean,
    sizeOfStars: {
      type: String,
      default: 'small'
    },
    showRatingsAmount: Boolean
  },
  computed: _objectSpread({
    fill: function fill() {
      var fillValue = this.counts.averageValue * 100 / 5;
      fillValue += '%';
      return fillValue;
    },
    size: function size() {
      return this.sizeOfStars.indexOf('-stars') !== -1 ? this.sizeOfStars : this.sizeOfStars + '-stars';
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapState)({
    counts: function counts(state) {
      return state.feedback.counts;
    }
  })),
  mounted: function mounted() {
    if (!App.isShopBuilder) {
      this.getAverage();
    }
  },
  methods: {
    getAverage: function getAverage() {
      var _self = this;
      setTimeout(function () {
        if (typeof _self.counts.averageValue === 'undefined') {
          _self.$store.dispatch('loadPaginatedFeedbacks', {
            itemId: _self.itemId,
            feedbacksPerPage: 10
          });
        }
      }, 1000);
    },
    scrollTo: function scrollTo() {
      var targetElement = document.querySelector('[data-feedback]');
      var headerMargin = document.querySelector('#vue-app').offsetTop;
      if (targetElement) {
        while (!(targetElement.clientHeight && targetElement.classList.contains('widget')) && !!targetElement.parentElement) {
          targetElement = targetElement.parentElement;
        }
        if (targetElement) {
          var elementTop = targetElement.getBoundingClientRect().top + window.scrollY - headerMargin;
          window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
          });
        }
      }
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

/***/ "./resources/js/src/app/components/item/FeedbackAverage.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/app/components/item/FeedbackAverage.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackAverage.vue?vue&type=template&id=84655b24& */ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&");
/* harmony import */ var _FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackAverage.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/FeedbackAverage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackAverage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackAverage.vue?vue&type=template&id=84655b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.showEmptyRatings || _vm.counts.averageValue > 0
      ? _c("div", { staticClass: "feedback-stars-average", class: _vm.size }, [
          _c(
            "div",
            { staticClass: "feedback-stars-background clearfix" },
            _vm._l(5, function (index) {
              return _c(
                "div",
                {
                  key: "star_background_" + index,
                  staticClass: "feedback-star",
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
              style: { width: _vm.fill },
            },
            [
              _c(
                "div",
                { staticClass: "feedback-stars-overlay clearfix" },
                _vm._l(5, function (index) {
                  return _c(
                    "div",
                    {
                      key: "star_overlay_" + index,
                      staticClass: "feedback-star",
                    },
                    [_c("i", { staticClass: "fa fa-star" })]
                  )
                }),
                0
              ),
            ]
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.showRatingsAmount &&
    (_vm.showEmptyRatings || _vm.counts.averageValue > 0)
      ? _c("span", { class: _vm.size }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.scrollTo($event)
                },
              },
            },
            [_vm._v("(" + _vm._s(_vm.counts.ratingsCountTotal) + ")")]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=feedback-1.js.map