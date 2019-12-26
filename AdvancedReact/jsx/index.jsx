import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CounterContext from './contexts/counterContext.jsx'
import Button from './components/Button.jsx';
import EnhancedButton from "./enhancedComponents/Button.jsx"
import DisplayView from './components/DisplayView.jsx'
import EnhancedDisplayView from "./enhancedComponents/DisplayView.jsx"



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handler = (number) => {
        this.setState({ counter: this.state.counter + number })
    }

    getContextValue = () => {
        return {
            state: this.state,
            handler: this.handler
        }
    }

    render = () => {
        return (
            <CounterContext.Provider value={ this.getContextValue() }>
                <DisplayView />
                {/* <EnhancedDisplayView></EnhancedDisplayView> */}
                {/* <Button number={1} />
                <Button number={-1} /> */}
                <EnhancedButton number={1} />
                <EnhancedButton number={-1} />
            </CounterContext.Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))