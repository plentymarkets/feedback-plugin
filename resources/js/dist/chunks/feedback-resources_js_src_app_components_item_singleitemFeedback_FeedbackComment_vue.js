(self["webpackChunkplentymarkets_feedback"] = self["webpackChunkplentymarkets_feedback"] || []).push([["resources_js_src_app_components_item_singleitemFeedback_FeedbackComment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackListEntry.vue */ "./resources/js/src/app/components/item/singleitemFeedback/FeedbackListEntry.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['feedback', 'itemAttributes', 'authenticatedUser', 'isReply', 'showControls', 'classes', 'styles', 'options'],
  name: 'feedback-comment',
  components: {
    'feedback-list-entry': _FeedbackListEntry_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },

  data() {
    return {
      authorName: '',
      replyMessage: '',
      replyFormVisible: false,
      replyListVisible: false,
      honeypot: ''
    };
  },

  computed: {
    variationAttributes() {
      if (this.feedback.targetRelation.feedbackRelationType !== 'variation' || this.feedback.targetRelation.targetRelationName.length <= 0 || !this.feedback.targetRelation.variationAttributes || !this.itemAttributes) {
        return [];
      }

      var _self = this;

      return this.feedback.targetRelation.variationAttributes.map(function (attributeIds) {
        var targetId = _self.feedback.targetRelation.feedbackRelationTargetId;

        if (!_self.itemAttributes.hasOwnProperty(targetId) || !_self.itemAttributes[targetId].hasOwnProperty(attributeIds.attributeId) || !_self.itemAttributes[targetId][attributeIds.attributeId].hasOwnProperty(attributeIds.valueId)) {
          return null;
        }

        var attribute = _self.itemAttributes[targetId][attributeIds.attributeId][attributeIds.valueId];
        return {
          name: attribute.attributeName,
          value: attribute.attributeValue
        };
      }).filter(function (entry) {
        return entry !== null;
      });
    },

    displayName() {
      var rawName = this.feedback.sourceRelation[0].sourceRelationLabel;

      if (rawName !== " ") {
        return rawName.split(" ").map(function (namePart, index) {
          if (index === 0) {
            return namePart + " ";
          }

          return namePart.substr(0, 1) + ".";
        }).join("");
      } else {
        return $translate('Feedback::Feedback.guestName');
      }
    },

    message() {
      if (!this.feedback.feedbackComment) {
        return "";
      }

      return this.feedback.feedbackComment.comment.message.split('\n').join('<br />');
    },

    isPurchased() {
      return this.feedback.sourceRelation.find(function (relation) {
        return relation.feedbackRelationType === 'orderItem';
      });
    }

  },
  methods: {
    createReply() {
      if (!this.replyMessage || this.honeypot.length > 0) {
        return;
      }

      var _self = this;

      $.ajax({
        type: 'POST',
        url: '/rest/feedbacks/feedback/create',
        data: {
          authorName: this.authorName,
          message: this.replyMessage,
          targetId: this.feedback.id,
          type: 'reply'
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: function (data) {
          if (!_self.feedback.replies) {
            _self.feedback.replies = [];
          }

          _self.feedback.replies.unshift(data);

          _self.replyMessage = '';
          _self.replyFormVisible = false;
          _self.replyListVisible = true;
        }
      });
    }

  }
});

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue ***!
  \*************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackComment_vue_vue_type_template_id_86bccbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackComment.vue?vue&type=template&id=86bccbb6& */ "./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6&");
/* harmony import */ var _FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackComment.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FeedbackComment_vue_vue_type_template_id_86bccbb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeedbackComment_vue_vue_type_template_id_86bccbb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackComment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6& ***!
  \********************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_template_id_86bccbb6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_template_id_86bccbb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackComment_vue_vue_type_template_id_86bccbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeedbackComment.vue?vue&type=template&id=86bccbb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/singleitemFeedback/FeedbackComment.vue?vue&type=template&id=86bccbb6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "feedback-comment", class: _vm.classes, style: _vm.styles },
    [
      !_vm.isReply
        ? _c("div", [
            _c("p", { staticClass: "feedback-comment-title" }, [
              _vm._v(_vm._s(_vm.feedback.title))
            ]),
            _vm._v(" "),
            _vm.feedback.feedbackRating.rating.ratingValue > 0
              ? _c(
                  "div",
                  { staticClass: "feedback-rating" },
                  _vm._l(5, function(i) {
                    return _c("i", {
                      staticClass: "fa fa-star",
                      class: {
                        full:
                          _vm.feedback.feedbackRating.rating.ratingValue >= i,
                        empty:
                          _vm.feedback.feedbackRating.rating.ratingValue < i
                      }
                    })
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "feedback-attributes-list" }, [
              _c(
                "p",
                [
                  _vm.isPurchased
                    ? _c("span", { staticClass: "feedback-verified-tag" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.$translate(
                                "Feedback::Feedback.verifiedPurchase"
                              )
                            ) +
                            "\n            "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.variationAttributes, function(variationAttribute) {
                    return _c("span", { staticClass: "feedback-attributes" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(variationAttribute.name) +
                          ": " +
                          _vm._s(variationAttribute.value) +
                          "\n            "
                      )
                    ])
                  })
                ],
                2
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("p", {
        staticClass: "feedback-comment-text",
        domProps: { innerHTML: _vm._s(_vm.message) }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "feedback-info" }, [
        _c("span", { staticClass: "feedback-info-segment" }, [
          _c("strong", [
            _vm.feedback.sourceRelation[0].feedbackRelationType === "user"
              ? _c(
                  "span",
                  {
                    directives: [{ name: "tooltip", rawName: "v-tooltip" }],
                    staticClass: "feedback-admin",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      "data-original-title": _vm.$translate(
                        "Feedback::Feedback.shopManagerLabel"
                      )
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-square" }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.feedback.sourceRelation[0].sourceRelationLabel
                        ) +
                        "\n            "
                    )
                  ]
                )
              : _vm.feedback.sourceRelation[0].feedbackRelationSourceId == 0 &&
                _vm.feedback.authorName.length > 0
              ? _c("span", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.feedback.authorName) +
                      "\n            "
                  )
                ])
              : _vm.feedback.sourceRelation[0].feedbackRelationSourceId == 0
              ? _c("span", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$translate("Feedback::Feedback.guestName")) +
                      "\n            "
                  )
                ])
              : _c("span", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.displayName) +
                      "\n            "
                  )
                ])
          ])
        ]),
        _vm._v(" "),
        _vm.options.timestampVisibility
          ? _c("span", { staticClass: "feedback-info-segment" }, [
              _c("i", { staticClass: "fa fa-calendar text-muted" }),
              _vm._v(
                "\n        " +
                  _vm._s(
                    _vm._f("date")(
                      _vm.feedback.createdAt,
                      _vm.$translate("Ceres::Template.devDateFormatMoment") ||
                        "DD.MM.YYYY"
                    )
                  ) +
                  "\n    "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.isReply &&
        (_vm.authenticatedUser.isLoggedIn || _vm.options.allowGuestFeedbacks)
          ? _c(
              "span",
              {
                staticClass: "feedback-info-segment btn btn-sm btn-default",
                on: {
                  click: function($event) {
                    _vm.replyFormVisible = !_vm.replyFormVisible
                  }
                }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$translate("Feedback::Feedback.addComment")) +
                    "\n    "
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        !!_vm.feedback.replies &&
        _vm.feedback.replies.length > 0 &&
        !_vm.replyListVisible
          ? _c(
              "span",
              {
                staticClass: "feedback-info-segment btn btn-sm btn-default",
                on: {
                  click: function($event) {
                    _vm.replyListVisible = !_vm.replyListVisible
                  }
                }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$translate("Feedback::Feedback.viewComments")) +
                    " (" +
                    _vm._s(_vm.feedback.replies.length) +
                    ")\n    "
                )
              ]
            )
          : !!_vm.feedback.replies &&
            _vm.feedback.replies.length > 0 &&
            _vm.replyListVisible
          ? _c(
              "span",
              {
                staticClass: "feedback-info-segment btn btn-sm btn-default",
                on: {
                  click: function($event) {
                    _vm.replyListVisible = !_vm.replyListVisible
                  }
                }
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$translate("Feedback::Feedback.hideComments")) +
                    "\n    "
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.replyFormVisible &&
      !_vm.isReply &&
      (_vm.authenticatedUser.isLoggedIn || _vm.options.allowGuestFeedbacks)
        ? _c("div", { staticClass: "feedback-add-reply" }, [
            !_vm.authenticatedUser.isLoggedIn && _vm.options.allowGuestFeedbacks
              ? _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.authorName,
                        expression: "authorName"
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
                    domProps: { value: _vm.authorName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.authorName = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.honeypot,
                        expression: "honeypot"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "comment-textfield",
                      name: "comment-textfield"
                    },
                    domProps: { value: _vm.honeypot },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.honeypot = $event.target.value
                      }
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.replyMessage,
                    expression: "replyMessage"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "message",
                  rows: "3",
                  placeholder: _vm.$translate(
                    "Feedback::Feedback.commentMessage"
                  )
                },
                domProps: { value: _vm.replyMessage },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.replyMessage = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-appearance",
                attrs: { disabled: !_vm.replyMessage },
                on: {
                  click: function($event) {
                    return _vm.createReply()
                  }
                }
              },
              [
                _vm._v(
                  _vm._s(_vm.$translate("Feedback::Feedback.submitComment"))
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !!_vm.feedback.replies &&
      _vm.feedback.replies.length > 0 &&
      _vm.replyListVisible
        ? _c(
            "div",
            { staticClass: "feedback-replies" },
            _vm._l(_vm.feedback.replies, function(reply) {
              return _c("feedback-list-entry", {
                key: reply.id,
                attrs: {
                  feedback: reply,
                  "item-attributes": _vm.itemAttributes,
                  "authenticated-user": _vm.authenticatedUser,
                  "is-reply": true,
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
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=feedback-resources_js_src_app_components_item_singleitemFeedback_FeedbackComment_vue.js.map