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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/Comments.sol/Comments.json */ \"./artifacts/contracts/Comments.sol/Comments.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ref = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\"), Textarea = ref.Textarea, Button = ref.Button, Input = ref.Input;\nvar AddComments = function() {\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), signer1 = ref3[0], setSigner = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), provider1 = ref1[0], setProvider = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), comment = ref2[0], setComment = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_asyncToGenerator(_Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer;\n        return _Users_srn_Documents_code_commentsGoreliTest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum, \"any\");\n                    _ctx.next = 3;\n                    return provider.send(\"eth_requestAccounts\", []);\n                case 3:\n                    signer = provider.getSigner();\n                    setProvider(provider);\n                    setSigner(signer);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(\"0xFC8b31b84BcF5bFc180ec10E303AB70180d68750\", _artifacts_contracts_Comments_sol_Comments_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer1);\n    var handleComment = function() {\n        console.log(contract);\n        contract.addComment(\"polygon\", \"The POS bridge is working!\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                placeholder: \"Basic usage\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Textarea, {\n                placeholder: \"Add a comment\",\n                onChange: function(e) {\n                    return setComment(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                onClick: handleComment,\n                children: \"Button\"\n            }, void 0, false, {\n                fileName: \"/Users/srn/Documents/code/commentsGoreliTest/components/AddComments.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(AddComments, \"VydglOoKZWVgta+GZ+yoef3rlp4=\");\n_c = AddComments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddComments);\nvar _c;\n$RefreshReg$(_c, \"AddComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDeUM7QUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSDNDLEdBQUssQ0FBK0JJLEdBQTJCLEdBQTNCQSxtQkFBTyxDQUFDLHFGQUFrQixHQUF0REMsUUFBUSxHQUFvQkQsR0FBMkIsQ0FBdkRDLFFBQVEsRUFBRUMsTUFBTSxHQUFZRixHQUEyQixDQUE3Q0UsTUFBTSxFQUFFQyxLQUFLLEdBQUtILEdBQTJCLENBQXJDRyxLQUFLO0FBSy9CLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7O0lBQ3pCLEdBQUssQ0FBdUJMLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWxDTSxPQUFNLEdBQWVOLElBQWMsS0FBM0JPLFNBQVMsR0FBSVAsSUFBYztJQUMxQyxHQUFLLENBQTJCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q1EsU0FBUSxHQUFpQlIsSUFBYyxLQUE3QlMsV0FBVyxHQUFJVCxJQUFjO0lBQzlDLEdBQUssQ0FBeUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQWxDVSxPQUFPLEdBQWdCVixJQUFZLEtBQTFCVyxVQUFVLEdBQUlYLElBQVk7SUFDMUNELGdEQUFTLDJLQUFDLFFBQVEsV0FBSSxDQUFDO1lBQ2ZTLFFBQVEsRUFHUkYsTUFBTTs7OztvQkFITkUsUUFBUSxHQUFHLEdBQUcsQ0FBQ1gsaUVBQTZCLENBQUNpQixNQUFNLENBQUNDLFFBQVEsRUFBRSxDQUFLOzsyQkFFbkVQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLENBQXFCLHNCQUFFLENBQUMsQ0FBQzs7b0JBQ3ZDVixNQUFNLEdBQUdFLFFBQVEsQ0FBQ1MsU0FBUztvQkFDakNSLFdBQVcsQ0FBQ0QsUUFBUTtvQkFDcEJELFNBQVMsQ0FBQ0QsTUFBTTs7Ozs7O0lBQ2xCLENBQUMsSUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNZLFFBQVEsR0FBRyxHQUFHLENBQUNyQixtREFBZSxDQUNsQyxDQUE0Qyw2Q0FDNUNDLGdGQUFZLEVBQ1pRLE9BQU07SUFHUixHQUFLLENBQUNlLGFBQWEsR0FBRyxRQUN4QixHQUQ4QixDQUFDO1FBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtRQUNwQkEsUUFBUSxDQUFDTSxVQUFVLENBQUMsQ0FBUyxVQUFFLENBQTRCO0lBQzdELENBQUM7SUFFRCxNQUFNOzt3RkFFRHBCLEtBQUs7Z0JBQUNxQixXQUFXLEVBQUMsQ0FBYTs7Ozs7O3dGQUMvQnZCLFFBQVE7Z0JBQ1B1QixXQUFXLEVBQUMsQ0FBZTtnQkFDM0JDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7b0JBQUtoQixNQUFNLENBQU5BLFVBQVUsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7O3dGQUUzQzFCLE1BQU07Z0JBQUMyQixPQUFPLEVBQUVULGFBQWE7MEJBQUUsQ0FBTTs7Ozs7Ozs7QUFHNUMsQ0FBQztHQWxDS2hCLFdBQVc7S0FBWEEsV0FBVztBQW9DakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZENvbW1lbnRzLmpzeD84MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgVGV4dGFyZWEsIEJ1dHRvbiwgSW5wdXQgfSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0NvbW1lbnRzLnNvbC9Db21tZW50cy5qc29uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFkZENvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBbc2lnbmVyLCBzZXRTaWduZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSwgXCJhbnlcIik7XG4gICAgLy8gUHJvbXB0IHVzZXIgZm9yIGFjY291bnQgY29ubmVjdGlvbnNcbiAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuICAgIHNldFNpZ25lcihzaWduZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIFwiMHhGQzhiMzFiODRCY0Y1YkZjMTgwZWMxMEUzMDNBQjcwMTgwZDY4NzUwXCIsXG4gICAgQ29tbWVudHMuYWJpLFxuICAgIHNpZ25lclxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNvbW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29udHJhY3QpO1xuICAgIGNvbnRyYWN0LmFkZENvbW1lbnQoXCJwb2x5Z29uXCIsIFwiVGhlIFBPUyBicmlkZ2UgaXMgd29ya2luZyFcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiAvPlxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgY29tbWVudFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb21tZW50fT5CdXR0b248L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbImV0aGVycyIsIkNvbW1lbnRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZXF1aXJlIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJJbnB1dCIsIkFkZENvbW1lbnRzIiwic2lnbmVyIiwic2V0U2lnbmVyIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzZW5kIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsImhhbmRsZUNvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ29tbWVudCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddComments.jsx\n");

/***/ })

});