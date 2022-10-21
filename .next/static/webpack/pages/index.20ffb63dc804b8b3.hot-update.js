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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ref = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\"), Textarea = ref.Textarea, Button = ref.Button, Input = ref.Input, Heading = ref.Heading, Grid = ref.Grid;\nvar AddComments = function(param) {\n    var signer = param.signer;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), topic = ref2[0], setTopic = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref1[0], setComment = ref1[1];\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0xF05965ec71624b8Fb06E971c0D9509756b70E524\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_1__.abi, signer);\n    var handleComment = function() {\n        console.log(topic, comment);\n        contract.addComment(topic, comment);\n        setTopic(\"\");\n        setComment(\"\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                textAlign: \"center\",\n                marginTop: \"10\",\n                children: \"Add Comment\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n                margin: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                        placeholder: \"Topic\",\n                        onChange: function(e) {\n                            return setTopic(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Textarea, {\n                        placeholder: \"Add a comment\",\n                        onChange: function(e) {\n                            return setComment(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: handleComment,\n                        children: \"Button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(AddComments, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = AddComments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddComments);\nvar _c;\n$RefreshReg$(_c, \"AddComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFDNEM7QUFDM0M7OztBQUhoQyxHQUFLLENBQThDRyxHQUEyQixHQUEzQkEsbUJBQU8sQ0FBQyxxRkFBa0IsR0FBckVDLFFBQVEsR0FBbUNELEdBQTJCLENBQXRFQyxRQUFRLEVBQUVDLE1BQU0sR0FBMkJGLEdBQTJCLENBQTVERSxNQUFNLEVBQUVDLEtBQUssR0FBb0JILEdBQTJCLENBQXBERyxLQUFLLEVBQUVDLE9BQU8sR0FBV0osR0FBMkIsQ0FBN0NJLE9BQU8sRUFBRUMsSUFBSSxHQUFLTCxHQUEyQixDQUFwQ0ssSUFBSTtBQUs5QyxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLFFBQVEsQ0FBQztRQUFkQyxNQUFNLFNBQU5BLE1BQU07O0lBQzNCLEdBQUssQ0FBcUJSLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCUyxLQUFLLEdBQWNULElBQVksS0FBeEJVLFFBQVEsR0FBSVYsSUFBWTtJQUN0QyxHQUFLLENBQXlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ1csT0FBTyxHQUFnQlgsSUFBWSxLQUExQlksVUFBVSxHQUFJWixJQUFZO0lBRTFDLEdBQUssQ0FBQ2EsUUFBUSxHQUFHLEdBQUcsQ0FBQ2YsbURBQWUsQ0FDbEMsQ0FBNEMsNkNBQzVDQyxnRkFBZSxFQUNmUyxNQUFNO0lBR1IsR0FBSyxDQUFDUSxhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULEtBQUssRUFBRUUsT0FBTztRQUMxQkUsUUFBUSxDQUFDTSxVQUFVLENBQUNWLEtBQUssRUFBRUUsT0FBTztRQUNsQ0QsUUFBUSxDQUFDLENBQUU7UUFDWEUsVUFBVSxDQUFDLENBQUU7SUFDZixDQUFDO0lBRUQsTUFBTTs7d0ZBRURQLE9BQU87Z0JBQUNlLFNBQVMsRUFBRSxDQUFRO2dCQUFFQyxTQUFTLEVBQUMsQ0FBSTswQkFBQyxDQUU3Qzs7Ozs7O3dGQUNDZixJQUFJO2dCQUFDZ0IsTUFBTSxFQUFFLENBQUM7O2dHQUNabEIsS0FBSzt3QkFBQ21CLFdBQVcsRUFBQyxDQUFPO3dCQUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLZixNQUFNLENBQU5BLFFBQVEsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Z0dBQ2xFekIsUUFBUTt3QkFDUHFCLFdBQVcsRUFBQyxDQUFlO3dCQUMzQkMsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBS2IsTUFBTSxDQUFOQSxVQUFVLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7O2dHQUUzQ3hCLE1BQU07d0JBQUN5QixPQUFPLEVBQUVaLGFBQWE7a0NBQUUsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7QUFJOUMsQ0FBQztHQWhDS1QsV0FBVztLQUFYQSxXQUFXO0FBa0NqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkQ29tbWVudHMuanN4PzgxYWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBUZXh0YXJlYSwgQnV0dG9uLCBJbnB1dCwgSGVhZGluZywgR3JpZCB9ID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgQ29tbWVudHNBQkkgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvQ29tbWVudHMuc29sL0NvbW1lbnRzLmpzb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFkZENvbW1lbnRzID0gKHsgc2lnbmVyIH0pID0+IHtcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIFwiMHhGMDU5NjVlYzcxNjI0YjhGYjA2RTk3MWMwRDk1MDk3NTZiNzBFNTI0XCIsXG4gICAgQ29tbWVudHNBQkkuYWJpLFxuICAgIHNpZ25lclxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNvbW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codG9waWMsIGNvbW1lbnQpO1xuICAgIGNvbnRyYWN0LmFkZENvbW1lbnQodG9waWMsIGNvbW1lbnQpO1xuICAgIHNldFRvcGljKFwiXCIpO1xuICAgIHNldENvbW1lbnQoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRpbmcgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5Ub3A9XCIxMFwiPlxuICAgICAgICBBZGQgQ29tbWVudFxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEdyaWQgbWFyZ2luPXs0fT5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiVG9waWNcIiBvbkNoYW5nZT17KGUpID0+IHNldFRvcGljKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBjb21tZW50XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbW1lbnR9PkJ1dHRvbjwvQnV0dG9uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQ29tbWVudHM7XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiQ29tbWVudHNBQkkiLCJ1c2VTdGF0ZSIsInJlcXVpcmUiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsIklucHV0IiwiSGVhZGluZyIsIkdyaWQiLCJBZGRDb21tZW50cyIsInNpZ25lciIsInRvcGljIiwic2V0VG9waWMiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJoYW5kbGVDb21tZW50IiwiY29uc29sZSIsImxvZyIsImFkZENvbW1lbnQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddComments.jsx\n");

/***/ })

});