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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stories_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stories/Button */ \"./stories/Button.tsx\");\n/* harmony import */ var _ui_atoms_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/atoms/Title */ \"./ui/atoms/Title.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar MyPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], setCount = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_atoms_Title__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                children: \"Hello!\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastianwilliams/Development/learning-next/pages/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"This will be my website to start\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastianwilliams/Development/learning-next/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stories_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                label: \"Click me!\",\n                onClick: function() {\n                    setCount(count + 1);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/sebastianwilliams/Development/learning-next/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastianwilliams/Development/learning-next/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_s(MyPage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = MyPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyPage);\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFpQztBQUNVO0FBQ0Q7O0FBQzFDLElBQU1HLE1BQU0sR0FBRyxXQUFNOztJQUNqQixJQUEwQkgsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QkksS0FBSyxHQUFjSixHQUFXLEdBQXpCLEVBQUVLLFFBQVEsR0FBSUwsR0FBVyxHQUFmO0lBQ3RCLHFCQUNJLDhEQUFDTSxLQUFHOzswQkFDQSw4REFBQ0osa0RBQUs7MEJBQUMsUUFBTTs7Ozs7cUJBQVE7MEJBQ3JCLDhEQUFDSyxJQUFFOzBCQUFDLGtDQUFnQzs7Ozs7cUJBQUs7MEJBQ3pDLDhEQUFDTixtREFBTTtnQkFBQ08sS0FBSyxFQUFDLFdBQVc7Z0JBQ3pCQyxPQUFPLEVBQUUsV0FBSTtvQkFBQ0osUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUFDOzs7OztxQkFBVzs7Ozs7O2FBQzNDLENBQ1Q7Q0FDSjtHQVZLRCxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUFXWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3N0b3JpZXMvQnV0dG9uXCI7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uL3VpL2F0b21zL1RpdGxlJztcbmNvbnN0IE15UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaXRsZT5IZWxsbyE8L1RpdGxlPlxuICAgICAgICAgICAgPGgzPlRoaXMgd2lsbCBiZSBteSB3ZWJzaXRlIHRvIHN0YXJ0PC9oMz5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJDbGljayBtZSFcIlxuICAgICAgICAgICAgb25DbGljaz17KCk9PntzZXRDb3VudChjb3VudCArIDEpfX0+PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15UGFnZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJUaXRsZSIsIk15UGFnZSIsImNvdW50Iiwic2V0Q291bnQiLCJkaXYiLCJoMyIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./ui/atoms/Title.tsx":
/*!****************************!*\
  !*** ./ui/atoms/Title.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Title = function(param) {\n    var _text = param.text, text = _text === void 0 ? \"Hello!\" : _text;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/sebastianwilliams/Development/learning-next/ui/atoms/Title.tsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, _this);\n};\n_c = Title;\nvar _c;\n$RefreshReg$(_c, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS9hdG9tcy9UaXRsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQU8sSUFBTUEsS0FBSyxHQUFHLGdCQUFrQztzQkFBaENDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxRQUFRO0lBQ2xDLHFCQUNJLDhEQUFDQyxJQUFFO2tCQUFFRCxJQUFJOzs7OzthQUFNLENBQ2xCO0NBQ0osQ0FBQztBQUpXRCxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3VpL2F0b21zL1RpdGxlLnRzeD9jODFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUaXRsZSA9ICh7dGV4dCA9ICdIZWxsbyEnfTpUaXRsZVByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XG4gICAgKVxufTsiXSwibmFtZXMiOlsiVGl0bGUiLCJ0ZXh0IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/atoms/Title.tsx\n"));

/***/ })

});