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
/******/ 	return __webpack_require__(__webpack_require__.s = "./7-PropsAndState.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./7-PropsAndState.jsx":
/*!*****************************!*\
  !*** ./7-PropsAndState.jsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _7_PropsAndStateResult_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./7-PropsAndStateResult.jsx */ \"./7-PropsAndStateResult.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Counter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Counter, _React$Component);\n\n  function Counter(props) {\n    var _this;\n\n    _classCallCheck(this, Counter);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));\n    _this.state = {\n      count: 0\n    };\n    return _this;\n  }\n\n  _createClass(Counter, [{\n    key: \"countPlusOneHandler\",\n    value: function countPlusOneHandler(event) {\n      console.log(event); // React 中 button 的 event.target 會在第二次後變成 null，為了避免這種情況，應使用 persist()\n\n      event.persist(); // let count = this.state.count;\n      // count = count + 1;\n\n      console.log(\"Counter\", this.state.count);\n      var count = this.state.count;\n      this.setState({\n        count: count + 1\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(_7_PropsAndStateResult_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _extends({}, this.state, {\n        count: this.state.count,\n        handler: this.countPlusOneHandler.bind(this)\n      })), React.createElement(\"button\", {\n        type: \"button\",\n        onClick: this.countPlusOneHandler.bind(this)\n      }, \"Click Me 1\"), React.createElement(\"button\", {\n        type: \"button\",\n        onClick: this.countPlusOneHandler.bind(this)\n      }, \"Click Me 2\"));\n    }\n  }]);\n\n  return Counter;\n}(React.Component);\n\nReactDOM.render(React.createElement(Counter, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./7-PropsAndState.jsx?");

/***/ }),

/***/ "./7-PropsAndStateResult.jsx":
/*!***********************************!*\
  !*** ./7-PropsAndStateResult.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Result =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Result, _React$Component);\n\n  // constructor(props) {\n  //     super(props)\n  //     this.state = {\n  //         count: props.count\n  //     }\n  // }\n  // countPlusOneHandler(event) {\n  //     console.log(event)\n  //     console.log(`Result`, this.state.count)\n  //     let { count } = this.state\n  //     this.setState({ count: count + 1 })\n  // }\n  // ## 註解了原本的 constructor 與 function，\n  // 這裡的概念是，因為外一層 7-PropsAndState 有用 state 控制的值，而這一層也有，\n  // 這樣容易造成兩邊 state 的值不同、難以管理\n  // 最好的方法，就是外一層用 state 管理自己、並用 state 傳進下一層 7-PropsAndStateResult\n  // 而這個下一層就用 props 來接收數值\n  function Result(props) {\n    _classCallCheck(this, Result);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Result).call(this, props)); // ## 注意以下寫法是不可行的，因為 construtor 只會執行一次，這樣子值是不會更新的\n    // 當然，如果在只執行一次的需求，那這樣是可行的\n    // const {count, handler} = props;\n    // this.count = count;\n    // this.handler = handler;\n  }\n\n  _createClass(Result, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          count = _this$props.count,\n          handler = _this$props.handler;\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"Count: \", count), React.createElement(\"button\", {\n        type: \"button\",\n        onClick: handler\n      }, \"Click Me 0\"));\n    }\n  }]);\n\n  return Result;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Result);\n\n//# sourceURL=webpack:///./7-PropsAndStateResult.jsx?");

/***/ })

/******/ });