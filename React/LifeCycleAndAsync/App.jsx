import React from "react"
import ReactDOM from "react-dom"
import User from "./user.json"
import UserEditor from "./UserEditor.jsx"
import UserVideos from "./UserVideos.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: User,
        }
        this.thisForm = React.createRef();
    }

    handler = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }

    static getDerivedStateFromProps = (props, state) => {
        // 虛擬 DOM 將要繪製前，也就是原本的 componentWillMount，原本的已在新版 React 中拿掉
        // state 改變時會到此 lifecycle
    }

    UNSAFE_componentWillMount = () => {
        // 如果要繼續使用 componentWillMount，須改用此名稱
    }

    componentDidMount = () => {
        // # 表示在虛擬 DOM 繪製完成後，在這裡可以抓到 ref 的 current 物件
        // # 什麼會用到 ref 和抓在虛擬 DOM 繪製後？
        // 1. input
        // 2. UI 動作，通常建立在原生 DOM 下
        // 3. HTML Canvas
        // 4. iframe 的 onload 事件
        // 5. video audio image
        // 6. lazy load
        // 7. focus
        // 8. 自己建立出來的 component 是無法在引用他的層中使用 ref 的，必須在該 component 中使用

        // state 改變時不會到此 lifecycle，此 lifecycle 此在虛擬 DOM 繪製完成後，也就是初始時
    }

    shouldComponentUpdate = (nextProps, nextState, nextContext) => {
        // 存在 state 變化，在 render 之前
        // 若 return false，則會擋住接下來的 state 變化
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        // 若要使用此 lifecylce，則必須同時使用 componentDidUpdata，
        // 因為此 lifecycle 的 return 值會是 componentDidUpdate 的輸入值

    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log(snapshot)
    }

    componentWillUnmount = () => {
        // 當該 DOM 不再滿足出現條件時，通常會是在 render 內的 component 達不到出現條件而消失時
    }

    

    submit = (event) => {
        event.preventDefault();
        console.log("Click")
        // # 當一個 DOM 物件創建後，id 會自動成為 window 下的物件，此時我們可使用 submit() 來使他提交
        window.thisForm.submit();

        // # 但通常而言，我們應該先取得該 DOM 再執行
        // const thisFormDOM = document.getElementById("thisForm")
        // thisFormDOM.submit();

        // # 而在 React 中，我們可以創造 Ref 來指向該物件
        // 1. 首先在 constructor 使用 React.createRef() 來創造
        // 2. 在 render 中用 ref={} 指明要 ref 的物件
        // 3. 在此使用 .current 來指出現在已被創造出的物件，current 即代表是在虛擬 DOM 創造後出現的，
        // 因此若在 constructor 中使用是找不到的，因為還未創健
        this.thisForm.current.submit();

        // ref 的值也可以接 function 或 props，邏輯是在 contructor 宣告一個 this. 的值後，
        // 在 render 的 DOM 內使用 ref 去到能將該 DOM 指向該 this. 的值的 function 或 props，
        // 從而達到 ref 的功用
        // 應參考 https://reactjs.org/docs/refs-and-the-dom.html 的下方
    }

    render = () => {
        return (
            <div>
                <h1>TW</h1>
                {/* 注意前者，不使用 key 直接傳入，使接收的 function 可以直接解構 */}
                {/* 後者只是範例，示範一般用 key 的傳法 */}
                {/* 因應範例需求已取消，這裡留下註解 */}
                {/* <UserEditor {...this.state.user} handler={this.handler}/> */}
                <UserEditor user={this.state.user} handler={this.handler} />

                {/* 這裏除了不用 key 外，還直接指定了要傳的值 */}
                <UserVideos {...this.state.user.videos} />

                <h1>Refs</h1>
                <form action="" id="thisForm" ref={this.thisForm}>
                    <input type="text" name="value" value="" />
                    <br></br>
                    <button type="submit" onClick={this.submit}>Submit</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))