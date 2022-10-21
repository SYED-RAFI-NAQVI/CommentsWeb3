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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_AddComments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AddComments */ \"./components/AddComments.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\n// Provider that will be used when no wallet is connected (aka no signer)\nvar provider = ethers__WEBPACK_IMPORTED_MODULE_6__.providers.getDefaultProvider(\"http://localhost:8545\");\n// Create a react-query client\nvar queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: false\n        }\n    },\n    queryCache: new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryCache({\n        onError: function() {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Network Error: Ensure MetaMask is connected to the same network that your contract is deployed to.\");\n        }\n    })\n});\nvar App = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n        autoConnect: true,\n        provider: provider,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n            theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    p: 8,\n                    maxW: \"600px\",\n                    minW: \"320px\",\n                    m: \"0 auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                            children: \"Oops, no comments yet!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddComment, {}, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                            position: \"bottom-right\"\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDNEM7QUFDRDtBQUN6QjtBQUNwQjtBQUNxQjtBQUNmO0FBRWlCOztBQUVuRCxFQUF5RTtBQUN6RSxHQUFLLENBQUNlLFFBQVEsR0FBR0YsZ0VBQTRCLENBQUMsQ0FBdUI7QUFFckUsRUFBOEI7QUFDOUIsR0FBSyxDQUFDSSxXQUFXLEdBQUcsR0FBRyxDQUFDaEIsb0RBQVcsQ0FBQyxDQUFDO0lBQ25DaUIsY0FBYyxFQUFFLENBQUM7UUFDZkMsT0FBTyxFQUFFLENBQUM7WUFDUkMsb0JBQW9CLEVBQUUsS0FBSztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUNEQyxVQUFVLEVBQUUsR0FBRyxDQUFDbEIsbURBQVUsQ0FBQyxDQUFDO1FBQzFCbUIsT0FBTyxFQUFFLFFBQ2IsR0FEbUIsQ0FBQztZQUNkYix3REFBVyxDQUNULENBQW9HO1FBRXhHLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ2UsR0FBRyxHQUFHLFFBQ1osR0FEa0IsQ0FBQztJQUNqQixNQUFNLDZFQUNIWiwyQ0FBYTtRQUFDYSxXQUFXO1FBQUNWLFFBQVEsRUFBRUEsUUFBUTs4RkFDMUNYLDREQUFjO1lBQUNNLEtBQUssRUFBRUEsOENBQUs7a0dBQ3pCUiw0REFBbUI7Z0JBQUN3QixNQUFNLEVBQUVULFdBQVc7c0dBQ3JDWixpREFBRztvQkFBQ3NCLENBQUMsRUFBRSxDQUFDO29CQUFFQyxJQUFJLEVBQUMsQ0FBTztvQkFBQ0MsSUFBSSxFQUFDLENBQU87b0JBQUNDLENBQUMsRUFBQyxDQUFROztvR0FDNUN4QixxREFBTztzQ0FBQyxDQUFzQjs7Ozs7O29HQUM5QnlCLFVBQVU7Ozs7O29HQUNWdkIsb0RBQU87NEJBQUN3QixRQUFRLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDLENBQUM7S0FkS1IsR0FBRztBQWdCVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIFF1ZXJ5Q2FjaGUgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBCb3gsIEhlYWRpbmcsIFRleHRhcmVhIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0ZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgV2FnbWlQcm92aWRlciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQWRkQ29tbWVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRkQ29tbWVudHNcIjtcblxuLy8gUHJvdmlkZXIgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBubyB3YWxsZXQgaXMgY29ubmVjdGVkIChha2Egbm8gc2lnbmVyKVxuY29uc3QgcHJvdmlkZXIgPSBwcm92aWRlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xuXG4vLyBDcmVhdGUgYSByZWFjdC1xdWVyeSBjbGllbnRcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcXVlcnlDYWNoZTogbmV3IFF1ZXJ5Q2FjaGUoe1xuICAgIG9uRXJyb3I6ICgpID0+IHtcbiAgICAgIHRvYXN0LmVycm9yKFxuICAgICAgICBcIk5ldHdvcmsgRXJyb3I6IEVuc3VyZSBNZXRhTWFzayBpcyBjb25uZWN0ZWQgdG8gdGhlIHNhbWUgbmV0d29yayB0aGF0IHlvdXIgY29udHJhY3QgaXMgZGVwbG95ZWQgdG8uXCJcbiAgICAgICk7XG4gICAgfSxcbiAgfSksXG59KTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaVByb3ZpZGVyIGF1dG9Db25uZWN0IHByb3ZpZGVyPXtwcm92aWRlcn0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgPEJveCBwPXs4fSBtYXhXPVwiNjAwcHhcIiBtaW5XPVwiMzIwcHhcIiBtPVwiMCBhdXRvXCI+XG4gICAgICAgICAgICA8SGVhZGluZz5Pb3BzLCBubyBjb21tZW50cyB5ZXQhPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEFkZENvbW1lbnQgLz5cbiAgICAgICAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJRdWVyeUNhY2hlIiwiQ2hha3JhUHJvdmlkZXIiLCJCb3giLCJIZWFkaW5nIiwiVGV4dGFyZWEiLCJUb2FzdGVyIiwidG9hc3QiLCJ0aGVtZSIsIlByb3ZpZGVyIiwiV2FnbWlQcm92aWRlciIsInByb3ZpZGVycyIsIkFkZENvbW1lbnRzIiwicHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicXVlcnlDYWNoZSIsIm9uRXJyb3IiLCJlcnJvciIsIkFwcCIsImF1dG9Db25uZWN0IiwiY2xpZW50IiwicCIsIm1heFciLCJtaW5XIiwibSIsIkFkZENvbW1lbnQiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});