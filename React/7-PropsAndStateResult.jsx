class Result extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: props.count
    //     }
    // }
    // countPlusOneHandler(event) {
    //     console.log(event)
    //     console.log(`Result`, this.state.count)
    //     let { count } = this.state
    //     this.setState({ count: count + 1 })
    // }
    // ## 註解了原本的 constructor 與 function，
    // 這裡的概念是，因為外一層 7-PropsAndState 有用 state 控制的值，而這一層也有，
    // 這樣容易造成兩邊 state 的值不同、難以管理
    // 最好的方法，就是外一層用 state 管理自己、並用 state 傳進下一層 7-PropsAndStateResult
    // 而這個下一層就用 props 來接收數值
    constructor(props) {
        super(props)

        // ## 注意以下寫法是不可行的，因為 construtor 只會執行一次，這樣子值是不會更新的
        // 當然，如果在只執行一次的需求，那這樣是可行的
        // const {count, handler} = props;
        // this.count = count;
        // this.handler = handler;
    }
    render() {
        const {count, handler} = this.props
        return (
            <div>
                <h1>Count: {count}</h1>
                {/* 原本這個 button 有 onClick={this.countPlusOneHandler.bind(this)} */}
                {/* 但因為我們要用 state 變動本層與傳到下層、props 接收上層的管理方法 */}
                {/* 面對想在這層改變應該用 props 接收的值方法，就是去接收上一層改變值的 function */}
                {/* 這裡不用 .bind(this)，因為 state 不在這層 */}
                <button type="button" onClick={handler}>
                    Click Me 0
                </button>
            </div>
        )
    }
}

export default Result;