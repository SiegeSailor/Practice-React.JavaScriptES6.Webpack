import React, { Component } from 'react'
import CounterContext from './../contexts/counterContext.jsx'
import enhanced from './../hoc/enhanced.jsx'

class DisplayView extends Component {
    // static contextType = CounterContext

    render = () => {
        // const { counter } = this.context.state
        // 改由 HOC 傳入
        const { counter } = this.props.state

        return (
            <p>Counter: {counter}</p>
        )
    }
}

const EnhancedDisplayView = enhanced(DisplayView, CounterContext)

// 現在 Button 是分開成元件寫，
// 也可以像這邊這樣，在輸出前透過 enhanced 連結(跟 redux 的 connect 有點像)

export default EnhancedDisplayView;