"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _WebPackBabelInstanceMath = require("./13-WebPackBabelInstanceMath");

Object.keys(_WebPackBabelInstanceMath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WebPackBabelInstanceMath[key];
    }
  });
});

var _WebPackBabelInstanceEcho = require("./13-WebPackBabelInstanceEcho");

Object.keys(_WebPackBabelInstanceEcho).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WebPackBabelInstanceEcho[key];
    }
  });
});

var _default = function _default(x) {
  return x + x;
};

exports["default"] = _default;