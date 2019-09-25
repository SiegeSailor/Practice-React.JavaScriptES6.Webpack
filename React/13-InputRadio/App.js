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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handler\", function (event) {\n      var _event$target = event.target,\n          name = _event$target.name,\n          value = _event$target.value,\n          type = _event$target.type; // 注意 checkbox 的 checked，當使用 checked 時值的運作是對的，但無論怎麼點擊都會是原本的狀態，因此無法互動，\n      // 而當使用 defaultChecked 時，盡管可以正常操作，送出的值卻無論如何都是固定的 ( 會是使 checked = true 的值的條件，在這是\n      // this.state.checkboxValue == 1，因此永遠值是 1 )\n      // 最好的辦法，是使用 defaultChecked，並利用 type 做額外判斷處理\n\n      if (type == \"checkbox\" && _this.state[name] == value) {\n        // 當值相等，即當 checkValue 等於 html 的 value，1 時，則將值設為 null，因為那代表是原先已是打勾的狀態\n        value = (_readOnlyError(\"value\"), null);\n      }\n\n      _this.setState(_defineProperty({}, name, value), function () {\n        console.log(name);\n        console.log(value); // 注意 radio 中 checked 的 attribute，在 react 中的 checked 與 html 的 checked 其實是不同的，\n        // 若要兩值運作方式相等，那麼在 react 中應使用 defaultChecked\n\n        var radios = document.querySelectorAll(\"input\");\n        console.log(radios[1].getAttribute(\"checked\"));\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"render\", function () {\n      return React.createElement(\"form\", {\n        action: \"\"\n      }, React.createElement(\"label\", {\n        htmlFor: \"\"\n      }, React.createElement(\"input\", {\n        name: \"checkboxValue\",\n        type: \"checkbox\",\n        value: \"1\",\n        onChange: _this.handler,\n        defaultChecked: _this.state.checkboxValue == 1\n      }), \"Checkbox Value 1\"), React.createElement(\"label\", {\n        htmlFor: \"\"\n      }, React.createElement(\"input\", {\n        name: \"test\",\n        type: \"radio\",\n        value: \"1\",\n        defaultChecked: _this.state.test == 1,\n        onChange: _this.handler\n      }), \"\\u6E2C\\u8A66 1\"), React.createElement(\"label\", {\n        htmlFor: \"\"\n      }, React.createElement(\"input\", {\n        name: \"test\",\n        type: \"radio\",\n        value: \"2\",\n        defaultChecked: _this.state.test == 2,\n        onChange: _this.handler\n      }), \"\\u6E2C\\u8A66 2\"), React.createElement(\"label\", {\n        htmlFor: \"\"\n      }, React.createElement(\"input\", {\n        name: \"test\",\n        type: \"radio\",\n        value: \"3\",\n        defaultChecked: _this.state.test == 3,\n        onChange: _this.handler\n      }), \"\\u6E2C\\u8A66 3\"), React.createElement(\"button\", {\n        type: \"submit\"\n      }, \"\\u63D0\\u4EA4\"));\n    });\n\n    _this.state = {\n      test: 1,\n      checkboxValue: 1\n    };\n    return _this;\n  }\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./App.jsx?");

/***/ })

/******/ });