// ## ES6 對 object 的增強
// # 陣列宣告中，variable key 可以直接當作 object 的 key
let one = "Value One"
let two = "Value Two"
let oneTwo = {
    one,
    two
}
console.log(oneTwo)
// # 能對 key 作字串串或計算
let name = `ken`
let index = 0
let student = {
    [`student` + index]: name
}
console.log(student)
// # object 內的 function 名稱會直接對應為 key，不用再寫 key 的名稱
let objectFunction = {
    subObjectFunction() {
        console.log(`execute`)
        return `return from subObjectFunction`
    }
}
console.log(objectFunction.subObjectFunction())
// # object 互相對應時，會以 key 為目標對應。通常拿來對應 JSON
let fruit = {
    orange: "1",
    banana: "2",
    // 階層內的 object key 也能對應
    apple: {
        flavor: `bad`
    }
}
let {
    orange,
    banana,
    apple
} = fruit
console.log(orange)
console.log(apple)
console.log(apple.flavor)
// # function 帶入的 object 的 value 也可以直接當作 variable 使用
function objectKeyFromValue({
    // 若有 value，則使用 value 作 key
    // 若只有 key，則 key 會對應到 value
    nameKey: flavor
}) {
    console.log(flavor)
}
objectKeyFromValue({
    nameKey: `Value`
})