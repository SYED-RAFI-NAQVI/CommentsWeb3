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

/***/ "./components/Comments.jsx":
/*!*********************************!*\
  !*** ./components/Comments.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comments = function(param) {\n    var signer = param.signer;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), comments = ref[0], setComments = ref[1];\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(\"0xFC8b31b84BcF5bFc180ec10E303AB70180d68750\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var commentsArray;\n        return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return contract.getComments(\"polygon\");\n                case 2:\n                    commentsArray = _ctx.sent;\n                    setComments(commentsArray);\n                    console.log(commentsArray);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            bg: \"tomato\",\n            w: \"100%\",\n            p: 4,\n            color: \"white\",\n            children: comments && (comments === null || comments === void 0 ? void 0 : comments.map(function(comment) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: comment[3]\n                }, void 0, false, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 49\n                }, _this1);\n            }))\n        }, void 0, false, {\n            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Comments, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDWjtBQUM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsR0FBSyxDQUFDSyxRQUFRLEdBQUcsUUFBUSxRQUFRLENBQUM7UUFBZEMsTUFBTSxTQUFOQSxNQUFNOzs7SUFDeEIsR0FBSyxDQUEyQkosR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBdENLLFFBQVEsR0FBaUJMLEdBQWMsS0FBN0JNLFdBQVcsR0FBSU4sR0FBYztJQUM5QyxHQUFLLENBQUNPLFFBQVEsR0FBRyxHQUFHLENBQUNOLG1EQUFlLENBQ2xDLENBQTRDLDZDQUM1Q0MsZ0ZBQWUsRUFDZkUsTUFBTTtJQUdSTCxnREFBUywyS0FBQyxRQUFRLFdBQUksQ0FBQztZQUNqQlcsYUFBYTs7Ozs7MkJBQVNILFFBQVEsQ0FBQ0ksV0FBVyxDQUFDLENBQVM7O29CQUFwREQsYUFBYTtvQkFDakJKLFdBQVcsQ0FBQ0ksYUFBYTtvQkFDekJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhOzs7Ozs7SUFDM0IsQ0FBQyxJQUFFLENBQUMsQ0FBQztJQUVMLE1BQU07OEZBRURaLGlEQUFHO1lBQUNnQixFQUFFLEVBQUMsQ0FBUTtZQUFDQyxDQUFDLEVBQUMsQ0FBTTtZQUFDQyxDQUFDLEVBQUUsQ0FBQztZQUFFQyxLQUFLLEVBQUMsQ0FBTztzQkFDMUNaLFFBQVEsS0FBSUEsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsUUFBUSxDQUFFYSxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPOzhCQUFLLE1BQU0sK0RBQUxILENBQUM7OEJBQUVHLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSTdELENBQUM7R0FyQktoQixRQUFRO0tBQVJBLFFBQVE7QUF1QmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzeD8wYTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgQ29tbWVudHNBQkkgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvQ29tbWVudHMuc29sL0NvbW1lbnRzLmpzb25cIjtcblxuY29uc3QgQ29tbWVudHMgPSAoeyBzaWduZXIgfSkgPT4ge1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgXCIweEZDOGIzMWI4NEJjRjViRmMxODBlYzEwRTMwM0FCNzAxODBkNjg3NTBcIixcbiAgICBDb21tZW50c0FCSS5hYmksXG4gICAgc2lnbmVyXG4gICk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBsZXQgY29tbWVudHNBcnJheSA9IGF3YWl0IGNvbnRyYWN0LmdldENvbW1lbnRzKFwicG9seWdvblwiKTtcbiAgICBzZXRDb21tZW50cyhjb21tZW50c0FycmF5KTtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50c0FycmF5KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggYmc9XCJ0b21hdG9cIiB3PVwiMTAwJVwiIHA9ezR9IGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAge2NvbW1lbnRzICYmIGNvbW1lbnRzPy5tYXAoKGNvbW1lbnQpID0+IDxwPntjb21tZW50WzNdfTwvcD4pfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiJdLCJuYW1lcyI6WyJCb3giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkNvbW1lbnRzQUJJIiwiQ29tbWVudHMiLCJzaWduZXIiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsImNvbW1lbnRzQXJyYXkiLCJnZXRDb21tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJiZyIsInciLCJwIiwiY29sb3IiLCJtYXAiLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Comments.jsx\n");

/***/ })

});