// ## 以 class 取代 ES5 的 prototype
// # ES5 的 prototype
var prototypeES5 = function (variableOne, variableTwo) {
    this.one = variableOne;
    this.two = variableTwo;
    this.log = function () {
        console.log("log variableOne", this.one)
        console.log("log variableTwo", this.two)
    }
    this.log()
}
prototypeES5.prototype.console = function (variableOne, variableTwo) {
    console.log("console variableOne", variableOne)
    console.log("console variableTwo", variableTwo)
}
// 注意，在 new 時 prototype 內的 function 就會執行一次
var firstPrototypeES5 = new prototypeES5(1, 2);
var secondPrototypeES5 = new prototypeES5(1, 2);
console.log(prototypeES5) // 直接呼叫時是一個 function
console.log(prototypeES5(1, 2)) // 帶入值時是 undefined
console.log(firstPrototypeES5 === secondPrototypeES5) // false，因為兩者是由 new 出來的，雖然 prototype 是一樣的但是不同的 instance
console.log(firstPrototypeES5.console() === secondPrototypeES5.console()) // true，因為在 prototype 外的 function 雖然是掛在 prototype 下，但是是共享的

// # ES6 的 class
class ClassES6 {
    // constructor 就是 ES5 prototype 中接到或沒接到值後要馬上進行的事，像是將值指定、執行 function
    constructor(variableOne, variableTwo) {
        this.one = variableOne;
        this.two = variableTwo;
        // funcion 的執行要寫在 constructor 內
        this.log();
        this.console();
    }
    // function 的定義要寫在外面，因為是在 class 中，已經默認宣告在該 class 下了
    log = function () {
        console.log("log variableOne", this.one)
        console.log("log variableTwo", this.two)
    }
    console() {
        console.log("console parent")
        return `console parent ${this.one}`
    }
}
// 注意，在 new 時 class 裡面 constructor 的 function 就會執行一次
let firstClassES6 = new ClassES6(1, 2);
let secondClassES6 = new ClassES6(1, 2);
console.log(new ClassES6) // 呼叫而沒載入值，是個 obejct
console.log(new ClassES6(1, 2)) // 帶入值時仍然是個 obejct，而非 undefined。要注意的是，若是帶入值，class 與 prototype 不同一定得用 new 創建呼叫
console.log(firstClassES6 === secondClassES6); // false，與 ES5 prototype 相同，new 會產生不同的 instance

// ES6 class 的 extends 繼承
class SubClassES6 extends ClassES6 {
    constructor(variableOne, variableTwo, variableThree) {
        // super 的意思就是找到父 class 的 constructor，並將帶入的值用父 class 的 constructor 執行
        super(variableOne, variableTwo)
        this.three = variableThree;
        this.log();
        this.console();
        this.superFunction();
    }
    // 這裡可以發現，這樣省略 let 來 = function 的方式其實類似於創建新的 variable，因此子 class 不會覆蓋掉父 class 的相同 function
    log = function () {
        console.log("log varaibleThree", this.three)
        return `SubClassES6 log`
    }
    // 但這裏並非用 let = 來創建，因此會覆蓋掉父 class 的同名 function
    console() {
        console.log("console sub")
        return `console sub ${this.three}`
    }
    superFunction() {
        // 在子 class 中，也可以用 super 呼叫父 class 的 this 值或 function。在這裡是印出在父 class reutrn 的值
        console.log(`This is`, super.console())
    }
    static staticFunction() {
        console.log(`staticFunction`)
    }
}
console.log(new SubClassES6(1, 2, 3))
// 可像 prototype 中取得當中掛載的 function 的 return
console.log(new SubClassES6(1, 2, 3).log())
// staticFunction 是將 function 掛在 variable 下，因此是只有在 SubClassES6 被當作一般 variable 來看的時候才有，new 創建時反而沒有
// 也因為是當作一般 variable 而不是 class，不可用 () 帶入值
console.log(SubClassES6.staticFunction())

class GetterSetter extends ClassES6 {
    constructor(variableOne, variableTwo, variableThree) {
        super(variableOne, variableTwo)
        this.three = variableThree
    }
    // 類似 constructor 中的 this. =，注意這會取代帶入的值的 this 指定，而且一定要帶入一個值。注意這並非 function，而是一種指定值的方法
    set three(varaibleThree) {
        this._three = varaibleThree
    }
    // 專門用來取出 this. 值的 function
    get three() {
        return this._three
    }
}
console.log(new GetterSetter(1, 2, 3))
// 若是 get function，則不虛 ()，因為他並非真的 function，而是一種取值的值
console.log(new GetterSetter(1, 2, 3).three)
// class 當作 object 看待時也可直接掛載值
GetterSetter.other = `other`
console.log(GetterSetter.other)