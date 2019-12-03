const stepOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(`Step One Started`)
            const returnValue = 1;
            if (true) {
                resolve(returnValue)
            } else {
                reject(`Step One Error!`)
            }
        }, 300)
    })
}

const stepTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(`Step Two Started`)
            const returnValue = 2;
            if (true) {
                resolve(returnValue)
            } else {
                reject(`Step Two Error!`)
            }
        }, 200)
    })
}

// ## async 與 await 是用於類似 run 這類執行 Promise 的函式
// 用 async 宣告為同步函式，接著用 await 宣告要執行的程式碼是必須等待執行完才進行下一步
const run = async () => {

    // # 較易讀的 async, await 寫法
    const returnValueOne = await stepOne().catch((errorMessage)=> {
        console.log(errorMessage)
    })
    // 若 stepOne().catch 抓到錯誤、收到 reject 的值，
    // 則 returnValaueOne 就收不到 resolve 的值了。因此此處在錯誤時會為 undefinded
    console.log(returnValueOne)

    const returnValueTwo = await stepTwo()
    console.log(returnValueTwo)



    // # try catch 寫法，錯誤即彈出
    try {
        const returnValueOne = await stepOne()
        console.log(returnValueOne)
        const returnValueTwo = await stepTwo()
        console.log(returnValueTwo)
    } catch (error){
        console.log(error)
    }



    // # 原本的 callback 寫法
    stepOne().then((returnValue)=> {
        console.log(returnValue)
        return stepTwo()
    }, (errorMessage)=> {
        console.log(errorMessage)
        return Promise.reject(`Step One Failed!`)
    }).then((returnValue)=> {
        console.log(returnValue)
    }, (errorMessage)=> {
        console.log(errorMessage)
    })
}

run()