const step1 = (
    data,
    success = () => { },
    failed = () => { }
) => {

    console.log("Step1 get params: " + data)

    setTimeout(() => {
        console.log("step1")
        let result = "step1_"
        if (true) {
            success(result)
        } else {
            failed(result)
        }
    }, 300)
}

const step2 = (
    data, 
    success = () => { }, 
    failed = () => { }
) => {

    console.log("Step2 get params: " + data)

    setTimeout(() => {
        console.log("step2")
        let result = "step2_"
        if (true) {
            success(result)
        } else {
            failed()
        }
    }, 200)
}

const step3 = (
    data, 
    success = () => { }, 
    failed = () => { }
) => {

    console.log("Step3 get params: " + data)

    setTimeout(() => {
        console.log("step3")
        let result = "step3_"
        if (true) {
            success(result)
        } else {
            failed()
        }
    }, 100)
}

const final = (data) => {
    console.log("final: " + data)
}

let eventHandlers = [
    step1,
    step2,
    step3,
    final
]

// 因為 async function 可能是 request，延續 resurcive 的解法
// 這裡示範 callback 帶入用 success 和 fail，
// 當成功時即帶入陣列內下一個 function，而失敗時則有個統一的 failed function 來處理。

// 因為可能 request 之間會需要使用別的 request 傳入的資料，
// 這裡示範將 success 成功取得的 result 傳到下一個 request ( function ) 的方法。
// 注意下的 hanlder，其結構就是 step1~3
// step1~3 裡的 success 會有一個 result 的 parameter，result 來自 success 的成功回應
// 而 handler 裡的 success 就是指 step1~3 裡的 success，
// 也就是透過 handler，把執行下一個程式這件事當作 success 的函式傳到要執行的 function，
// 並且夾帶 data。
// step1~3 裡的 success 由 handler 傳來，handler 的 params 即 step1~3 的 result，依此類推

const run = (index = 0, data = {}) => {
    if (index >= eventHandlers.length) {
        return
    }

    const handler = eventHandlers[index];
    const success = (params) => {
        run(index + 1, params)
    }

    const failed = () => {
        // failed
    }

    handler(
        data,
        success,
        failed
    )
}


run()