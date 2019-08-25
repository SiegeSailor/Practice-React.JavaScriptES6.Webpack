const delimiter = "<br>";
// 注意，array.prototype.map() 與 array.prototype.foreach() 的差別在於前者有回傳值，而後者沒有，用法基本一樣

// ## 應用 array.prototype.map() 的方法，闡述 expression bodies 中一般 function 與 arrow function 的差別寫法
// 這邊使用 var 而非 let 宣告 function，因為重複宣告 let 在 ES6 中是禁止的
let evensMap = [2, 4, 6, 8];
// # 一般 function
var inputFunctionMap = function (value, index, array) {
    document.write(index + delimiter);
    document.write(array + delimiter);
    return value + 1;
}
// # arrow function，在只有一個傳入值和裡面只有一行需要執行時
// 注意，在直接以 => 指向執行列時不可使用 return
var inputFunctionMap = value => value + 1;
// 也可以回傳陣列，但陣列外需用 () 包覆，不需 {}
var inputFunctionMap = value => ({
    even: value,
    "odd": value + 1
})
// # arrow function，在有多個傳入值和裡面有多行需要執行時
var inputFunctionMap = (value, index, array) => {
    document.write(index + delimiter);
    document.write(array + delimiter);
    // 注意，當使用 {} 包覆執行列時，return 是必要的
    return value + 1;
}
// 也可以回傳陣列
var inputFunctionMap = (value, index, array) => {
    document.write(index + delimiter);
    document.write(array + delimiter);
    return {
        "even": value,
        odd: value + 1,
    }
}
let oddsMap = evensMap.map(inputFunctionMap)
console.log(oddsMap);

// ## 應用 array.prototype.foreach() 的方法，闡述 statement bodies 中一般 function 與 arrow function 的差別寫法
// 這邊使用 var 而非 let 宣告 function，因為重複宣告 let 在 ES6 中是禁止的
let evensForEach = [2, 4, 6, 8]
// # arrow function，在有多個傳入值和裡面有多行需要執行時
var inputFunctionForEach = (value, index, array) => {
    let result = {
        "even": value,
        odd: value +1,
        "index": index,
        array: array,
    }
    console.log(result)
}
let oddsForEach = evensForEach.forEach(inputFunctionForEach)
console.log(oddsForEach) // 注意，這裡回傳會是 undefined，因為 foreach 本身並沒有回傳值，oddsForEach 並沒有接到任何回傳