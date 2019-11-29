const step1 = (callback) => {
    setTimeout(() => {
        console.log("step1")
        if (callback) {
            callback()
        }
    }, 300)
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("step2")
        if (callback) {
            callback()
        }
    }, 200)
}

const step3 = (callback) => {
    setTimeout(() => {
        console.log("step3")
        if (callback) {
            callback()
        }
    }, 100)
}

let eventHandlers = [
    step1,
    step2,
    step3,
]

// 利用 resursive 遞迴的概念，在 function 裡重複自己，
// 並設下停止條件 ( 這裡是若超出陣列長度，也就是執行完整個陣列的順序 function 後 )

const run = (index = 0) => {
    if (index >= eventHandlers.length) {
        return
    }

    const handler = eventHandlers[index];
    handler(() => {
        run(index + 1)
    })
}


run()