"use strict";

var _WebPackBabelLibrary = _interopRequireWildcard(require("./13-WebPackBabelLibrary"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BabelNeedsWebpack = function BabelNeedsWebpack() {
  _classCallCheck(this, BabelNeedsWebpack);

  _defineProperty(this, "echoSummonsFromEcho", function () {
    (0, _WebPackBabelLibrary.echo)("Pi is ".concat(_WebPackBabelLibrary.pi, "."));
  });

  console.log("\u5373\u4F7F\u7D93\u904E Babel \u7DE8\u8B6F\uFF0Cclass \u4ECD\u7136\u4E0D\u80FD\u76F4\u63A5\u5728 module \u4E2D\u76F4\u63A5\u5BA3\u544A\u4F7F\u7528\u3002\u9700\u8981 Webpack\u3002");
}; // 經 WebPack Babel 編譯後，先嘗試以不正確的 window 指定方式調配 class


window.BabelNeedsWebpack = BabelNeedsWebpack; // 再來，這是正確的使用方法

document.addEventListener('DOMContentLoaded', function () {
  var babelNeedsWebpack = new BabelNeedsWebpack();
  babelNeedsWebpack.echoSummonsFromEcho();
});