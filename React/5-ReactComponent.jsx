// import 後，若要使用，應該要用 new ClassOrFunctionName 來使用，
// 然而，因為 React 都 extends 自 React.Component，可以直接當作 jsx 使用而不用 new
import {ShoppingCard} from "./5-ReactComponentLibrary.jsx";
ReactDOM.render(<ShoppingCard card="8842-4412"/>, document.getElementById(`main`))

class ShoppingList extends React.Component {

    // 這裡為示範 props 的由來，實際上不需要宣告這些 constructor
    constructor(props) {
        // super 的意思就是找到父 class 的 constructor，並將帶入的值用父 class 的 constructor 執行
        // super 與 constructor 應用可見 ES6 8-ClassSetterGetter.js
        super(props)
    }

    render() {
        return (
            // jsx 中的 class 需使用 className 代替，因為 class 已經是 js 的
            <div className="shopping-list">
                {/* 在 React 中，props 是一個被傳進來而且無法改變的值 */}
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                    <li>{this.props.app}</li>
                </ul>
                {/* 如果有 import class 進來，想要並行 render ( 因為 ReactDOM 對指定 id 的繪製會被後面的取代 ) 的話， */}
                {/* 可以直接將該 class 放在這 */}
                {/* 要注意，render() 內的 return 的東西必須被一個 tag 包住 */}
                <ShoppingCard card="4482-0091-5623-1919" />
            </div>
        );
    }
}

// 看似 ReactDOM.render 是取物件中的 render 屬性來 render
// {this.props.name} 是 extends 自 React.Componet 的指定方法

// 也可以使用 variable 和 {} 的帶入方式來帶入。與 ES6 的字串相同，variable 都以 {} 帶入
let app = `WeChat`;
ReactDOM.render(<ShoppingList name="Social APP" app={app} />, document.getElementById(`root`))