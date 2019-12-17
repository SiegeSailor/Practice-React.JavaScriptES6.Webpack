import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store.js';
import AppContainer from './App.jsx'

// === 以下是用 JS 模擬 Redux createStore 的簡易流程 ===
// const createStore = (dispatch, initState) => {
//     let state = initState === null ? "" : initState
    
//     const subscriptions = []

//     const doCallbacks = () => {
//         subscriptions.forEach(callback => {
//             callback()
//         });
//     }

//     return {
//         getState: () => {
//             return state
//         },
//         subscribe: (callback) => {
//             subscriptions.push(callback)
//         },
//         dispatch: (action) => {
//             const result = dispatch(state, action)
//             if (result != state){
//                 state = result
//                 doCallbacks()
//             }
//         }
//     }
// }
// === 以上是用 JS 模擬 Redux 的簡易流程 ===

// === 以下已移到 src/redux/reducers/main.js 中 ===
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {...state, counter: state.counter + 1}
//         case 'DECREMENT':
//             return {...state, counter: state.counter - 1}
//         default:
//             return state
//     }
// }
// === 以上已移到 src/redux/reducers/main.js 中 ===

// === 以下已移到 src/redux/store.js 中 ===
// const store = createStore(reducer, {counter: 0})
// === 以上已移到 src/redux/store.js 中 ===

// === 以下是 Redux 官方範例 ===
// store.subscribe(() => { console.log(store.getState()) })
// store.subscribe(() => { console.log("===") })

// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })
// === 以上是 Redux 官方範例 ===

// 為什麼使用 Redux 配合 React？
// React 中是以 Stats, Props 的改變來呼叫 Event 使 UI 改變，
// 但若是有上下層關係的 UI，在下層的改變必須由上層傳下的 Handler 做改變，或者是外面的 Service，
// 而層數越多、耦合度會越高。
// 若是使用 Redux，則可以在任何地方直接發出 Event、回到外部狀態機中，
// 再從上而下地更新 UI，
// 改善了 React 中最難維護的弊病之一。

// Redux 實踐流程
// 1. 建立 reducer：確認各個 action.type 所要進行對值的事
// 2. 用剛建立的 reducer 利用 createStore 建立一個 store 來作為一個狀態機
// 3. 將會在 Component 中用到、顯示的值整理到 mapStateToProps 中
// 4. 使用 connect，將需要將值傳入的 Component 與 mapStateToProps 連結
// 5. 將會與 reducer 的 action.type 對應的指令以 return { type: "對應的指令" } 各別包裝，成為 dispatch
// 6. 將會在 Component 中用到的 dispatch 整理到 mapDispatchToProps 中
// 7. 使用 connect，將會需要利用 dispatch 改變 store 內的 state 來觸發 reducer 的 Compoennt 與 dispatch 連結
// 8. 使用 Provider，將最終進入點包在 Provider 內並用 props 的方式將 store 傳入

// === 以下已移到 src/App.js 中 ===
// class App extends React.Component {
//     constructor(props){
//         super(props)
//         // 原先應在 App 中控制 state，再由 props 將 state 與 Handler 傳入 ControlPanel 做控制，
//         // 但因為值現都由 store 以 props 傳入，不再藉由 state 控制了。
//         // this.state = {
//         //     counter: 0
//         // }
//     }

//     render = () => {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.counter}</h1>
//                 <ControlPanelContainer />
//             </div>
//         )
//     } 
// }
// === 以上已移到 src/App.js 中 ===

// === 以下已移到 src/component/ControlPanel.js 中 ===
// class ControlPanel extends React.Component {

//     incrementHandler = (event) => {
//         // this.setState((prevState, props)=>({counter: prevState.counter + 1}));
//         this.props.increment();
//     }

//     decrementHandler = (event) => {
//         // this.setState((prevState, props)=>({counter: prevState.counter - 1}));
//         this.props.decrement();
//     }

//     render = () => {
//         console.log(this.props)
//         return (
//             <React.Fragment>
//                 <button type="button" 
//                 style={{marginRight:"12px"}}
//                 onClick={this.incrementHandler}>
//                     INCREMENT
//                 </button>
//                 <button type="button"
//                 onClick={this.decrementHandler}>
//                     DECREMENT
//                 </button>
//             </React.Fragment>
//         )
//     }
// }
// === 以上已移到 src/component/ControlPanel.js 中 ===

// === 以下已移到 src/App.js 中 ===
// 這裡演示把值傳入 Component 內的作法
// const mapStateToProps = (state /*, ownProps*/) => {
//     return {
//       counter: state.counter
//     }
// }

// let functionForApp = connect(mapStateToProps, null)
// let AppContainer = functionForApp(App)
// === 以上已移到 src/App.js 中 ===

// === 以下已移到 src/components/ControlPanel.jsx ===
// 這裡演示把 dispatch 傳入 Component 的作法
// const increment = () => {
//     return { type: 'INCREMENT' }
// };
// const decrement = () => {
//     return { type: 'DECREMENT' }
// }
// const mapDispatchToProps = { increment, decrement }

// let functionForControlPanel = connect(null, mapDispatchToProps)
// let ControlPanelContainer = functionForControlPanel(ControlPanel)
// === 以上已移到 src/components/ControlPanel.jsx ===

const root = document.getElementById("root");
ReactDOM.render(<Provider store={store}>
        <AppContainer />
    </ Provider>, root);