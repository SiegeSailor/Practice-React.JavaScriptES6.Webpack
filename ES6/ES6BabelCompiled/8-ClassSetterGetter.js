"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ## 以 class 取代 ES5 的 prototype
// # ES5 的 prototype
var prototypeES5 = function prototypeES5(variableOne, variableTwo) {
  this.one = variableOne;
  this.two = variableTwo;

  this.log = function () {
    console.log("log variableOne", this.one);
    console.log("log variableTwo", this.two);
  };

  this.log();
};

prototypeES5.prototype.console = function (variableOne, variableTwo) {
  console.log("console variableOne", variableOne);
  console.log("console variableTwo", variableTwo);
}; // 注意，在 new 時 prototype 內的 function 就會執行一次


var firstPrototypeES5 = new prototypeES5(1, 2);
var secondPrototypeES5 = new prototypeES5(1, 2);
console.log(prototypeES5); // 直接呼叫時是一個 function

console.log(prototypeES5(1, 2)); // 帶入值時是 undefined

console.log(firstPrototypeES5 === secondPrototypeES5); // false，因為兩者是由 new 出來的，雖然 prototype 是一樣的但是不同的 instance

console.log(firstPrototypeES5.console() === secondPrototypeES5.console()); // true，因為在 prototype 外的 function 雖然是掛在 prototype 下，但是是共享的
// # ES6 的 class

var ClassES6 =
/*#__PURE__*/
function () {
  // constructor 就是 ES5 prototype 中接到或沒接到值後要馬上進行的事，像是將值指定、執行 function
  function ClassES6(variableOne, variableTwo) {
    _classCallCheck(this, ClassES6);

    _defineProperty(this, "log", function () {
      console.log("log in class ClassES6");
      console.log("log variableOne", this.one);
      console.log("log variableTwo", this.two);
    });

    this.one = variableOne;
    this.two = variableTwo; // funcion 的執行要寫在 constructor 內

    this.log();
    this.console();
  } // function 不用另外宣告定義，因為是在 class 中，已經默認宣告在該 class 下了


  _createClass(ClassES6, [{
    key: "console",
    value: function (_console) {
      function console() {
        return _console.apply(this, arguments);
      }

      console.toString = function () {
        return _console.toString();
      };

      return console;
    }(function () {
      console.log("console parent");
      return "console parent ".concat(this.one);
    })
  }]);

  return ClassES6;
}(); // 注意，在 new 時 class 裡面 constructor 的 function 就會執行一次


var firstClassES6 = new ClassES6(1, 2);
var secondClassES6 = new ClassES6(1, 2);
console.log(new ClassES6()); // 呼叫而沒載入值，是個 obejct

console.log(new ClassES6(1, 2)); // 帶入值時仍然是個 obejct，而非 undefined。要注意的是，若是帶入值，class 與 prototype 不同一定得用 new 創建呼叫

console.log(firstClassES6 === secondClassES6); // false，與 ES5 prototype 相同，new 會產生不同的 instance
// ES6 class 的 extends 繼承

var SubClassES6 =
/*#__PURE__*/
function (_ClassES) {
  _inherits(SubClassES6, _ClassES);

  function SubClassES6(variableOne, variableTwo, variableThree) {
    var _this;

    _classCallCheck(this, SubClassES6);

    // super 的意思就是找到父 class 的 constructor，並將帶入的值用父 class 的 constructor 執行
    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubClassES6).call(this, variableOne, variableTwo));

    _defineProperty(_assertThisInitialized(_this), "log", function () {
      console.log("log varaibleThree", this.three);
      return "SubClassES6 log";
    });

    _this.three = variableThree;

    _this.log();

    _this.console();

    _this.superFunction();

    return _this;
  } // 這裡可以發現，這樣省略 let 來 = function 的方式其實類似於創建新的 variable，因此子 class 不會覆蓋掉父 class 的相同 function


  _createClass(SubClassES6, [{
    key: "console",
    // 但這裏並非用 let = 來創建，因此會覆蓋掉父 class 的同名 function
    value: function (_console2) {
      function console() {
        return _console2.apply(this, arguments);
      }

      console.toString = function () {
        return _console2.toString();
      };

      return console;
    }(function () {
      console.log("console sub");
      return "console sub ".concat(this.three);
    })
  }, {
    key: "superFunction",
    value: function superFunction() {
      // 在子 class 中，也可以用 super 呼叫父 class 的 this 值或 function。在這裡是印出在父 class reutrn 的值
      console.log("This is", _get(_getPrototypeOf(SubClassES6.prototype), "console", this).call(this));
    }
  }], [{
    key: "staticFunction",
    value: function staticFunction() {
      console.log("staticFunction");
    }
  }]);

  return SubClassES6;
}(ClassES6);

console.log(new SubClassES6(1, 2, 3)); // 可像 prototype 中取得當中掛載的 function 的 return

console.log(new SubClassES6(1, 2, 3).log()); // staticFunction 是將 function 掛在 variable 下，因此是只有在 SubClassES6 被當作一般 variable 來看的時候才有，new 創建時反而沒有
// 也因為是當作一般 variable 而不是 class，不可用 () 帶入值

console.log(SubClassES6.staticFunction());

var GetterSetter =
/*#__PURE__*/
function (_ClassES2) {
  _inherits(GetterSetter, _ClassES2);

  function GetterSetter(variableOne, variableTwo, variableThree) {
    var _this2;

    _classCallCheck(this, GetterSetter);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(GetterSetter).call(this, variableOne, variableTwo));
    _this2.three = variableThree;
    return _this2;
  } // 類似 constructor 中的 this. =，注意這會取代帶入的值的 this 指定，而且一定要帶入一個值。注意這並非 function，而是一種指定值的方法


  _createClass(GetterSetter, [{
    key: "three",
    set: function set(varaibleThree) {
      this._three = varaibleThree;
    } // 專門用來取出 this. 值的 function
    ,
    get: function get() {
      return this._three;
    }
  }]);

  return GetterSetter;
}(ClassES6);

console.log(new GetterSetter(1, 2, 3)); // 若是 get function，則不需 ()，因為他並非真的 function，而是一種取值的值

console.log(new GetterSetter(1, 2, 3).three); // class 當作 object 看待時也可直接掛載值

GetterSetter.other = "other";
console.log(GetterSetter.other);