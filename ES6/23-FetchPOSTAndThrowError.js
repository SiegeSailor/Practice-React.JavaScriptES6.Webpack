// ## 沒有加上 https:// 的話，前面會自動附上 JS 檔所在的網域
const host = `https://fatraceschool.moe.gov.tw`;
const basePath = `/cateringservice/openapi`;
const accountSignUp = `/accountReg/`;
const URL = host + basePath + accountSignUp;

const data = {
    account: `lookswalidy@yahoo.com.tw`
}

const initSetting = {
    method: `POST`,
    body: JSON.stringify(data),
    mode: `no-cors`,
    headers: new Headers({
        'Content-Type': `application/json`,
        'Origin': `*`
    }),
    credentials: `include`,
}

fetch(URL, initSetting).then((response)=> {
    console.log(response)
    if(response.ok != true){
        // ## throw new Error 的訊息會自動傳到 catch
        throw new Error(`Newwork response was not ok`)
    }
}, (errorMessage)=> {
    // ## 這裡的錯誤處理是在於此 fetch 完全沒通時
    console.log(errorMessage)
}).catch((messageFromThrowError)=> {
    console.log(`There has been a problem: ${messageFromThrowError.message}`)
})