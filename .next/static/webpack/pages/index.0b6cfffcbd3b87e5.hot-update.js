"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AddComments.jsx":
/*!************************************!*\
  !*** ./components/AddComments.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ref = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\"), Textarea = ref.Textarea, Button = ref.Button, Input = ref.Input, Heading = ref.Heading;\nvar AddComments = function(param) {\n    var signer = param.signer;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), topic = ref2[0], setTopic = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref1[0], setComment = ref1[1];\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0xF05965ec71624b8Fb06E971c0D9509756b70E524\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_1__.abi, signer);\n    var handleComment = function() {\n        console.log(topic, comment);\n        contract.addComment(topic, comment);\n        setTopic(\"\");\n        setComment(\"\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                textAlign: \"center\",\n                children: \" Add Comment\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                placeholder: \"Topic\",\n                onChange: function(e) {\n                    return setTopic(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Textarea, {\n                placeholder: \"Add a comment\",\n                onChange: function(e) {\n                    return setComment(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: handleComment,\n                children: \"Button\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(AddComments, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = AddComments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddComments);\nvar _c;\n$RefreshReg$(_c, \"AddComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFDNEM7QUFDM0M7OztBQUhoQyxHQUFLLENBQXdDRyxHQUEyQixHQUEzQkEsbUJBQU8sQ0FBQyxxRkFBa0IsR0FBL0RDLFFBQVEsR0FBNkJELEdBQTJCLENBQWhFQyxRQUFRLEVBQUVDLE1BQU0sR0FBcUJGLEdBQTJCLENBQXRERSxNQUFNLEVBQUVDLEtBQUssR0FBY0gsR0FBMkIsQ0FBOUNHLEtBQUssRUFBRUMsT0FBTyxHQUFLSixHQUEyQixDQUF2Q0ksT0FBTztBQUt4QyxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLFFBQVEsQ0FBQztRQUFkQyxNQUFNLFNBQU5BLE1BQU07O0lBQzNCLEdBQUssQ0FBcUJQLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCUSxLQUFLLEdBQWNSLElBQVksS0FBeEJTLFFBQVEsR0FBSVQsSUFBWTtJQUN0QyxHQUFLLENBQXlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ1UsT0FBTyxHQUFnQlYsSUFBWSxLQUExQlcsVUFBVSxHQUFJWCxJQUFZO0lBRTFDLEdBQUssQ0FBQ1ksUUFBUSxHQUFHLEdBQUcsQ0FBQ2QsbURBQWUsQ0FDbEMsQ0FBNEMsNkNBQzVDQyxnRkFBZSxFQUNmUSxNQUFNO0lBR1IsR0FBSyxDQUFDUSxhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULEtBQUssRUFBRUUsT0FBTztRQUMxQkUsUUFBUSxDQUFDTSxVQUFVLENBQUNWLEtBQUssRUFBRUUsT0FBTztRQUNsQ0QsUUFBUSxDQUFDLENBQUU7UUFDWEUsVUFBVSxDQUFDLENBQUU7SUFDZixDQUFDO0lBRUQsTUFBTTs7d0ZBRUROLE9BQU87Z0JBQUNjLFNBQVMsRUFBRSxDQUFROzBCQUFFLENBQVk7Ozs7Ozt3RkFDekNmLEtBQUs7Z0JBQUNnQixXQUFXLEVBQUMsQ0FBTztnQkFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztvQkFBS2IsTUFBTSxDQUFOQSxRQUFRLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7O3dGQUNsRXRCLFFBQVE7Z0JBQ1BrQixXQUFXLEVBQUMsQ0FBZTtnQkFDM0JDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7b0JBQUtYLE1BQU0sQ0FBTkEsVUFBVSxDQUFDVyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozt3RkFFM0NyQixNQUFNO2dCQUFDc0IsT0FBTyxFQUFFVixhQUFhOzBCQUFFLENBQU07Ozs7Ozs7O0FBRzVDLENBQUM7R0E1QktULFdBQVc7S0FBWEEsV0FBVztBQThCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeD84MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgVGV4dGFyZWEsIEJ1dHRvbiwgSW5wdXQsIEhlYWRpbmcgfSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IENvbW1lbnRzQUJJIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0NvbW1lbnRzLnNvbC9Db21tZW50cy5qc29uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBZGRDb21tZW50cyA9ICh7IHNpZ25lciB9KSA9PiB7XG4gIGNvbnN0IFt0b3BpYywgc2V0VG9waWNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICBcIjB4RjA1OTY1ZWM3MTYyNGI4RmIwNkU5NzFjMEQ5NTA5NzU2YjcwRTUyNFwiLFxuICAgIENvbW1lbnRzQUJJLmFiaSxcbiAgICBzaWduZXJcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDb21tZW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRvcGljLCBjb21tZW50KTtcbiAgICBjb250cmFjdC5hZGRDb21tZW50KHRvcGljLCBjb21tZW50KTtcbiAgICBzZXRUb3BpYyhcIlwiKTtcbiAgICBzZXRDb21tZW50KFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+IEFkZCBDb21tZW50PC9IZWFkaW5nPlxuICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiVG9waWNcIiBvbkNoYW5nZT17KGUpID0+IHNldFRvcGljKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxUZXh0YXJlYVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnRcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ29tbWVudH0+QnV0dG9uPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRDb21tZW50cztcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJDb21tZW50c0FCSSIsInVzZVN0YXRlIiwicmVxdWlyZSIsIlRleHRhcmVhIiwiQnV0dG9uIiwiSW5wdXQiLCJIZWFkaW5nIiwiQWRkQ29tbWVudHMiLCJzaWduZXIiLCJ0b3BpYyIsInNldFRvcGljIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwiaGFuZGxlQ29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJhZGRDb21tZW50IiwidGV4dEFsaWduIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddComments.jsx\n");

/***/ })

});