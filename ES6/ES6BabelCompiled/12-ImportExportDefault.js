"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _ImportExportDefaultLibrary = require("./12-ImportExportDefaultLibrary.js");

Object.keys(_ImportExportDefaultLibrary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ImportExportDefaultLibrary[key];
    }
  });
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  console.log("class Main from 12-ImportExportDefault.js");
};

exports["default"] = Main;