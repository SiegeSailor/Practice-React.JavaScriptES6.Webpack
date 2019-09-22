"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pi = exports.sum = void 0;

// ## 若想作為 Library 使用、被其他 JS 檔匯入，則需對 class 或 function 或 variable 使用 export
// 如 12-ImportExportDefault.html 所寫，若匯入時沒有用 import * as math，則匯出的不會從屬在 math 這個 object 上，
// 而是一個 object，即 {sum, pi}
// 使用 as 從屬在 math 這個 object 上的話，可以避免衝突，如 math.sum 不會跟 chinese.sum 起衝突
// object 的話順序沒關係，而且可以選擇性匯出，如 import {pi} from
var sum = function sum(x, y) {
  return x + y;
};

exports.sum = sum;
var pi = 3.14; // 當 export default 的對象是 let 或 const 時，必須先宣告後 export，不像 class 可以寫在一行
// 也可以直接 export feault 一個值或匿名 function，如
// export default 50;
// export default (x, y) => {
//     return x * y;
// }

exports.pi = pi;
var string = "I am ".concat(pi);
var _default = string;
exports["default"] = _default;
console.log('12-ImportExportDefalutLivbrary.js 來的。');