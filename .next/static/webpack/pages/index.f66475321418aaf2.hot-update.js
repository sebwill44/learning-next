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

/***/ "./ui/atoms/TextInput.tsx":
/*!********************************!*\
  !*** ./ui/atoms/TextInput.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextInput\": function() { return /* binding */ TextInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar TextInput = function(param) {\n    var _placeholder = param.placeholder, placeholder = _placeholder === void 0 ? \"Enter text\" : _placeholder, _borderRaidus = param.borderRaidus, borderRaidus = _borderRaidus === void 0 ? 24 : _borderRaidus;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref[0], setInput = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: input,\n                onChange: function(event) {\n                    setInput(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/sebastianwilliams/Development/learning-next/ui/atoms/TextInput.tsx\",\n                lineNumber: 9,\n                columnNumber: 1\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: input\n            }, void 0, false, {\n                fileName: \"/Users/sebastianwilliams/Development/learning-next/ui/atoms/TextInput.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastianwilliams/Development/learning-next/ui/atoms/TextInput.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_s(TextInput, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = TextInput;\nvar _c;\n$RefreshReg$(_c, \"TextInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hdG9tcy9UZXh0SW5wdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ2lDOztBQUUxQixJQUFNQyxTQUFTLEdBQUcsZ0JBQ3lDOzZCQUE3REMsV0FBVyxFQUFYQSxXQUFXLDZCQUFDLFlBQVksdUNBQUNDLFlBQVksRUFBWkEsWUFBWSw4QkFBQyxFQUFFOztJQUN6QyxJQUEwQkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQkksS0FBSyxHQUFjSixHQUFZLEdBQTFCLEVBQUVLLFFBQVEsR0FBSUwsR0FBWSxHQUFoQjtJQUN0QixxQkFDSSw4REFBQ00sS0FBRzs7MEJBQ1osOERBQUNGLE9BQUs7Z0JBQUNHLElBQUksRUFBQyxNQUFNO2dCQUFDQyxLQUFLLEVBQUVKLEtBQUs7Z0JBQUVLLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUc7b0JBQUNMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztpQkFBQzs7Ozs7cUJBQUc7MEJBQzdFLDhEQUFDSSxHQUFDOzBCQUFFUixLQUFLOzs7OztxQkFBSzs7Ozs7O2FBQ1IsQ0FDVDtDQUNKO0dBVFlILFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91aS9hdG9tcy9UZXh0SW5wdXQudHN4PzA1NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dElucHV0UHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvVGV4dElucHV0UHJvcHNcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQgPSAoXG4gICAge3BsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Jyxib3JkZXJSYWlkdXM9MjR9OlRleHRJbnB1dFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXsoZXZlbnQpPT57c2V0SW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgPHA+e2lucHV0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRleHRJbnB1dCIsInBsYWNlaG9sZGVyIiwiYm9yZGVyUmFpZHVzIiwiaW5wdXQiLCJzZXRJbnB1dCIsImRpdiIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/atoms/TextInput.tsx\n"));

/***/ })

});