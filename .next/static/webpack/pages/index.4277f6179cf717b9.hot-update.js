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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comments = function(param) {\n    var signer = param.signer;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), comments = ref[0], setComments = ref[1];\n    var contract1 = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(\"0xF05965ec71624b8Fb06E971c0D9509756b70E524\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n    var commentsArray;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n        var getComments, _getComments;\n        return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    getComments = function _getComments1(contract) {\n                        return _getComments.apply(this, arguments);\n                    };\n                    _getComments = function __getComments() {\n                        _getComments = _asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(contract) {\n                            return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return contract === null || contract === void 0 ? void 0 : contract.getComments(\"polygon\");\n                                    case 2:\n                                        commentsArray = _ctx.sent;\n                                    case 3:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }));\n                        return _getComments.apply(this, arguments);\n                    };\n                    if (contract1) {\n                        _ctx1.next = 4;\n                        break;\n                    }\n                    return _ctx1.abrupt(\"return\");\n                case 4:\n                    ;\n                    ;\n                    setComments(commentsArray);\n                case 7:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    })), []);\n    //   useEffect(async () => {\n    //     handleLoad();\n    //   }, []);\n    //   const handleLoad = async () => {\n    //     if (!comments) return;\n    //     setComments(await contract?.getComments(\"polygon\"));\n    //     console.log(await contract?.getComments(\"polygon\"));\n    //   };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            bg: \"tomato\",\n            w: \"100%\",\n            p: 4,\n            color: \"white\"\n        }, void 0, false, {\n            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Comments, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDWjtBQUM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsR0FBSyxDQUFDSyxRQUFRLEdBQUcsUUFBUSxRQUFRLENBQUM7UUFBZEMsTUFBTSxTQUFOQSxNQUFNOztJQUN4QixHQUFLLENBQTJCSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q0ssUUFBUSxHQUFpQkwsR0FBYyxLQUE3Qk0sV0FBVyxHQUFJTixHQUFjO0lBQzlDLEdBQUssQ0FBQ08sU0FBUSxHQUFHLEdBQUcsQ0FBQ04sbURBQWUsQ0FDbEMsQ0FBNEMsNkNBQzVDQyxnRkFBZSxFQUNmRSxNQUFNO0lBR1IsR0FBRyxDQUFDTSxhQUFhO0lBQ2pCWCxnREFBUywyS0FBQyxRQUFRLFlBQUksQ0FBQztZQUVOWSxXQUFXLEVBQVhBLFlBQVc7Ozs7b0JBQVhBLFdBQVcsWUFBWEEsYUFBVyxDQUFDSixRQUFROytCQUFwQkksWUFBVzs7b0JBQVhBLFlBQVcsWUFBWEEsYUFBVzt3QkFBWEEsWUFBVyw2S0FBMUIsUUFBUSxTQUFtQkosUUFBUSxFQUFFLENBQUM7Ozs7OytDQUNkQSxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsUUFBUSxDQUFFSSxXQUFXLENBQUMsQ0FBUzs7d0NBQXJERCxhQUFhOzs7Ozs7d0JBQ2YsQ0FBQzsrQkFGY0MsWUFBVzs7d0JBRHJCSixTQUFROzs7Ozs7OztvQkFJYkQsV0FBVyxDQUFDSSxhQUFhOzs7Ozs7SUFDM0IsQ0FBQyxJQUFFLENBQUMsQ0FBQztJQUVMLEVBQTRCO0lBQzVCLEVBQW9CO0lBQ3BCLEVBQVk7SUFFWixFQUFxQztJQUNyQyxFQUE2QjtJQUM3QixFQUEyRDtJQUMzRCxFQUEyRDtJQUMzRCxFQUFPO0lBRVAsTUFBTTs4RkFFRFosaURBQUc7WUFBQ2MsRUFBRSxFQUFDLENBQVE7WUFBQ0MsQ0FBQyxFQUFDLENBQU07WUFBQ0MsQ0FBQyxFQUFFLENBQUM7WUFBRUMsS0FBSyxFQUFDLENBQU87Ozs7Ozs7QUFLbkQsQ0FBQztHQWxDS1osUUFBUTtLQUFSQSxRQUFRO0FBb0NkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy5qc3g/MGEzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IENvbW1lbnRzQUJJIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0NvbW1lbnRzLnNvbC9Db21tZW50cy5qc29uXCI7XG5cbmNvbnN0IENvbW1lbnRzID0gKHsgc2lnbmVyIH0pID0+IHtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIFwiMHhGMDU5NjVlYzcxNjI0YjhGYjA2RTk3MWMwRDk1MDk3NTZiNzBFNTI0XCIsXG4gICAgQ29tbWVudHNBQkkuYWJpLFxuICAgIHNpZ25lclxuICApO1xuXG4gIGxldCBjb21tZW50c0FycmF5O1xuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGlmICghY29udHJhY3QpIHJldHVybjtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDb21tZW50cyhjb250cmFjdCkge1xuICAgICAgY29tbWVudHNBcnJheSA9IGF3YWl0IGNvbnRyYWN0Py5nZXRDb21tZW50cyhcInBvbHlnb25cIik7XG4gICAgfVxuICAgIHNldENvbW1lbnRzKGNvbW1lbnRzQXJyYXkpO1xuICB9LCBbXSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgaGFuZGxlTG9hZCgpO1xuICAvLyAgIH0sIFtdKTtcblxuICAvLyAgIGNvbnN0IGhhbmRsZUxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgICBpZiAoIWNvbW1lbnRzKSByZXR1cm47XG4gIC8vICAgICBzZXRDb21tZW50cyhhd2FpdCBjb250cmFjdD8uZ2V0Q29tbWVudHMoXCJwb2x5Z29uXCIpKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGF3YWl0IGNvbnRyYWN0Py5nZXRDb21tZW50cyhcInBvbHlnb25cIikpO1xuICAvLyAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBiZz1cInRvbWF0b1wiIHc9XCIxMDAlXCIgcD17NH0gY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICB7Lyoge2NvbW1lbnRzICYmIGNvbW1lbnRzPy5tYXAoKGNvbW1lbnQpID0+IDxwPntjb21tZW50WzNdfTwvcD4pfSAqL31cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwibmFtZXMiOlsiQm94IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJDb21tZW50c0FCSSIsIkNvbW1lbnRzIiwic2lnbmVyIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJjb21tZW50c0FycmF5IiwiZ2V0Q29tbWVudHMiLCJiZyIsInciLCJwIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comments.jsx\n");

/***/ })

});