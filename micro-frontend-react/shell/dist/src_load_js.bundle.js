"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([["src_load_js"],{

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://shell/./node_modules/react-dom/client.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var remote_Remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remote/Remote */ \"webpack/container/remote/remote/Remote\");\n/* harmony import */ var remote_Remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remote_Remote__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remote_RemoteDecoupled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remote/RemoteDecoupled */ \"webpack/container/remote/remote/RemoteDecoupled\");\n/* harmony import */ var remote_RemoteDecoupled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remote_RemoteDecoupled__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"root\"));\nconst App = ()=>{\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (ref.current) {\n            remote_RemoteDecoupled__WEBPACK_IMPORTED_MODULE_3___default()(ref.current);\n        }\n    });\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Host / Shell\"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((remote_Remote__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        ref: ref\n    }));\n};\nroot.render(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));\n\n\n//# sourceURL=webpack://shell/./src/load.js?");

/***/ })

}]);