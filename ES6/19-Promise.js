// msg 即是 Promise 裡 resolve 解析給 then 帶入的預設 parameter

function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("aaa", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
    // ,
    // reject 寫在這
})

// 

const step1 = (data, resolve, reject) => {
    const {url} = data
    console.log(url)
    setTimeout(() => {
        console.log("step1")
        if (true) {
            resolve(["step 1 result", "step 1 result 2"])
        } else {
            reject()
        }
    }, 300)
}


const step2 = (value) => {
    return new Promise((resolve, reject) => {
        console.log("step2 param value :" + value)
        setTimeout(() => {
            console.log("step2")
            if (true) {
                resolve()
            } else {
                reject()
            }
        }, 200)
    })
}

const step3 = (resolve, reject) => {
    setTimeout(() => {
        console.log("step3")
        if (true) {
            resolve("final value")
        } else {
            reject()
        }
    }, 100)
}

const getUser = (url) => {
    // 為什麼不直接將 new Promise 寫在 step1 裡然後這裡直接執行 step1？
    // 因為這樣就無法在一個整理好的 function 內用 .then 連結後面要執行的事了，
    // 就必須寫在 step1 內。

    // 但應該可以把 step1 的東西搬進來這，
    // 或者把 step2 和 step3 搬進來，二選一。
    new Promise( (resolve, reject) => {
        const data = {
            url
        }
        // 把 promise 原生 API 的 resolve 和 reject 傳入 step1
        step1(data, resolve,reject)
    } )
    .then((value) => {
        // step2 和 step3 其實和 step1 一樣是一個 new Promise，透過 return 讓他確實能照順序執行
        // 沒有 return 他會直接執行
        // then 的第一個是 resolve
        return step2(value)
    })    
    .then(() => {
        return new Promise(step3)
    }, () => {
        console.log("step2 reject")
        // 這裡特殊的是，原先 then 的第二個會是 reject，但加上 return 後變成有如 resolve 傳入到下一個 then 的值
        return "failed"
    }).then((value) => {
        console.log(value)
    }, (value) => {
        console.log(value + " reject")
    })
}

getUser("https://domain")


// Promise 的 resolve 和 reject 比較像是指定成功要傳什麼值、失敗要傳什麼值，
// 因此才要再加上 if 去做判斷哪種情況是 resolve （成功）、哪種是 reject（失敗）
// 而 Promise .then 接的則是第一個參數為成功的值（即 resolve 的值），