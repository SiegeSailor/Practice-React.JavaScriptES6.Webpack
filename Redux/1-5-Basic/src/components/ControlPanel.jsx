import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions.js'

class ControlPanel extends React.Component {

    incrementHandler = (event) => {
        // this.setState((prevState, props)=>({counter: prevState.counter + 1}));
        this.props.increment();
    }

    render = () => {
        console.log(this.props)
        return (
            <React.Fragment>
                <button type="button" 
                style={{marginRight:"12px"}}
                // 注意與 decrement 的差異，可以直接使用來自 props 的 function key
                onClick={this.incrementHandler}>
                    INCREMENT
                </button>
                <button type="button"
                onClick={this.props.decrement}>
                    DECREMENT
                </button>
            </React.Fragment>
        )
    }
}

// === 以下移到 ../redux/actions.js 中 ===
// 這裡演示把 dispatch 傳入 Component 的作法
// const increment = () => {
//     return { type: 'INCREMENT' }
// };
// const decrement = () => {
//     return { type: 'DECREMENT' }
// }
// === 以上移到 ../redux/actions.js 中 ===

const mapDispatchToProps = { increment, decrement }

let functionForControlPanel = connect(null, mapDispatchToProps)
let ControlPanelContainer = functionForControlPanel(ControlPanel)
export default ControlPanelContainer;
// 以上三行亦可改寫為以下這行
// export default connect(null, mapDispatchToProps)(ControlPanel)