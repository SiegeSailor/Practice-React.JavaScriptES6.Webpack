"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// ## ES6 對於傳入的參數的應用
// # 預設值
var defaultParameter = function defaultParameter() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  console.log(value * 5);
};

defaultParameter(); // # 未知數的接取，在已知 parameter 後的所有值都會轉為一個陣列存在 ...parameter 內，...parameter 不可有預設值

var unknownParameter = function unknownParameter(value) {
  console.log(value);

  for (var _len = arguments.length, unknowValue = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    unknowValue[_key - 1] = arguments[_key];
  }

  console.log(unknowValue);
};

unknownParameter(5, 10, 15, 20); // # arguments，只有一般 function 有

function parameterArguments() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  for (var _len2 = arguments.length, unknowValue = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    unknowValue[_key2 - 1] = arguments[_key2];
  }

  console.log(arguments); // 可用 slice.call 刪除 arguments 後面的 parameter

  var sliceCall = Array.prototype.slice.call(arguments, 1);
  console.log(sliceCall);
  console.log(value);
  console.log(unknowValue);
}

parameterArguments(5, 5, 5, 3, 3, 3); // # 對於 ...parameter 的 array 應用
// 一般而言，若要將兩個 array 的資料接在一起，可以使用 concat()

var arrayConcatFront = [1, 2, 3];
var arrayConcatBack = [4, 5, 6];
var concatResult = arrayConcatFront.concat(arrayConcatBack);
console.log(concatResult); // 但你也可以使用 ...parameter

var arrayUnknownFront = [1, 2, 3];
var arrayUnknownBack = [4, 5, 6].concat(arrayUnknownFront);
console.log(arrayUnknownBack); // 可以多重使用
// 可以注意到，原先 ...parameter 進去的值會變為陣列，但在陣列中並不會再出現另一個陣列

var mulitUnknown = [].concat(arrayUnknownFront, _toConsumableArray(arrayUnknownBack));
console.log(mulitUnknown); // 字串拆解

var string = "你好嗎";

var stringToArray = _toConsumableArray(string);

console.log(stringToArray); // 注意字串拆解在 function 中不起作用，除非將 ..parameter 以 array 包覆

var stringToArrayFunction = function stringToArrayFunction(_ref) {
  var _ref2 = _toArray(_ref),
      value = _ref2.slice(0);

  console.log(value);
};

stringToArrayFunction(string);