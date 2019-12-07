import React, {Component} from "react";
import UserService from "./../utils/UserService.js";

class LoginPage extends Component {
    constructor(props) {
        super(props)

        // 這個 state 是沒必要提取到外層 App.jsx 的，因為只有在這裡有用
        this.state = {
            username: ``,
            password: ``
        }

        this.form = React.createRef()

        // 如果使用者已登入，也就是在 UserPage 頁面已 fetchdata 的話，則直接切換到 UserPage
        // this.userService = new UserService();
        // const user = this.userService.getCurrentUser();
        // if (user.id){
        //     window.location.pathname = "/React/LifeCycleAndAsync/user/"
        // }
        // 將上述程式碼重新包裝於 UserService 中方便其他地方使用，以下是從包裝後的 UserService 取來使用的方法
        // this.userService = new UserService();
        // this.userService.redirectIfUserLogin("/React/LifeCycleAndAsync/user/")
        // 然而，在真正的產品中，沒有後端是不能做使用者登入狀態這件事的，因此也不可能在這裡取得 user
        // 真正作法見下方的 this.redirectIfLogin
    }

    componentDidMount = () => {
        // 因為重新導向改由 App.jsx 控制，這個就不需要了
        // this.redirectIfLogin()
        
        window.history.pushState("", "", "/React/LifeCycleAndAsync/user/login")
    }

    // redirectIfLogin = async () => {
    //     const userService = this.props.userService;
    //     try {
    //         await userService.getUserFromServer()
    //         // 因為使用者狀態改由 App.jsx 控制，不再依賴 UserService 做使用者狀態檢測了
    //         // userService.redirectIfUserLogin(`/React/LifeCycleAndAsync/user/`)
    //     } catch (error) {
    //         this.showError(error)
    //     }
    // }

    fetchData = async () => {
        // 此 function 是由 UserPage 複製、更改而來的

        try {
            // 由 App.jsx 傳入 user 與 userService
            const userService = this.props.userService;
            await userService.logIn(this.state.username, this.state.password);
            
            // 因為使用者狀態改由 App.jsx 控制，不再依賴 UserService 做使用者狀態檢測了
            // userService.redirectIfUserLogin("/React/LifeCycleAndAsync/user/")
        } catch(error) {
            this.showError(error)
        }
    }

    inputHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    showError = (error) => {
        this.setState({error: error})
    }

    login = (event) => {
        event.preventDefault();
        this.fetchData();
    }

    render = () => {
        return (
            <div>
                <form ref={this.form}>
                    <h1>Log In</h1>
                    <p><input type="text" name="username" value={this.state.username} onChange={this.inputHandler} /></p>
                    <p><input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/></p>
                    {
                        this.state.error ?
                        (
                            <p style={{color: `red`}}>
                                Error: {this.state.error.message}
                            </p>
                        ): null
                    }
                    <button type="submit" onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;