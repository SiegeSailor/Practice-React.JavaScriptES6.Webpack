"use strict";

var globalAnnouncement = "global 使用："; // ## ES5 中 scope 內宣告的變數會溢出到 global 中，然而在比較嚴謹的語言如 C，scope 內宣告的變數只會存在 scope 中
// # variable

if (true) {
  var scopeVariable = "宣告於 scope 中的 variable。<br>";
}

document.write(globalAnnouncement + scopeVariable); // # function

if (true) {
  var _scopeFunction = function _scopeFunction() {
    document.write(globalAnnouncement + "宣告於 scope 中的 function。<br>");
  };
}

scopeFunction(); // # global function 與 scope function。scope 內的 function 會覆蓋 global 宣告的 function

function functionComparison() {
  document.write(globalAnnouncement + "宣告於 global 中的 function。<br>");
}

if (true) {
  var _functionComparison = function _functionComparison() {
    document.write(globalAnnouncement + "宣告於 scope 中的 function。<br>");
  };
}

functionComparison(); // # 即使是之前引入的 library，仍然會覆蓋掉。若註解以下 scope 的 function，則會執行 3-ScopeLibrary.js 的 function

if (true) {
  var _functionLibraryComparison = function _functionLibraryComparison() {
    document.write(globalAnnouncement + "宣告於 3-Scope.js 內的 scope 中的 function。<br>");
  };
}

functionLibraryComparison();
var scopeAnnouncement = "scope 使用："; // ## ES6 中，若都在一個巢狀 scope 內，或使用 let 宣告，則 function 間不會溢出
// # 巢狀 scope

{
  var functionComparisonScopeES6 = function functionComparisonScopeES6() {
    document.write(scopeAnnouncement + "宣告於父 scope 中的 function。<br>");
  };

  if (true) {
    var _functionComparisonScopeES = function _functionComparisonScopeES() {
      document.write(scopeAnnouncement + "宣告於子 scope 中的 function。<br>");
    };
  }

  functionComparisonScopeES6();
} // # let 宣告

var functionComparisonLetES6 = function functionComparisonLetES6() {
  document.write(globalAnnouncement + "以 let 宣告於 global 中的 function。<br>");
};

if (true) {
  var _functionComparisonLetES = function _functionComparisonLetES() {
    document.write(globalAnnouncement + "以 let 宣告於 scope 中的 function。<br>");
  };
}

functionComparisonLetES6();