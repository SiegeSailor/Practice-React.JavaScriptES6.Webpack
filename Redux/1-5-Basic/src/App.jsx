import React from 'react'
import ControlPanelContainer from './components/ControlPanel.jsx'
import { connect } from 'react-redux'
import { getConterState } from './redux/selectors.js'

class App extends React.Component {
    constructor(props){
        super(props)
        // 原先應在 App 中控制 state，再由 props 將 state 與 Handler 傳入 ControlPanel 做控制，
        // 但因為值現都由 store 以 props 傳入，不再藉由 state 控制了。
        // this.state = {
        //     counter: 0
        // }
    }

    render = () => {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <ControlPanelContainer />
            </div>
        )
    } 
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      counter: getConterState(state)
    }
}

// let functionForApp = connect(mapStateToProps, null)
// let AppContainer = functionForApp(App)
// export default AppContainer;
// 以上三行亦可簡寫為以下
export default connect(mapStateToProps, null)(App)