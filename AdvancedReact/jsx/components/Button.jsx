import React, { Component } from 'react'
import CounterContext from './../contexts/counterContext.jsx'

class Button extends Component {
    // static contextType = CounterContext

    render = () => {
        // const { number } = this.props
        // const { handler } = this.context

        // 使用 HOC 在上面再包一層的好處：將所有值 (props 與 context) 都包在 props 中
        // 減少邏輯處理

        const { number, handler } = this.props

        return (
            <p>
                <button
                    type="button"
                    onClick={
                        () => handler(number)
                    }
                >
                    {number}
                </button>
            </p>
        )
    }
}

export default Button;