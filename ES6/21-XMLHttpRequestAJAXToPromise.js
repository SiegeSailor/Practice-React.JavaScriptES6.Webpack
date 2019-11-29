const sendXHR = (url, success, failed) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                let result = xhr.response;
                success(result)
            } else {
                failed(xhr.status)
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

sendXHR("http://127.0.0.1:5501/ES6/21-XMLHttpRequestAJAXToPromiseJSON.json", (result) => {
    console.log(result)
}, (statusCode) => {
    console.log("Failed: " + statusCode)
});

const sendXHRPromiseVer = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            console.log("xhr.readyState: " + xhr.readyState)
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({result: xhr.response})
                } else {
                    reject({statusCode: xhr.status})
                }
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    })
};

sendXHRPromiseVer(
    "http://127.0.0.1:5501/ES6/21-XMLHttpRequestAJAXToPromiseJSON.json",
).then((result) => {
    console.log(result.result)
}).catch((result) => {
    console.log("failed:" + result.statusCode)
})