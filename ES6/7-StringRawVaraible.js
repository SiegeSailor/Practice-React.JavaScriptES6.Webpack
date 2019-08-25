// ## ES6 字串的處理

// # 首先，ES5 的字串與變數必須分開
var nameES5 = "Zhang";
var stringES5 = "名字：" + nameES5;
console.log(stringES5);
// 物件字串
var objectES5 = {
    name: "JinYu",
}
var stringObjectES5 = "名稱：" + objectES5.name;
console.log(stringObjectES5)
// 然而，ES6 可以寫在一起，而且可以分隔符直接當作分行
let nameES6 = "Zhang";
let stringES6 = `名字：
${nameES6}`;
console.log(stringES6)
// 物件字串
let objectES6 = {
    name: "JinYu"
}
let stringObjectES6 = `名稱：
${objectES6.name}`
console.log(stringObjectES6)

// # 將變數載入字串，再將字串帶入 function 中時，會以 parameter 的位置做分隔成為一個 array
// 第一個 parameter 會是分隔後的 array，之後的 parameter 依序為帶入的變數
let one = "one";
let two = "two";
let three = "three";

function rawString(strings, stringOne, stringTwo, stringThree) {
    console.log(strings)
    // 第一個 parameter 除了是分隔後的 array 外，還帶有 raw 的屬性，含有分隔後的字串 array
    console.log(strings.raw)
    console.log(stringOne)
    console.log(stringTwo)
    console.log(stringThree)
    console.log(strings[0] + stringOne + strings[1] + stringTwo + strings[2] + stringThree + strings[3])
}
rawString`This is ${one} and ${two} and ${three}.`

// # ${} 可以帶入 function
function parameterFunction(parameter) {
    console.log(parameter)
}
const string2 = `parameterFunction：${parameterFunction(`parameterFunction`)}`
// ${} 內也可以進行數字計算
console.log(`數字計算 ${1 + 2 + 3}`)

// # 跳脫字元與 ${} 與組字串
function rawSymbol(strings, ...values) {
    console.log(strings[0]) // 一般第一個 parameter 取出的陣列內會自動將跳脫字元消除
    console.log(strings[1])
    console.log(strings.raw[0]) // raw 屬性下的字串是包含 \n 一類的跳脫字元的
    console.log(strings.raw[1])
    console.log(values[0])
}
rawSymbol `foo\n${ 42 }bar`

// # raw 是在 String 下既有的一個屬性，能夠不自動將跳字元消除或處理使用
String.raw `foo\n${ 42 }bar`
console.log(String.raw `foo\n${ 42 }bar`)
console.log(String `foo\n${ 42 }bar`)