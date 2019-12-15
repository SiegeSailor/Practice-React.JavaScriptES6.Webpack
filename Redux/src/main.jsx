import url from "../scss/main.scss"

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime/runtime";

// 注意此 import 是針對於 web(nodejs 不可) ie 的 fetch 的 polyfill
// 一樣會報錯，但 ie console 中可以看到有發出 request
// 若不想在這裡 import，則可以在 webpack 的 entry 內設定
import "whatwg-fetch"

let a = "I am a GOD";

console.log(a)

class Demostration {
    constructor(props) {
        console.log("class constructor.")
    };

    consolePrint = () => {
        console.log("consolePrint");
    };

    // Promise 是屬於標準，即使編譯到 ES5 也是 Promise，這會導致在 IE 的環境下無法使用，
    // 此時必須使用 PloyFill(Babel 舊版)、core-js(Babel 新版)
    promiseRun = () => {
        let stepOne = () => {
            return new Promise(
                (resolve, reject) => {
                    setTimeout(()=> {
                        console.log("promiseRun stepOne");
                        resolve("promiseRun stepOne resolved.");
                        reject("promiseRun stepOne rejected.")
                    }, 200);
                }
            )
        }

        stepOne().then((resolveMessage)=> {
            console.log(resolveMessage);
        });
    }

    asyncAwaitRun = async () => {
        let stepOne = () => {
            return new Promise(
                (resolve, reject) => {
                    setTimeout(()=> {
                        console.log("asyncAwaitRun stepOne");
                        resolve("asyncAwaitRun stepOne resolved.");
                        reject("asyncAwaitRun stepOne rejected.")
                    }, 200);
                }
            )
        }

        const result = await stepOne();
        console.log(result)
    }

    fetchData = async () => {
        let response = await fetch("https://www.google.com.tw");
        console.log(response)
    }
}

let b = new Demostration();
console.log(new Demostration)
b.consolePrint();
b.promiseRun();
b.asyncAwaitRun();
b.fetchData