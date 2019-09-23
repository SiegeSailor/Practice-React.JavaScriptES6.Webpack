"use strict";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["This is ", " and ", " and ", "."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ## ES6 字串的處理
// # 首先，ES5 的字串與變數必須分開
var nameES5 = "Zhang";
var stringES5 = "名字：" + nameES5;
console.log(stringES5); // 物件字串

var objectES5 = {
  name: "JinYu"
};
var stringObjectES5 = "名稱：" + objectES5.name;
console.log(stringObjectES5); // 然而，ES6 可以寫在一起，而且可以分隔符直接當作分行

var nameES6 = "Zhang";
var stringES6 = "\u540D\u5B57\uFF1A\n".concat(nameES6);
console.log(stringES6); // 物件字串

var objectES6 = {
  name: "JinYu"
};
var stringObjectES6 = "\u540D\u7A31\uFF1A\n".concat(objectES6.name);
console.log(stringObjectES6); // # 將變數載入字串，再將字串帶入 function 中時，會以 parameter 的位置做分隔成為一個 array
// 第一個 parameter 會是分隔後的 array，之後的 parameter 依序為帶入的變數

var one = "one";
var two = "two";
var three = "three";

function rawString(strings, stringOne, stringTwo, stringThree) {
  console.log(strings); // 第一個 parameter 除了是分隔後的 array 外，還帶有 raw 的屬性，含有分隔後的字串 array

  console.log(strings.raw);
  console.log(stringOne);
  console.log(stringTwo);
  console.log(stringThree);
  console.log(strings[0] + stringOne + strings[1] + stringTwo + strings[2] + stringThree + strings[3]);
}

rawString(_templateObject(), one, two, three); // # ${} 可以帶入 function

function parameterFunction(parameter) {
  console.log(parameter);
}

var string2 = "parameterFunction\uFF1A".concat(parameterFunction("parameterFunction")); // ${} 內也可以進行數字計算

console.log("\u6578\u5B57\u8A08\u7B97 ".concat(1 + 2 + 3)); // # 跳脫字元與 ${} 與組字串

function rawSymbol(strings) {
  console.log(strings[0]); // 一般第一個 parameter 取出的陣列內會自動將跳脫字元消除

  console.log(strings[1]);
  console.log(strings.raw[0]); // raw 屬性下的字串是包含 \n 一類的跳脫字元的

  console.log(strings.raw[1]);
  console.log(arguments.length <= 1 ? undefined : arguments[1]);
}

rawSymbol(_templateObject2(), 42); // # raw 是在 String 下既有的一個屬性，能夠不自動將跳字元消除或處理使用

String.raw(_templateObject3(), 42);
console.log(String.raw(_templateObject4(), 42));
console.log(String(_templateObject5(), 42));