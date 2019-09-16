import Result from "./7-PropsAndStateResult.jsx"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    countPlusOneHandler(event) {
        console.log(event)
        // React 中 button 的 event.target 會在第二次後變成 null，為了避免這種情況，應使用 persist()
        event.persist();

        // let count = this.state.count;
        // count = count + 1;
        console.log(`Counter`, this.state.count)
        let { count } = this.state
        this.setState({ count: count + 1 })
    }
    render() {
        return (
            <div>
                {/* 因為下層是用 props 接收數值，而又要讓下層有改變值的方法 */}
                {/* 因此直接傳改變值的 handler function 下去 */}
                {/* 注意這邊，因為 state 在這層，所以仍然要 .bind(this) */}
                {/* 另外注意 {...this.tate}，這樣能把所有的 state 值傳下去，因為下一層是用 props 接收，所以不用擔心誤用 */}
                <Result {...this.state} count={this.state.count} handler={this.countPlusOneHandler.bind(this)}></Result>

                <button type="button" onClick={this.countPlusOneHandler.bind(this)}>
                    Click Me 1
                </button>
                <button type="button" onClick={this.countPlusOneHandler.bind(this)}>
                    Click Me 2
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>, document.getElementById(`root`))