/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ES6/13-WebPackBabel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ES6/13-WebPackBabel.js":
/*!********************************!*\
  !*** ./ES6/13-WebPackBabel.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _13_WebPackBabelLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./13-WebPackBabelLibrary */ \"./ES6/13-WebPackBabelLibrary.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar BabelNeedsWebpack = function BabelNeedsWebpack() {\n  _classCallCheck(this, BabelNeedsWebpack);\n\n  _defineProperty(this, \"echoSummonsFromEcho\", function () {\n    Object(_13_WebPackBabelLibrary__WEBPACK_IMPORTED_MODULE_0__[\"echo\"])(\"Pi is \".concat(_13_WebPackBabelLibrary__WEBPACK_IMPORTED_MODULE_0__[\"pi\"], \".\"));\n  });\n\n  console.log(\"\\u5373\\u4F7F\\u7D93\\u904E Babel \\u7DE8\\u8B6F\\uFF0Cclass \\u4ECD\\u7136\\u4E0D\\u80FD\\u76F4\\u63A5\\u5728 module \\u4E2D\\u76F4\\u63A5\\u5BA3\\u544A\\u4F7F\\u7528\\u3002\\u9700\\u8981 Webpack\\u3002\");\n}; // 經 WebPack Babel 編譯後，先嘗試以不正確的 window 指定方式調配 class\n\n\nwindow.BabelNeedsWebpack = BabelNeedsWebpack; // 再來，這是正確的使用方法\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var babelNeedsWebpack = new BabelNeedsWebpack();\n  babelNeedsWebpack.echoSummonsFromEcho();\n});\n\n//# sourceURL=webpack:///./ES6/13-WebPackBabel.js?");

/***/ }),

/***/ "./ES6/13-WebPackBabelInstanceEcho.js":
/*!********************************************!*\
  !*** ./ES6/13-WebPackBabelInstanceEcho.js ***!
  \********************************************/
/*! exports provided: echo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"echo\", function() { return echo; });\nvar echo = function echo(string) {\n  console.log(\"\\u4F86\\u81EA 13-WebPackBabelInstanceEcho\");\n  console.log(string);\n};\n\n//# sourceURL=webpack:///./ES6/13-WebPackBabelInstanceEcho.js?");

/***/ }),

/***/ "./ES6/13-WebPackBabelInstanceMath.js":
/*!********************************************!*\
  !*** ./ES6/13-WebPackBabelInstanceMath.js ***!
  \********************************************/
/*! exports provided: sum, pi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pi\", function() { return pi; });\nvar sum = function sum(x, y) {\n  return x + y;\n};\nvar pi = 3.14;\n\n//# sourceURL=webpack:///./ES6/13-WebPackBabelInstanceMath.js?");

/***/ }),

/***/ "./ES6/13-WebPackBabelLibrary.js":
/*!***************************************!*\
  !*** ./ES6/13-WebPackBabelLibrary.js ***!
  \***************************************/
/*! exports provided: default, sum, pi, echo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _13_WebPackBabelInstanceMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./13-WebPackBabelInstanceMath */ \"./ES6/13-WebPackBabelInstanceMath.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return _13_WebPackBabelInstanceMath__WEBPACK_IMPORTED_MODULE_0__[\"sum\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pi\", function() { return _13_WebPackBabelInstanceMath__WEBPACK_IMPORTED_MODULE_0__[\"pi\"]; });\n\n/* harmony import */ var _13_WebPackBabelInstanceEcho__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./13-WebPackBabelInstanceEcho */ \"./ES6/13-WebPackBabelInstanceEcho.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"echo\", function() { return _13_WebPackBabelInstanceEcho__WEBPACK_IMPORTED_MODULE_1__[\"echo\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (x) {\n  return x + x;\n});\n\n//# sourceURL=webpack:///./ES6/13-WebPackBabelLibrary.js?");

/***/ })

/******/ });