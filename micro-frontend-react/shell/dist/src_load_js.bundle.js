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

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n/* harmony import */ var remote_Hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remote/Hello */ \"webpack/container/remote/remote/Hello\");\n/* harmony import */ var remote_Hello__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remote_Hello__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nsetTimeout(() => {\n  const body = document.querySelector(\"body\");\n\n\n\n  body.appendChild((remote_Hello__WEBPACK_IMPORTED_MODULE_1___default()));\n}, 3000);\n\n  const name = _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.person.fullName();\nconst body = document.querySelector(\"body\");\nconst h1 = document.createElement(\"h1\");\nh1.innerText = \"Hello From Shell!\" + name;\n\nbody.appendChild(h1);\n\n//# sourceURL=webpack://shell/./src/load.js?");

/***/ })

}]);