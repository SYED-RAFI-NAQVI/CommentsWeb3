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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Comments = function(param) {\n    var signer = param.signer;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), topic1 = ref1[0], setTopic = ref1[1];\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(\"0xF05965ec71624b8Fb06E971c0D9509756b70E524\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n    var handleGetComments = function() {\n        var _ref = _asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(topic) {\n            var commentsArray;\n            return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract === null || contract === void 0 ? void 0 : contract.getComments(topic);\n                    case 2:\n                        commentsArray = _ctx.sent;\n                        console.log(commentsArray);\n                        setComments(commentsArray);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleGetComments(topic) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            textAlign: \"center\",\n            w: \"100%\",\n            p: 4,\n            color: \"white\",\n            display: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                    placeholder: \"Topic\",\n                    onChange: function(e) {\n                        return setTopic(e.target.value);\n                    },\n                    margin: \"10\"\n                }, void 0, false, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                !comments && comments != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: function() {\n                        return handleGetComments(topic1);\n                    },\n                    children: \"Get Comments\"\n                }, void 0, false, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/Comments.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Comments, \"mdnxsiWV4pGj20Sd22jWl7Ab1WM=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1Y7QUFDWjtBQUM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsR0FBSyxDQUFDTyxRQUFRLEdBQUcsUUFBUSxRQUFRLENBQUM7UUFBZEMsTUFBTSxTQUFOQSxNQUFNOztJQUN4QixHQUFLLENBQTJCSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q0ssUUFBUSxHQUFpQkwsR0FBYyxLQUE3Qk0sV0FBVyxHQUFJTixHQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCTyxNQUFLLEdBQWNQLElBQVksS0FBeEJRLFFBQVEsR0FBSVIsSUFBWTtJQUN0QyxHQUFLLENBQUNTLFFBQVEsR0FBRyxHQUFHLENBQUNSLG1EQUFlLENBQ2xDLENBQTRDLDZDQUM1Q0MsZ0ZBQWUsRUFDZkUsTUFBTTtJQUdSLEdBQUssQ0FBQ1EsaUJBQWlCOzZMQUFHLFFBQVEsU0FBREwsS0FBSyxFQUFLLENBQUM7Z0JBQ3RDTSxhQUFhOzs7OzsrQkFBU0osUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLFFBQVEsQ0FBRUssV0FBVyxDQUFDUCxLQUFLOzt3QkFBakRNLGFBQWE7d0JBQ2pCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsYUFBYTt3QkFDekJQLFdBQVcsQ0FBQ08sYUFBYTs7Ozs7O1FBQzNCLENBQUM7d0JBSktELGlCQUFpQixDQUFVTCxLQUFLOzs7O0lBTXRDLE1BQU07OEZBRURYLGlEQUFHO1lBQUNxQixTQUFTLEVBQUUsQ0FBUTtZQUFFQyxDQUFDLEVBQUMsQ0FBTTtZQUFDQyxDQUFDLEVBQUUsQ0FBQztZQUFFQyxLQUFLLEVBQUMsQ0FBTztZQUFDQyxPQUFPLEVBQUUsQ0FBTTs7NEZBQ25FdkIsbURBQUs7b0JBQ0p3QixXQUFXLEVBQUMsQ0FBTztvQkFDbkJDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7d0JBQUtoQixNQUFNLENBQU5BLFFBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOztvQkFDeENDLE1BQU0sRUFBQyxDQUFJOzs7Ozs7aUJBRVh0QixRQUFRLElBQUlBLFFBQVEsSUFBSSxDQUFFLGlGQUN6QlIsb0RBQU07b0JBQUMrQixPQUFPLEVBQUUsUUFBUTt3QkFBRmhCLE1BQU0sQ0FBTkEsaUJBQWlCLENBQUNMLE1BQUs7OzhCQUFHLENBQVk7Ozs7Ozs7Ozs7Ozs7QUFNdkUsQ0FBQztHQTlCS0osUUFBUTtLQUFSQSxRQUFRO0FBZ0NkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy5qc3g/MGEzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IENvbW1lbnRzQUJJIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0NvbW1lbnRzLnNvbC9Db21tZW50cy5qc29uXCI7XG5cbmNvbnN0IENvbW1lbnRzID0gKHsgc2lnbmVyIH0pID0+IHtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIFwiMHhGMDU5NjVlYzcxNjI0YjhGYjA2RTk3MWMwRDk1MDk3NTZiNzBFNTI0XCIsXG4gICAgQ29tbWVudHNBQkkuYWJpLFxuICAgIHNpZ25lclxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUdldENvbW1lbnRzID0gYXN5bmMgKHRvcGljKSA9PiB7XG4gICAgbGV0IGNvbW1lbnRzQXJyYXkgPSBhd2FpdCBjb250cmFjdD8uZ2V0Q29tbWVudHModG9waWMpO1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzQXJyYXkpO1xuICAgIHNldENvbW1lbnRzKGNvbW1lbnRzQXJyYXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggdGV4dEFsaWduPXtcImNlbnRlclwifSB3PVwiMTAwJVwiIHA9ezR9IGNvbG9yPVwid2hpdGVcIiBkaXNwbGF5PXtcImZsZXhcIn0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG9waWNcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9waWMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgLz5cbiAgICAgICAgeyFjb21tZW50cyAmJiBjb21tZW50cyAhPSBcIlwiICYmIChcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUdldENvbW1lbnRzKHRvcGljKX0+R2V0IENvbW1lbnRzPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiB7Y29tbWVudHMgJiYgY29tbWVudHM/Lm1hcCgoY29tbWVudCkgPT4gPHA+e2NvbW1lbnRbM119PC9wPil9ICovfVxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJJbnB1dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiQ29tbWVudHNBQkkiLCJDb21tZW50cyIsInNpZ25lciIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJ0b3BpYyIsInNldFRvcGljIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsImhhbmRsZUdldENvbW1lbnRzIiwiY29tbWVudHNBcnJheSIsImdldENvbW1lbnRzIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsInciLCJwIiwiY29sb3IiLCJkaXNwbGF5IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comments.jsx\n");

/***/ })

});