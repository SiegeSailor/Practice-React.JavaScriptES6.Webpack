class InputTextWithPreview extends React.Component{
    constructor(props){
        super(props)
        // 若是在 constructor 中先 .bind(this)，那麼之後 render 中要指定到該 class 下的 function 時就不必再寫一次了
        // 或者 function 直接使用 arrow function 寫，因為 arrow function 的特性是會自動綁定 this
        // this.handler = this.handler.bind(this)
        
        this.state = {
            title: `8`
        }
    }

    handler = (event) => {
        // ## 直接用 obejct key 對應 event.target 裡面的 name (title) 和 value (我們打的字)))
        // 這樣會同時產生 name 和 value 這兩個變數
        const {name, value} = event.target;
        // 這裡不能直接輸入 name 當 key 使用，因為這樣會變成把 name 這個單詞變成一個 key，而我們是要用 name 這個變數去對應到 title 這個值，因此要加上 [] 做變數用
        // 一般字串或 React 元件的內變數是 ${} 和 {}，而 function 的變數指定則是 []
        this.setState({[name]: value}, ()=> {
            // 由於 setState 是非同步的進程，這樣直接接著 function 可以確保值是正確的
            console.log(this.state)
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* 注意這裡的 name 的值，再回頭看 handler */}
                <input type="text" name="title" value={this.state.title} onChange={this.handler}/>
            </div>
        )
    }
}

ReactDOM.render(<InputTextWithPreview />,document.getElementById(`root`))