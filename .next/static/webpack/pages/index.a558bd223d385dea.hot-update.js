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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_AddComments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AddComments */ \"./components/AddComments.jsx\");\n/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Comments */ \"./components/Comments.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n// import { Provider as WagmiProvider } from \"wagmi\";\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar App = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), signer1 = ref[0], setSigner = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider1 = ref1[0], setProvider = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer;\n        return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(window.ethereum, \"any\");\n                    _ctx.next = 3;\n                    return provider.send(\"eth_requestAccounts\", []);\n                case 3:\n                    signer = provider.getSigner();\n                    setProvider(provider);\n                    setSigner(signer);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n        theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n            p: 8,\n            maxW: \"600px\",\n            minW: \"320px\",\n            m: \"0 auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Comments__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    signer: signer1\n                }, void 0, false, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AddComments__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    signer: signer1\n                }, void 0, false, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                    position: \"bottom-right\"\n                }, void 0, false, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_s(App, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUM4QjtBQUN6QjtBQUNwQjtBQUM1QixFQUFxRDtBQUN0QjtBQUVvQjtBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxHQUFLLENBQUNZLEdBQUcsR0FBRyxRQUNaLEdBRGtCLENBQUM7O0lBQ2pCLEdBQUssQ0FBdUJYLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWxDWSxPQUFNLEdBQWVaLEdBQWMsS0FBM0JhLFNBQVMsR0FBSWIsR0FBYztJQUMxQyxHQUFLLENBQTJCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q2MsU0FBUSxHQUFpQmQsSUFBYyxLQUE3QmUsV0FBVyxHQUFJZixJQUFjO0lBRTlDRCxnREFBUywyS0FBQyxRQUFRLFdBQUksQ0FBQztZQUNmZSxRQUFRLEVBRVJGLE1BQU07Ozs7b0JBRk5FLFFBQVEsR0FBRyxHQUFHLENBQUNOLGlFQUE2QixDQUFDVSxNQUFNLENBQUNDLFFBQVEsRUFBRSxDQUFLOzsyQkFDbkVMLFFBQVEsQ0FBQ00sSUFBSSxDQUFDLENBQXFCLHNCQUFFLENBQUMsQ0FBQzs7b0JBQ3ZDUixNQUFNLEdBQUdFLFFBQVEsQ0FBQ08sU0FBUztvQkFDakNOLFdBQVcsQ0FBQ0QsUUFBUTtvQkFDcEJELFNBQVMsQ0FBQ0QsTUFBTTs7Ozs7O0lBQ2xCLENBQUMsSUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNIWCw0REFBYztRQUFDTSxLQUFLLEVBQUVBLDhDQUFLOzhGQUN6QkwsaURBQUc7WUFBQ29CLENBQUMsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBQyxDQUFPO1lBQUNDLElBQUksRUFBQyxDQUFPO1lBQUNDLENBQUMsRUFBQyxDQUFROzs0RkFDNUNmLDREQUFRO29CQUFDRSxNQUFNLEVBQUVBLE9BQU07Ozs7Ozs0RkFDdkJILCtEQUFXO29CQUFDRyxNQUFNLEVBQUVBLE9BQU07Ozs7Ozs0RkFDMUJQLG9EQUFPO29CQUFDcUIsUUFBUSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUM7R0FyQktmLEdBQUc7S0FBSEEsR0FBRztBQXVCVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBCb3gsIEhlYWRpbmcsIFRleHRhcmVhIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0ZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuLy8gaW1wb3J0IHsgUHJvdmlkZXIgYXMgV2FnbWlQcm92aWRlciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQWRkQ29tbWVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkQ29tbWVudHNcIjtcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tZW50c1wiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaWduZXIsIHNldFNpZ25lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSwgXCJhbnlcIik7XG4gICAgYXdhaXQgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIHNldFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICBzZXRTaWduZXIoc2lnbmVyKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Qm94IHA9ezh9IG1heFc9XCI2MDBweFwiIG1pblc9XCIzMjBweFwiIG09XCIwIGF1dG9cIj5cbiAgICAgICAgPENvbW1lbnRzIHNpZ25lcj17c2lnbmVyfSAvPlxuICAgICAgICA8QWRkQ29tbWVudHMgc2lnbmVyPXtzaWduZXJ9IC8+XG4gICAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFrcmFQcm92aWRlciIsIkJveCIsIkhlYWRpbmciLCJUZXh0YXJlYSIsIlRvYXN0ZXIiLCJ0b2FzdCIsInRoZW1lIiwiZXRoZXJzIiwiQWRkQ29tbWVudHMiLCJDb21tZW50cyIsIkFwcCIsInNpZ25lciIsInNldFNpZ25lciIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNlbmQiLCJnZXRTaWduZXIiLCJwIiwibWF4VyIsIm1pblciLCJtIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});