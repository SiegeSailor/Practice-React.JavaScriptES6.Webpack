import React from "react";

// ## functional component 不適合用於這類 timer 操作，因為我們需要 componentDidMount
// 不適合的原因是因為 interval 在 loading 結束的情況下還會繼續計算，需要額外去關

// let str = `Loading`
// const LoadingView = () => {
//     // 在 React 內若不使用 state 的機制操作 DOM，則最好使用 Ref
//     const view = React.createRef();
//     setInterval(()=> {
//         str = str + '.';
//         view.current.innerHTML = str
//     }, 500)

//     return (<h1 ref={view}>{str}</h1>)
// }

class LoadingView extends React.Component {
    constructor(props){
        super(props)
        this.view = React.createRef();
        this.str = `Loading`;
    }

    componentDidMount = () => {
        // 選用 componentDidMount 是因為一開始就有 Loading 可以顯示
        this.timer = setInterval(()=> {
            this.str = this.str + '.';
            this.view.current.innerHTML = this.str
            console.log(this.str)
        }, 500)
    }

    componentWillUnmount = () => {
        if(this.timer) {
            clearInterval(this.timer)
        }
    }

    render = () => {
        return (
            <h1 ref={this.view}>{this.str}</h1>
        )
    }
}

export default LoadingView