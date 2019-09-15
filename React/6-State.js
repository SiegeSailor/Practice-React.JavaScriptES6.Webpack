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
/******/ 	return __webpack_require__(__webpack_require__.s = "./6-State.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./6-State.jsx":
/*!*********************!*\
  !*** ./6-State.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Helmet =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Helmet, _React$Component);\n\n  function Helmet(props) {\n    var _this;\n\n    _classCallCheck(this, Helmet);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Helmet).call(this, props)); // ## constructor 的部分見下方 input 範例\n    // React props 的特點，props 只能由外面 ( 如 ReactDOm.render 的地方 ) 寫入值，不能在內部指定或改變\n\n    props.value = \"props value\"; // 要從內部指定，就使用 constructor 的方法\n\n    _this.value = \"this value\"; // 若要設定能改變值的 value，必須使用 state。在 constructor 建構時可以先設定第一次\n\n    _this.state = {\n      value: \"state value\"\n    };\n    return _this;\n  }\n\n  _createClass(Helmet, [{\n    key: \"inputHandler\",\n    value: function inputHandler(event) {\n      // ## 見下方有 onChange 的 input\n      // 嘗試使用 onChange 指定 function 改變值。當用 console.log 印出後，會發現的確有執行，值也的確有改變\n      // 不能成功的原因是因為 React 是用 state 來管控會改變的值\n      console.log(\"inputHandler\");\n      this.value = \"inputHandler value\";\n      console.log(this.value); // 透過 onChange 指定 function 來改變 state 的值\n      // this.state.value = `inputHandler state value`\n      // 雖然上面的方法理論正確，然而無法作用，因為這邊的 this 並不一樣，於是，我們在 input 內的 onChange\n      // 的 function 加上 .bind(this)。(見下方)\n      // 然而，還是無法作用，這是因為 React 要求，除了 constructor 內外，都必須使用 setState() 來改變 state 的值\n      // 再見下方的 input\n\n      this.setState({\n        value: \"inputHandler setState value\"\n      }); // 接著，可以使用以下方法指定到使用者輸入的值，讓 input 正常化\n\n      this.setState({\n        value: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"p\", null, \"I am here.\", React.createElement(\"br\", null), \"You are there.\", React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"number\",\n        defaultValue: \"2\",\n        placeholder: \"Please enter 2\"\n      }), React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"text\",\n        value: this.props.value\n      }), React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"text\",\n        value: this.value\n      }), React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"text\",\n        value: this.value,\n        onChange: this.inputHandler\n      }), React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"text\",\n        value: this.value,\n        onChange: this.inputHandler.bind(this)\n      }), React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"text\",\n        value: this.state.value,\n        onChange: this.inputHandler.bind(this)\n      }));\n    }\n  }]);\n\n  return Helmet;\n}(React.Component);\n\nReactDOM.render(React.createElement(Helmet, {\n  value: \"render value\"\n}), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./6-State.jsx?");

/***/ })

/******/ });