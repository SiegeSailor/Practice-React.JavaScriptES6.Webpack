"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ## ES6 對 object 的增強
// # 陣列宣告中，variable key 可以直接當作 object 的 key
var one = "Value One";
var two = "Value Two";
var oneTwo = {
  one: one,
  two: two
};
console.log(oneTwo); // # 能對 key 作字串串或計算

var name = "ken";
var index = 0;

var student = _defineProperty({}, "student" + index, name);

console.log(student); // # object 內的 function 名稱會直接對應為 key，不用再寫 key 的名稱

var objectFunction = {
  subObjectFunction: function subObjectFunction() {
    console.log("execute");
    return "return from subObjectFunction";
  }
};
console.log(objectFunction.subObjectFunction()); // # object 互相對應時，會以 key 為目標對應。通常拿來對應 JSON

var fruit = {
  orange: "1",
  banana: "2",
  // 階層內的 object key 也能對應
  apple: {
    flavor: "bad"
  }
};
var orange = fruit.orange,
    banana = fruit.banana,
    apple = fruit.apple;
console.log(orange);
console.log(apple);
console.log(apple.flavor); // # function 帶入的 object 的 value 也可以直接當作 variable 使用

function objectKeyFromValue(_ref) {
  var flavor = _ref.nameKey;
  console.log(flavor);
}

objectKeyFromValue({
  nameKey: "Value"
});