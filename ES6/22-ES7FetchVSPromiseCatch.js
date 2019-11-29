// 注意 404 在 fetch 中是算做成功的。只要有成功打通就是成功

fetch("http://127.0.0.1:5501/ES6/21-XMLHttpRequestAJAXToPromiseJSON.json").then((response) => {
    return response.json();
    // 以下的 then 是由 json() 產生用的。json() 的基本是為 promise，因此也有 resolve 和 reject 的狀況
}).then((myJson) => {
    console.log(myJson)
}, (errorString) => {
    console.log(errorString)
})

fetch("http://127.0.0.1:5501/ES6/21-XMLHttpRequestAJAXToPromiseJSON.json").then((response) => {
    return response.json();
}).then((myJson) => {
    console.log(myJson)
    // 也可以直接使用 fetch 的 catch 來做錯誤回報
}).catch((errorString) => {
    console.log(errorString)
})

// 在實做 catch 和 fetch 的錯誤處理時，須注意，catch 是一定會印出來，而且不一定知道是那一行的錯誤，
// then 的函示一定會執行

fetch("http://127.0.0.1:5505/ES6/21-XMLHttpRequestAJAXToPromiseJSON.json").then((response)=> {
    return response.json();
}, (errorString) => {
    console.log("response error: " + errorString)
    // 而 fetch 的錯誤處理(第二個 callback) 會影響到下面的邏輯，若有 return，
    // 會導致第一個接在錯誤 callback 後的 then 的值變成接到 錯誤 callback 的 return 值
    return "error from reject"
    // 注意這若沒有 return 的話，因為 then 一定會執行，所以下方的 myJson 會印出 undefinded
}).then((myJson)=> {
    console.log(myJson)
},(errorString)=> {
    console.log(errorString)
})

// ## 正確的 Fetch 錯誤傳遞方式

fetch("http://127.0.0.1:5505/ES6/21-XMLHttpRequestAJAXToPromiseJSON.json").
then((response)=> {
    return response.json();
}, (errorString)=> {
    console.log(`response error: ${errorString}`)
    return Promise.reject("failed") // 透過此方式，可以正確的將 fetch 失敗(這裡是網域錯誤)時的錯誤處理導到接下來的 then 後的錯誤處理(第二個 callback)
}).then((myJson)=> {
    console.log(myJson);
}, (errorString)=> {
    console.log(`error: ${errorString}`)
})

// ## 總結
// 有錯誤時，Catch 優先取錯誤訊息
// 使用 return Promise.reject() 時，會將錯誤導到接下來 then 的第二個錯誤處理用 的 Callback
// Then 一定會執行