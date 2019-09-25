class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 1,
            checkboxValue: 1
        }
    }

    handler = (event) => {
        const {name, value, type} = event.target;
        // 注意 checkbox 的 checked，當使用 checked 時值的運作是對的，但無論怎麼點擊都會是原本的狀態，因此無法互動，
        // 而當使用 defaultChecked 時，盡管可以正常操作，送出的值卻無論如何都是固定的 ( 會是使 checked = true 的值的條件，在這是
        // this.state.checkboxValue == 1，因此永遠值是 1 )
        // 最好的辦法，是使用 defaultChecked，並利用 type 做額外判斷處理
        if (type == "checkbox" && this.state[name] == value) {
            // 當值相等，即當 checkValue 等於 html 的 value，1 時，則將值設為 null，因為那代表是原先已是打勾的狀態
            value = null;
        }

        this.setState({
            [name]: value
        }, () => {
            console.log(name);
            console.log(value);

            // 注意 radio 中 checked 的 attribute，在 react 中的 checked 與 html 的 checked 其實是不同的，
            // 若要兩值運作方式相等，那麼在 react 中應使用 defaultChecked
            let radios = document.querySelectorAll(`input`);
            console.log(radios[1].getAttribute(`checked`));
        })
    }

    render = () => {
        return (
            <form action="">
                <label htmlFor="">
                    <input
                        name="checkboxValue"
                        type="checkbox"
                        value="1"
                        onChange={this.handler}
                        defaultChecked={this.state.checkboxValue == 1}/>
                    Checkbox Value 1
                </label>
                <label htmlFor="">
                    <input
                        name="test"
                        type="radio"
                        value="1"
                        defaultChecked={this.state.test == 1}
                        onChange={this.handler}/>
                    測試 1
                </label>
                <label htmlFor="">
                    <input
                        name="test"
                        type="radio"
                        value="2"
                        defaultChecked={this.state.test == 2}
                        onChange={this.handler}/>
                    測試 2
                </label>
                <label htmlFor="">
                    <input
                        name="test"
                        type="radio"
                        value="3"
                        defaultChecked={this.state.test == 3}
                        onChange={this.handler}/>
                    測試 3
                </label>
                <button type="submit">提交</button>
            </form>
        )
    }
}

ReactDOM.render(
    <App></App>, document.getElementById(`app`))