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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comments = function(param) {\n    var signer = param.signer;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), topic1 = ref1[0], setTopic = ref1[1];\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(\"0xF05965ec71624b8Fb06E971c0D9509756b70E524\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n    var handleGetComments = function() {\n        var _ref = _asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(topic) {\n            var commentsArray;\n            return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract === null || contract === void 0 ? void 0 : contract.getComments(topic);\n                    case 2:\n                        commentsArray = _ctx.sent;\n                        console.log(commentsArray);\n                        setComments(commentsArray);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleGetComments(topic) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                textAlign: \"center\",\n                children: \"Search Comments\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                textAlign: \"center\",\n                w: \"100%\",\n                p: 4,\n                color: \"white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                            placeholder: \"Topic\",\n                            onChange: function(e) {\n                                return setTopic(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: function() {\n                            return handleGetComments(\"polygon\");\n                        },\n                        marginTop: \"4\",\n                        children: \"Get Comments\"\n                    }, void 0, false, {\n                        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    comments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                        marginTop: 6,\n                        bgColor: \"#2C2A2A\",\n                        borderRadius: \"16\",\n                        textAlign: \"left\",\n                        p: 4,\n                        fontSize: \"xs\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            margin: 4,\n                            children: comments === null || comments === void 0 ? void 0 : comments.map(function(comment) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                            marginBottom: 1,\n                                            children: comment[3]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: comment[2]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, comment, true, {\n                                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Comments, \"mdnxsiWV4pGj20Sd22jWl7Ab1WM=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9FO0FBQ3pCO0FBQ1o7QUFDNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLEdBQUssQ0FBQ1MsUUFBUSxHQUFHLFFBQVEsUUFBUSxDQUFDO1FBQWRDLE1BQU0sU0FBTkEsTUFBTTs7O0lBQ3hCLEdBQUssQ0FBMkJKLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXRDSyxRQUFRLEdBQWlCTCxHQUFjLEtBQTdCTSxXQUFXLEdBQUlOLEdBQWM7SUFDOUMsR0FBSyxDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJPLE1BQUssR0FBY1AsSUFBWSxLQUF4QlEsUUFBUSxHQUFJUixJQUFZO0lBQ3RDLEdBQUssQ0FBQ1MsUUFBUSxHQUFHLEdBQUcsQ0FBQ1IsbURBQWUsQ0FDbEMsQ0FBNEMsNkNBQzVDQyxnRkFBZSxFQUNmRSxNQUFNO0lBR1IsR0FBSyxDQUFDUSxpQkFBaUI7NkxBQUcsUUFBUSxTQUFETCxLQUFLLEVBQUssQ0FBQztnQkFDdENNLGFBQWE7Ozs7OytCQUFTSixRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsSUFBSSxDQUFKQSxDQUFxQixHQUFyQkEsUUFBUSxDQUFFSyxXQUFXLENBQUNQLEtBQUs7O3dCQUFqRE0sYUFBYTt3QkFDakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhO3dCQUN6QlAsV0FBVyxDQUFDTyxhQUFhOzs7Ozs7UUFDM0IsQ0FBQzt3QkFKS0QsaUJBQWlCLENBQVVMLEtBQUs7Ozs7SUFNdEMsTUFBTTs7d0ZBRURWLHFEQUFPO2dCQUFDb0IsU0FBUyxFQUFFLENBQVE7MEJBQUUsQ0FBZTs7Ozs7O3dGQUM1Q3ZCLGlEQUFHO2dCQUFDdUIsU0FBUyxFQUFFLENBQVE7Z0JBQUVDLENBQUMsRUFBQyxDQUFNO2dCQUFDQyxDQUFDLEVBQUUsQ0FBQztnQkFBRUMsS0FBSyxFQUFDLENBQU87O2dHQUNuRHhCLGtEQUFJOzhHQUNGRSxtREFBSzs0QkFDSnVCLFdBQVcsRUFBQyxDQUFPOzRCQUNuQkMsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztnQ0FBS2YsTUFBTSxDQUFOQSxRQUFRLENBQUNlLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7Z0dBRzNDOUIsb0RBQU07d0JBQUMrQixPQUFPLEVBQUUsUUFBUTs0QkFBRmQsTUFBTSxDQUFOQSxpQkFBaUIsQ0FBQyxDQUFTOzt3QkFBR2UsU0FBUyxFQUFDLENBQUc7a0NBQUMsQ0FFbkU7Ozs7OztvQkFFQ3RCLFFBQVEsZ0ZBQ05ULGtEQUFJO3dCQUNIK0IsU0FBUyxFQUFFLENBQUM7d0JBQ1pDLE9BQU8sRUFBQyxDQUFTO3dCQUNqQkMsWUFBWSxFQUFDLENBQUk7d0JBQ2pCWixTQUFTLEVBQUUsQ0FBTTt3QkFDakJFLENBQUMsRUFBRSxDQUFDO3dCQUNKVyxRQUFRLEVBQUMsQ0FBSTs4R0FFWnBDLGlEQUFHOzRCQUFDcUMsTUFBTSxFQUFFLENBQUM7c0NBQ1gxQixRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxRQUFRLENBQUUyQixHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPOzhDQUNyQixNQUFNLCtEQUFMdkMsaURBQUc7O29IQUNERyxxREFBTzs0Q0FBQ3FDLFlBQVksRUFBRSxDQUFDO3NEQUFHRCxPQUFPLENBQUMsQ0FBQzs7Ozs7O29IQUNuQ2QsQ0FBQztzREFBRWMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7bUNBRkxBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQyxDQUFDO0dBbkRLOUIsUUFBUTtLQUFSQSxRQUFRO0FBcURkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy5qc3g/MGEzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZCwgSGVhZGluZywgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IENvbW1lbnRzQUJJIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0NvbW1lbnRzLnNvbC9Db21tZW50cy5qc29uXCI7XG5cbmNvbnN0IENvbW1lbnRzID0gKHsgc2lnbmVyIH0pID0+IHtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIFwiMHhGMDU5NjVlYzcxNjI0YjhGYjA2RTk3MWMwRDk1MDk3NTZiNzBFNTI0XCIsXG4gICAgQ29tbWVudHNBQkkuYWJpLFxuICAgIHNpZ25lclxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUdldENvbW1lbnRzID0gYXN5bmMgKHRvcGljKSA9PiB7XG4gICAgbGV0IGNvbW1lbnRzQXJyYXkgPSBhd2FpdCBjb250cmFjdD8uZ2V0Q29tbWVudHModG9waWMpO1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzQXJyYXkpO1xuICAgIHNldENvbW1lbnRzKGNvbW1lbnRzQXJyYXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+U2VhcmNoIENvbW1lbnRzPC9IZWFkaW5nPlxuICAgICAgPEJveCB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IHc9XCIxMDAlXCIgcD17NH0gY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG9waWNcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdldENvbW1lbnRzKFwicG9seWdvblwiKX0gbWFyZ2luVG9wPVwiNFwiPlxuICAgICAgICAgIEdldCBDb21tZW50c1xuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICB7Y29tbWVudHMgJiYgKFxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBtYXJnaW5Ub3A9ezZ9XG4gICAgICAgICAgICBiZ0NvbG9yPVwiIzJDMkEyQVwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxNlwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249e1wibGVmdFwifVxuICAgICAgICAgICAgcD17NH1cbiAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luPXs0fT5cbiAgICAgICAgICAgICAge2NvbW1lbnRzPy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y29tbWVudH0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBtYXJnaW5Cb3R0b209ezF9Pntjb21tZW50WzNdfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxwPntjb21tZW50WzJdfTwvcD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkdyaWQiLCJIZWFkaW5nIiwiSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkNvbW1lbnRzQUJJIiwiQ29tbWVudHMiLCJzaWduZXIiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwidG9waWMiLCJzZXRUb3BpYyIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJoYW5kbGVHZXRDb21tZW50cyIsImNvbW1lbnRzQXJyYXkiLCJnZXRDb21tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJ3IiwicCIsImNvbG9yIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJtYXJnaW5Ub3AiLCJiZ0NvbG9yIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJtYXJnaW4iLCJtYXAiLCJjb21tZW50IiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Comments.jsx\n");

/***/ })

});