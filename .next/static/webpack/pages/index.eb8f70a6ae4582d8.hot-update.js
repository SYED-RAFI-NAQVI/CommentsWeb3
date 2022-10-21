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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ref = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\"), Textarea = ref.Textarea, Button = ref.Button, Input = ref.Input;\nvar AddComments = function() {\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), topic = ref2[0], setTopic = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref1[0], setComment = ref1[1];\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0xFC8b31b84BcF5bFc180ec10E303AB70180d68750\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_1__.abi, signer);\n    var handleComment = function() {\n        console.log(topic, comment);\n        contract.addComment(topic, comment);\n        setTopic(\"\");\n        setComment(\"\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                placeholder: \"Topic\",\n                onChange: function(e) {\n                    return setTopic(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Textarea, {\n                placeholder: \"Add a comment\",\n                onChange: function(e) {\n                    return setComment(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: handleComment,\n                children: \"Button\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(AddComments, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = AddComments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddComments);\nvar _c;\n$RefreshReg$(_c, \"AddComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFDeUM7QUFDN0I7OztBQUgzQyxHQUFLLENBQStCSSxHQUEyQixHQUEzQkEsbUJBQU8sQ0FBQyxxRkFBa0IsR0FBdERDLFFBQVEsR0FBb0JELEdBQTJCLENBQXZEQyxRQUFRLEVBQUVDLE1BQU0sR0FBWUYsR0FBMkIsQ0FBN0NFLE1BQU0sRUFBRUMsS0FBSyxHQUFLSCxHQUEyQixDQUFyQ0csS0FBSztBQUsvQixHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUNwQixHQUQwQixDQUFDOztJQUN6QixHQUFLLENBQXFCTCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5Qk0sS0FBSyxHQUFjTixJQUFZLEtBQXhCTyxRQUFRLEdBQUlQLElBQVk7SUFDdEMsR0FBSyxDQUF5QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBbENRLE9BQU8sR0FBZ0JSLElBQVksS0FBMUJTLFVBQVUsR0FBSVQsSUFBWTtJQUUxQyxHQUFLLENBQUNVLFFBQVEsR0FBRyxHQUFHLENBQUNiLG1EQUFlLENBQ2xDLENBQTRDLDZDQUM1Q0MsZ0ZBQVksRUFDWmUsTUFBTTtJQUdSLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQ3hCLEdBRDhCLENBQUM7UUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixLQUFLLEVBQUVFLE9BQU87UUFDMUJFLFFBQVEsQ0FBQ08sVUFBVSxDQUFDWCxLQUFLLEVBQUVFLE9BQU87UUFDbENELFFBQVEsQ0FBQyxDQUFFO1FBQ1hFLFVBQVUsQ0FBQyxDQUFFO0lBQ2YsQ0FBQztJQUVELE1BQU07O3dGQUVETCxLQUFLO2dCQUFDYyxXQUFXLEVBQUMsQ0FBTztnQkFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztvQkFBS2IsTUFBTSxDQUFOQSxRQUFRLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7O3dGQUNsRXBCLFFBQVE7Z0JBQ1BnQixXQUFXLEVBQUMsQ0FBZTtnQkFDM0JDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7b0JBQUtYLE1BQU0sQ0FBTkEsVUFBVSxDQUFDVyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozt3RkFFM0NuQixNQUFNO2dCQUFDb0IsT0FBTyxFQUFFVCxhQUFhOzBCQUFFLENBQU07Ozs7Ozs7O0FBRzVDLENBQUM7R0EzQktULFdBQVc7S0FBWEEsV0FBVztBQTZCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeD84MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgVGV4dGFyZWEsIEJ1dHRvbiwgSW5wdXQgfSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0NvbW1lbnRzLnNvbC9Db21tZW50cy5qc29uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFkZENvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBbdG9waWMsIHNldFRvcGljXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgXCIweEZDOGIzMWI4NEJjRjViRmMxODBlYzEwRTMwM0FCNzAxODBkNjg3NTBcIixcbiAgICBDb21tZW50cy5hYmksXG4gICAgc2lnbmVyXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ29tbWVudCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b3BpYywgY29tbWVudCk7XG4gICAgY29udHJhY3QuYWRkQ29tbWVudCh0b3BpYywgY29tbWVudCk7XG4gICAgc2V0VG9waWMoXCJcIik7XG4gICAgc2V0Q29tbWVudChcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJUb3BpY1wiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9waWMoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgY29tbWVudFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb21tZW50fT5CdXR0b248L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbImV0aGVycyIsIkNvbW1lbnRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZXF1aXJlIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJJbnB1dCIsIkFkZENvbW1lbnRzIiwidG9waWMiLCJzZXRUb3BpYyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsInNpZ25lciIsImhhbmRsZUNvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ29tbWVudCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddComments.jsx\n");

/***/ })

});