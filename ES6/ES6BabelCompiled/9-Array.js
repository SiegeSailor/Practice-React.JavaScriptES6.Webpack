"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ## ES6 對 object 的增強，包括 array
// # 宣告 array 時可以自動對位
var myProductPrice = [0, 20, 40, 80, 100];

var sum = function sum(productPrice) {
  var amount = 0;
  productPrice.forEach(function (productPrice) {
    amount = amount + productPrice;
  });
  return amount;
};

console.log("sum()", sum(myProductPrice));
var myCoupon = {
  usgaeLimit: 200,
  usageNumber: 10,
  discount: 50
};

var isCouponAvailable = function isCouponAvailable(coupon, productPrice) {
  var productAmount = sum(productPrice);

  if (productAmount < coupon.usgaeLimit) {
    return [false, "You need at least \n            ".concat(coupon.usgaeLimit, " value to \n            activate this coupon, \n            but you only have ").concat(productAmount, ".")];
  }

  if (productPrice.length < coupon.usageNumber) {
    return [false, "You need at least \n            ".concat(coupon.usageNumber, " products to \n            activate this coupon, \n            but you only have ").concat(productPrice.length, ".")];
  } // 為了避免共同開發時值對不上，與其使用 key value 形式指定 result 與 message，倒不如用陣列的方法


  return [true, null];
}; // 在取得結果時，再以陣列對位的方式取值並以變數名稱判斷值
// 另外，陣列內的值可以使用默認值


var _isCouponAvailable = isCouponAvailable(myCoupon, myProductPrice),
    _isCouponAvailable2 = _slicedToArray(_isCouponAvailable, 2),
    resultIsCouponAvailable = _isCouponAvailable2[0],
    _isCouponAvailable2$ = _isCouponAvailable2[1],
    messageIsCouponAvailable = _isCouponAvailable2$ === void 0 ? "Default Value" : _isCouponAvailable2$;

if (resultIsCouponAvailable) {
  console.log("Success");
} else {
  console.log(messageIsCouponAvailable);
} // 還可以將其寫入 function，以陣列對位的方式取值


var printResult = function printResult(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      resultIsCouponAvailable = _ref2[0],
      _ref2$ = _ref2[1],
      messageIsCouponAvailable = _ref2$ === void 0 ? "Success" : _ref2$,
      other = _ref2[2];

  if (resultIsCouponAvailable) {
    console.log(messageIsCouponAvailable);
  } else {
    console.log(messageIsCouponAvailable);
  } // 沒有對到位的值為 undefined


  console.log(other);
};

printResult(isCouponAvailable(myCoupon, myProductPrice));