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
/******/ 	return __webpack_require__(__webpack_require__.s = "./App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.json */ \"./user.json\");\nvar _user_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./user.json */ \"./user.json\", 1);\n/* harmony import */ var _UserEditor_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEditor.jsx */ \"./UserEditor.jsx\");\n/* harmony import */ var _UserVideos_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserVideos.jsx */ \"./UserVideos.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handler\", function (name, value) {\n      _this.setState(_defineProperty({}, name, value), function () {\n        console.log(_this.state);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"render\", function () {\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"TW\"), React.createElement(_UserEditor_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        user: _this.state.user,\n        handler: _this.handler\n      }), React.createElement(_UserVideos_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _this.state.user.videos));\n    });\n\n    _this.state = {\n      user: _user_json__WEBPACK_IMPORTED_MODULE_0__\n    };\n    return _this;\n  }\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./App.jsx?");

/***/ }),

/***/ "./UserEditor.jsx":
/*!************************!*\
  !*** ./UserEditor.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// 注意傳入的方式，這裏不用 key 傳入、變為可以直接解構的方式\n// 因應 hanler 需求已取消，留下註解\n// function UserEditor({ id, description, email, name, handler })\nvar UserEditor = function UserEditor(_ref) {\n  var user = _ref.user,\n      handler = _ref.handler;\n  var id = user.id,\n      description = user.description,\n      email = user.email,\n      name = user.name;\n\n  var textareaHandler = function textareaHandler(event) {\n    var _event$target = event.target,\n        name = _event$target.name,\n        value = _event$target.value;\n    handler(\"user\", _objectSpread({}, user, _defineProperty({}, name, value)));\n  };\n\n  return React.createElement(\"div\", null, React.createElement(\"h4\", null, \"UserEditor\"), React.createElement(\"p\", null, id), React.createElement(\"p\", null, name), React.createElement(\"p\", null, email), React.createElement(\"textarea\", {\n    value: description,\n    onChange: textareaHandler,\n    name: \"description\",\n    id: \"\",\n    cols: \"30\",\n    rows: \"10\"\n  }), React.createElement(\"p\", null, description));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserEditor);\n\n//# sourceURL=webpack:///./UserEditor.jsx?");

/***/ }),

/***/ "./UserVideos.jsx":
/*!************************!*\
  !*** ./UserVideos.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 上一層直接傳 videos，這裏直接解構出 videos 下的 key\n// 也可以用 function 建構 stateless component\nfunction UserVideos(_ref) {\n  var likes = _ref.likes;\n  return React.createElement(\"div\", null, React.createElement(\"h4\", null, \"UserVideos\"), likes.map(function (videoUrl) {\n    // 注意這裡的 src 不用\"\"將 URL 包住，因為這不是真的 iframe，\n    // 而是 jsx 內的 iframe\n    return React.createElement(\"iframe\", {\n      src: videoUrl,\n      key: videoUrl\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserVideos);\n\n//# sourceURL=webpack:///./UserVideos.jsx?");

/***/ }),

/***/ "./user.json":
/*!*******************!*\
  !*** ./user.json ***!
  \*******************/
/*! exports provided: id, name, email, description, videos, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"id\\\":1,\\\"name\\\":\\\"Progressbar\\\",\\\"email\\\":\\\"demo.progressbartw@gmail.com\\\",\\\"description\\\":\\\"一些敘述 一些敘述 一些敘述, 一些敘述\\\",\\\"videos\\\":{\\\"likes\\\":[\\\"https://www.youtube.com/embed/-TDjWe5xZ0w\\\",\\\"https://www.youtube.com/embed/XN031PuViqI\\\",\\\"https://www.youtube.com/embed/IVWkKn_8GiQ\\\",\\\"https://www.youtube.com/embed/tI5uhkZAxec\\\",\\\"https://www.youtube.com/embed/Enw2PhRe3Bg\\\",\\\"https://www.youtube.com/embed/HJwt0fnadUg\\\"]}}\");\n\n//# sourceURL=webpack:///./user.json?");

/***/ })

/******/ });