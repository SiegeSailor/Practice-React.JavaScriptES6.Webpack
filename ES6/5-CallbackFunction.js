// ## 闡述 ES6 如何處理 ES5 的 callback hell 問題

let arrayStandard = [2, 4, 6, 8];
// # 以 arrow function 創造一個標準的 callback
let printNumbers = (numbers, isPlusOne) => {
    let doFunction = null;
    if (isPlusOne) {
        doFunction = function (number) {
            console.log(number + 1)
        }
    } else {
        doFunction = function (number) {
            console.log(number + 2)
        }
    }
    for (let i = 0; i < numbers.length; i = i + 1) {
        doFunction(numbers[i])
    }
    return;
}
printNumbers(arrayStandard, true)

// let 宣告的變數不存在 window 下，因此得使用 var 宣告
var arrayCondensed = [2, 4, 6, 8]
// # 由於 array 也是一種 object，屬於 key value 形式，因此也可以將 function 掛載在選定的 array 下
// 也可以掛載在公共的 Array.prototype 下，這樣所有的 array 都被掛載到該 function
// 注意，這裏 function 中的 numbers 值是以 this 指向 array

// arrow function 中的 this 在定義當下決定，而一般 function 的 this 則是使用該 function 的對象
// 因此這裏的 arrow function 皆指向 window，因為是在最外層定義，而一般 function 的 this 仍然指向使用該 function 的 array
var arrayPublic = [1, 3, 5, 7]
Array.prototype.printNumbersArrow = (numbers, callback) => {
    for (let i = 0; i < numbers.length; i = i + 1) {
        callback(numbers[i])
    }
    return
}
Array.prototype.printNumbersNormal = function (callback) {
    for (let i = 0; i < this.length; i = i + 1) {
        callback(this[i])
    }
    return
}
arrayCondensed.printNumbers = (callback) => {
    for (let i = 0; i < this.arrayCondensed.length; i = i + 1) {
        callback(this.arrayCondensed[i])
    }
    return
};
arrayCondensed.forEachSelf = (callback) => {
    for (let i = 0; i < this.arrayCondensed.length; i = i + 1) {
        callback(this.arrayCondensed[i])
    }
    return
};
arrayCondensed.mapSelf = (callback) => {
    let result = [];
    for (let i = 0; i < this.arrayCondensed.length; i = i + 1) {
        result.push(callback(this.arrayCondensed[i]))
    }
    return result;
}
let plusOne = number => {
    console.log(number + 1);
    return number + 1
}
let plusTwo = number => {
    console.log(number + 2)
    return number + 2
}
arrayPublic.printNumbersArrow(arrayPublic, plusTwo);
arrayPublic.printNumbersNormal(plusTwo);
arrayCondensed.printNumbers(plusOne);
arrayCondensed.forEachSelf(plusTwo);
let mapSelfResult = arrayCondensed.mapSelf(plusOne)
console.log(mapSelfResult)