const step1 = () => {
    console.log("step1 start")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step1")
            // 示範若失敗
            if (false) {
                resolve("step1 resolve")
            } else {
                reject("step1 reject")
            }
        }, 300)
    })
}

const step2 = () => {
    console.log("step2 start")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step2")
            // 示範若失敗
            if (false) {
                resolve("step2 resolve")
            } else {
                reject("step2 reject")
            }
        }, 200)
    })
}

const step3 = () => {
    console.log("step3 start")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step3")
            resolve()
        }, 100)
    })
}

const step4 = () => {
    console.log("step4 start")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step4")
            resolve()
        }, 100)
    })
}

// 在 promise.all 後的 .then 接到的 resolve 回傳的值，會是一個陣列，順序是按照 Promise.all 裡的順序
// 原因是他先預先寫好了順序，而非按照執行的速度、誰執行完就先插誰
const run = () => {
    Promise.all([
        step1(),
        step2()
    ]).then((result) => {
        return step3()
    }, (result) => {
        return step3()
    }).then(() => {
        return Promise.all([
            step4(),
            step4()
        ])
    }).then(() => {
        return step3()
    })
}


run()
