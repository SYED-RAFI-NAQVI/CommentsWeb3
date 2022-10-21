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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// Provider that will be used when no wallet is connected (aka no signer)\nvar provider = ethers__WEBPACK_IMPORTED_MODULE_6__.providers.getDefaultProvider(\"http://localhost:8545\");\n// Create a react-query client\nvar queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: false\n        }\n    },\n    queryCache: new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryCache({\n        onError: function() {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Network Error: Ensure MetaMask is connected to the same network that your contract is deployed to.\");\n        }\n    })\n});\nvar App = function() {\n    _s();\n    var ref = _slicedToArray(wagmi.useSigner(), 1), signer = ref[0];\n    var provider1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useProvider)();\n    var contract = wagmi.useContract({\n        addressOrName: \"0xFC8b31b84BcF5bFc180ec10E303AB70180d68750\",\n        contractInterface: _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_5__.abi,\n        signerOrProvider: signer.data || provider1\n    });\n    var handleComment = function() {\n        contract;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n        autoConnect: true,\n        provider: provider1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n            theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    p: 8,\n                    maxW: \"600px\",\n                    minW: \"320px\",\n                    m: \"0 auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                            children: \"Oops, no comments yet!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n                            placeholder: \"Add a comment\"\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            onClick: handleComment,\n                            children: \"Button\"\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                            position: \"bottom-right\"\n                        }, void 0, false, {\n                            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/pages/index.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(App, \"TivzPrBpXU2mvamKDRx3GypJ3X0=\", true, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useProvider\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDNEM7QUFDRDtBQUN6QjtBQUNwQjtBQUNxQjtBQUNmO0FBQ087QUFFSztBQUNrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixFQUF5RTtBQUN6RSxHQUFLLENBQUNrQixRQUFRLEdBQUdMLGdFQUE0QixDQUFDLENBQXVCO0FBRXJFLEVBQThCO0FBQzlCLEdBQUssQ0FBQ08sV0FBVyxHQUFHLEdBQUcsQ0FBQ25CLG9EQUFXLENBQUMsQ0FBQztJQUNuQ29CLGNBQWMsRUFBRSxDQUFDO1FBQ2ZDLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLG9CQUFvQixFQUFFLEtBQUs7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFDREMsVUFBVSxFQUFFLEdBQUcsQ0FBQ3JCLG1EQUFVLENBQUMsQ0FBQztRQUMxQnNCLE9BQU8sRUFBRSxRQUNiLEdBRG1CLENBQUM7WUFDZGhCLHdEQUFXLENBQ1QsQ0FBb0c7UUFFeEcsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDa0IsR0FBRyxHQUFHLFFBQ1osR0FEa0IsQ0FBQzs7SUFDakIsR0FBSyxDQUFZQyxHQUFpQixrQkFBakJBLEtBQUssQ0FBQ1osU0FBUyxRQUF6QmEsTUFBTSxHQUFJRCxHQUFpQjtJQUNsQyxHQUFLLENBQUNWLFNBQVEsR0FBR0gsa0RBQVc7SUFFNUIsR0FBSyxDQUFDZSxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxDQUFDLENBQUM7UUFDbENDLGFBQWEsRUFBRSxDQUE0QztRQUMzREMsaUJBQWlCLEVBQUVoQixnRkFBb0I7UUFDdkNrQixnQkFBZ0IsRUFBRU4sTUFBTSxDQUFDTyxJQUFJLElBQUlsQixTQUFRO0lBQzNDLENBQUM7SUFFRCxHQUFLLENBQUNtQixhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQlAsUUFBUTtJQUNWLENBQUM7SUFFRCxNQUFNLDZFQUNIbEIsMkNBQWE7UUFBQzBCLFdBQVc7UUFBQ3BCLFFBQVEsRUFBRUEsU0FBUTs4RkFDMUNkLDREQUFjO1lBQUNNLEtBQUssRUFBRUEsOENBQUs7a0dBQ3pCUiw0REFBbUI7Z0JBQUNxQyxNQUFNLEVBQUVuQixXQUFXO3NHQUNyQ2YsaURBQUc7b0JBQUNtQyxDQUFDLEVBQUUsQ0FBQztvQkFBRUMsSUFBSSxFQUFDLENBQU87b0JBQUNDLElBQUksRUFBQyxDQUFPO29CQUFDQyxDQUFDLEVBQUMsQ0FBUTs7b0dBQzVDckMscURBQU87c0NBQUMsQ0FBc0I7Ozs7OztvR0FDOUJDLHNEQUFROzRCQUFDcUMsV0FBVyxFQUFDLENBQWU7Ozs7OztvR0FDcEM5QixvREFBTTs0QkFBQytCLE9BQU8sRUFBRVIsYUFBYTtzQ0FBRSxDQUFNOzs7Ozs7b0dBQ3JDN0Isb0RBQU87NEJBQUNzQyxRQUFRLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDLENBQUM7R0E1QktuQixHQUFHOztRQUVVWiw4Q0FBVzs7O0tBRnhCWSxHQUFHO0FBOEJULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgUXVlcnlDYWNoZSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIEJveCwgSGVhZGluZywgVGV4dGFyZWEgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBXYWdtaVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VQcm92aWRlciwgdXNlU2lnbmVyIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgQ29tbWVudHNDb250cmFjdCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Db21tZW50cy5zb2wvQ29tbWVudHMuanNvblwiO1xuXG4vLyBQcm92aWRlciB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIG5vIHdhbGxldCBpcyBjb25uZWN0ZWQgKGFrYSBubyBzaWduZXIpXG5jb25zdCBwcm92aWRlciA9IHByb3ZpZGVycy5nZXREZWZhdWx0UHJvdmlkZXIoXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XG5cbi8vIENyZWF0ZSBhIHJlYWN0LXF1ZXJ5IGNsaWVudFxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICBkZWZhdWx0T3B0aW9uczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBxdWVyeUNhY2hlOiBuZXcgUXVlcnlDYWNoZSh7XG4gICAgb25FcnJvcjogKCkgPT4ge1xuICAgICAgdG9hc3QuZXJyb3IoXG4gICAgICAgIFwiTmV0d29yayBFcnJvcjogRW5zdXJlIE1ldGFNYXNrIGlzIGNvbm5lY3RlZCB0byB0aGUgc2FtZSBuZXR3b3JrIHRoYXQgeW91ciBjb250cmFjdCBpcyBkZXBsb3llZCB0by5cIlxuICAgICAgKTtcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaWduZXJdID0gd2FnbWkudXNlU2lnbmVyKCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcblxuICBjb25zdCBjb250cmFjdCA9IHdhZ21pLnVzZUNvbnRyYWN0KHtcbiAgICBhZGRyZXNzT3JOYW1lOiBcIjB4RkM4YjMxYjg0QmNGNWJGYzE4MGVjMTBFMzAzQUI3MDE4MGQ2ODc1MFwiLFxuICAgIGNvbnRyYWN0SW50ZXJmYWNlOiBDb21tZW50c0NvbnRyYWN0LmFiaSxcbiAgICBzaWduZXJPclByb3ZpZGVyOiBzaWduZXIuZGF0YSB8fCBwcm92aWRlcixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ29tbWVudCA9ICgpID0+IHtcbiAgICBjb250cmFjdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXYWdtaVByb3ZpZGVyIGF1dG9Db25uZWN0IHByb3ZpZGVyPXtwcm92aWRlcn0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgPEJveCBwPXs4fSBtYXhXPVwiNjAwcHhcIiBtaW5XPVwiMzIwcHhcIiBtPVwiMCBhdXRvXCI+XG4gICAgICAgICAgICA8SGVhZGluZz5Pb3BzLCBubyBjb21tZW50cyB5ZXQhPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwiQWRkIGEgY29tbWVudFwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbW1lbnR9PkJ1dHRvbjwvQnV0dG9uPlxuICAgICAgICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvV2FnbWlQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlF1ZXJ5Q2FjaGUiLCJDaGFrcmFQcm92aWRlciIsIkJveCIsIkhlYWRpbmciLCJUZXh0YXJlYSIsIlRvYXN0ZXIiLCJ0b2FzdCIsInRoZW1lIiwiUHJvdmlkZXIiLCJXYWdtaVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiQnV0dG9uIiwidXNlUHJvdmlkZXIiLCJ1c2VTaWduZXIiLCJDb21tZW50c0NvbnRyYWN0IiwicHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicXVlcnlDYWNoZSIsIm9uRXJyb3IiLCJlcnJvciIsIkFwcCIsIndhZ21pIiwic2lnbmVyIiwiY29udHJhY3QiLCJ1c2VDb250cmFjdCIsImFkZHJlc3NPck5hbWUiLCJjb250cmFjdEludGVyZmFjZSIsImFiaSIsInNpZ25lck9yUHJvdmlkZXIiLCJkYXRhIiwiaGFuZGxlQ29tbWVudCIsImF1dG9Db25uZWN0IiwiY2xpZW50IiwicCIsIm1heFciLCJtaW5XIiwibSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});