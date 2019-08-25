// ## ES6 對於傳入的參數的應用
// # 預設值
const defaultParameter = (value = 5) => {
    console.log(value * 5)
}
defaultParameter();

// # 未知數的接取，在已知 parameter 後的所有值都會轉為一個陣列存在 ...parameter 內，...parameter 不可有預設值
const unknownParameter = (value, ...unknowValue) => {
    console.log(value)
    console.log(unknowValue)
}
unknownParameter(5, 10, 15, 20)

// # arguments，只有一般 function 有
function parameterArguments(value = 10, ...unknowValue) {
    console.log(arguments)
    // 可用 slice.call 刪除 arguments 後面的 parameter
    var sliceCall = Array.prototype.slice.call(arguments, 1)
    console.log(sliceCall)
    console.log(value)
    console.log(unknowValue)
}
parameterArguments(5, 5, 5, 3, 3, 3)

// # 對於 ...parameter 的 array 應用
// 一般而言，若要將兩個 array 的資料接在一起，可以使用 concat()
let arrayConcatFront = [1, 2, 3]
let arrayConcatBack = [4, 5, 6]
let concatResult = arrayConcatFront.concat(arrayConcatBack)
console.log(concatResult)
// 但你也可以使用 ...parameter
let arrayUnknownFront = [1, 2, 3]
let arrayUnknownBack = [4, 5, 6, ...arrayUnknownFront]
console.log(arrayUnknownBack)
// 可以多重使用
// 可以注意到，原先 ...parameter 進去的值會變為陣列，但在陣列中並不會再出現另一個陣列
let mulitUnknown = [...arrayUnknownFront, ...arrayUnknownBack]
console.log(mulitUnknown)
// 字串拆解
let string = "你好嗎"
let stringToArray = [...string]
console.log(stringToArray)
// 注意字串拆解在 function 中不起作用，除非將 ..parameter 以 array 包覆
let stringToArrayFunction = ([...value]) => {
    console.log(value)
}
stringToArrayFunction(string)