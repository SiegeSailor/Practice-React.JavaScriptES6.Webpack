class Helmet extends React.Component {
    constructor(props) {
        super(props)
        // ## constructor 的部分見下方 input 範例
        // React props 的特點，props 只能由外面 ( 如 ReactDOm.render 的地方 ) 寫入值，不能在內部指定或改變
        props.value = `props value`;
        // 要從內部指定，就使用 constructor 的方法
        this.value = `this value`;

        // 若要設定能改變值的 value，必須使用 state。在 constructor 建構時可以先設定第一次
        this.state = {
            value: `state value`,
        }
    }
    inputHandler(event) {
        // ## 見下方有 onChange 的 input
        // 嘗試使用 onChange 指定 function 改變值。當用 console.log 印出後，會發現的確有執行，值也的確有改變
        // 不能成功的原因是因為 React 是用 state 來管控會改變的值
        console.log(`inputHandler`)
        this.value = `inputHandler value`;
        console.log(this.value)

        // 透過 onChange 指定 function 來改變 state 的值
        // this.state.value = `inputHandler state value`

        // 雖然上面的方法理論正確，然而無法作用，因為這邊的 this 並不一樣，於是，我們在 input 內的 onChange
        // 的 function 加上 .bind(this)。(見下方)

        // 然而，還是無法作用，這是因為 React 要求，除了 constructor 內外，都必須使用 setState() 來改變 state 的值
        // 再見下方的 input
        this.setState({ value: `inputHandler setState value` })
        // 接著，可以使用以下方法指定到使用者輸入的值，讓 input 正常化
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <p>I am here.
            {/* 因為在 jsx 中，每個標籤都必須要閉合，而 <br> 本身是一個的，這時就必須用 <br /> 獨自閉合 */}
                <br />
                You are there.
            <br></br>
                {/* input 也是一個常見的必須單獨閉合的元素 */}
                {/* value 必須寫成 defaultValue，這點跟 class 必須寫成 className 一樣 */}
                <input type="number" defaultValue="2" placeholder="Please enter 2" />
                <br />

                {/* ## input 的部分請見上方的 constructor */}
                {/* 不管用何種方法，value 值若指定，都會變成 readonly */}
                <input type="text" value={this.props.value} />
                <br />
                <input type="text" value={this.value} />

                {/* ## 見上方 inputHandler 以及 constructor 內的 state */}
                {/* 若要使 value 正常運作，則必須使用 onChange。這邊的 onChange 與 HTML 的 onChange 不同， */}
                {/* 是 React 模擬出來的。而且只是指定，不需後面加上 () 來執行 */}
                <br />
                <input type="text" value={this.value} onChange={this.inputHandler} />
                <br />
                <input type="text" value={this.value} onChange={this.inputHandler.bind(this)} />
                <br />

                {/* 用 {this.state.value} 可以指定到 constructor 的 state 的初次設值 */}
                <input type="text" value={this.state.value} onChange={this.inputHandler.bind(this)} />
            </p>
        );
    }
}

ReactDOM.render(<Helmet value="render value"></Helmet>, document.getElementById(`root`));