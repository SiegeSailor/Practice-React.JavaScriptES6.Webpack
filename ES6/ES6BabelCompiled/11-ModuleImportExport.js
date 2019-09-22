"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ModuleImportExportLibrary = _interopRequireDefault(require("./11-ModuleImportExportLibrary.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageSub = function MessageSub() {
  _classCallCheck(this, MessageSub);

  this.message = new _ModuleImportExportLibrary["default"]();
};

exports["default"] = MessageSub;
window.MessageSub = MessageSub;