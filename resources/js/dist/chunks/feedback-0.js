(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showEmptyRatings', 'sizeOfStars', 'showRatingsAmount'],
  inject: {
    itemId: {
      default: null
    }
  },

  data() {
    return {
      counts: {
        'averageValue': 0,
        'ratingsCountTotal': 0
      }
    };
  },

  created() {
    var _self = this;

    this.$root.$on('averageRecalc', function () {
      _self.getAverage();
    });

    if (!App.isShopBuilder) {
      this.getAverage();
    }
  },

  methods: {
    getAverage() {
      var _self = this;

      return $.ajax({
        type: 'GET',
        url: '/rest/feedbacks/feedback/helper/average/' + _self.itemId,
        success: function (data) {
          _self.counts = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
        }
      });
    },

    scrollTo() {
      var targetElement = document.querySelector("[data-feedback]");
      var headerMargin = document.querySelector("#vue-app").offsetTop;
      var tries = 0;

      if (targetElement) {
        while (!(targetElement.clientHeight && targetElement.classList.contains("widget")) && !!targetElement.parentElement) {
          targetElement = targetElement.parentElement;
        }

        if (targetElement) {
          var elementTop = targetElement.getBoundingClientRect().top + window.scrollY - headerMargin;
          window.scrollTo({
            top: elementTop,
            behavior: "smooth"
          });
        }
      }
    }

  },
  computed: {
    fill() {
      var fillValue = this.counts.averageValue * 100 / 5;
      fillValue += "%";
      return fillValue;
    },

    size() {
      return this.sizeOfStars.indexOf("-stars") !== -1 ? this.sizeOfStars : this.sizeOfStars + "-stars";
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showEmptyRatings || _vm.counts.averageValue > 0
    ? _c("div", [
        _c("div", { staticClass: "feedback-stars-average", class: _vm.size }, [
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
              style: { width: _vm.fill }
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
        _vm.showRatingsAmount
          ? _c("span", { class: _vm.size }, [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.scrollTo($event)
                    }
                  }
                },
                [_vm._v("(${ counts.ratingsCountTotal })")]
              )
            ])
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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


/***/ }),

/***/ "./resources/js/src/app/components/item/FeedbackAverage.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/app/components/item/FeedbackAverage.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackAverage.vue?vue&type=template&id=84655b24& */ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&");
/* harmony import */ var _FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackAverage.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackAverage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackAverage.vue?vue&type=template&id=84655b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/FeedbackAverage.vue?vue&type=template&id=84655b24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackAverage_vue_vue_type_template_id_84655b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=feedback-0.js.map