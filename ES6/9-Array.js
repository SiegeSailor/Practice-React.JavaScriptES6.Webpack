// ## ES6 對 object 的增強，包括 array
// # 宣告 array 時可以自動對位
let myProductPrice = [0, 20, 40, 80, 100]
let sum = (productPrice) => {
    let amount = 0;
    productPrice.forEach((productPrice) => {
        amount = amount + productPrice;
    })
    return amount
}
console.log(`sum()`, sum(myProductPrice))
let myCoupon = {
    usgaeLimit: 200,
    usageNumber: 10,
    discount: 50,
}
let isCouponAvailable = (coupon, productPrice) => {
    let productAmount = sum(productPrice)
    if (productAmount < coupon.usgaeLimit) {
        return [
            false,
            `You need at least 
            ${coupon.usgaeLimit} value to 
            activate this coupon, 
            but you only have ${productAmount}.`
        ]

    }
    if (productPrice.length < coupon.usageNumber) {
        return [
            false,
            `You need at least 
            ${coupon.usageNumber} products to 
            activate this coupon, 
            but you only have ${productPrice.length}.`
        ]
    }
    // 為了避免共同開發時值對不上，與其使用 key value 形式指定 result 與 message，倒不如用陣列的方法
    return [true,
        null
    ]

}
// 在取得結果時，再以陣列對位的方式取值並以變數名稱判斷值
// 另外，陣列內的值可以使用默認值
let [resultIsCouponAvailable, messageIsCouponAvailable = `Default Value`] = isCouponAvailable(myCoupon, myProductPrice)
if (resultIsCouponAvailable) {
    console.log(`Success`)
} else {
    console.log(messageIsCouponAvailable)
}

// 還可以將其寫入 function，以陣列對位的方式取值
let printResult = ([resultIsCouponAvailable, messageIsCouponAvailable = `Success`, other]) => {
    if (resultIsCouponAvailable) {
        console.log(messageIsCouponAvailable)
    } else {
        console.log(messageIsCouponAvailable)
    }
    // 沒有對到位的值為 undefined
    console.log(other)
}
printResult(isCouponAvailable(myCoupon, myProductPrice))