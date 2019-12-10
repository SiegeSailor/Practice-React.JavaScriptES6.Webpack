import React, {Component} from "react";
import ReactDOM from "react-dom";
import UserPage from "./user/UserPage.jsx";
import LoginPage from "./user/LoginPage.jsx";
import HomePage from "./home/HomePage.jsx";
import ProductsPage from "./products/ProductsPage.jsx";
import CartPage from "./cart/CartPage.jsx";
import AppRouter from "./layout/AppRouter.jsx"
import Nav from './layout/Nav.jsx'

// ### 因引入 React Router 而不需要
// import Nav from "./layout/Nav.jsx"
// import NavRoutes from "./configs/NavRoutes.json"

import UserService from "./utils/UserService.js";
const userService = new UserService();

import ProductService from "./utils/ProductService.js";
const productService = new ProductService;

// ### 因引入 React Router 而不需要
// import PathService from "./utils/PathService.js";
// const pathService = new PathService();

import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // ### 因引入 React Router 而不需要
            // path: window.location.pathname,
            // 因為要實做 SPA，將 path 統一交由 PathService 管理
            // path: pathService.path,

            user: userService.currentUser,
            products: productService.products
        }


        // 注意這裡 UserPage 和 LoginPage 傳入的 props
        // 因為這裡是在 constructor 內，是程式碼建立後就建立的物件，
        // 因此在一開始就把值傳入，後續的 state 變更是沒辦法繼續影響的
        // this.pages = {
        //     "index.html": <HomePage/>,
        //     "/products/": <ProductsPage></ProductsPage>,
        //     "/user/": <UserPage user={this.state.user}></UserPage>,
        //     "/user/login/": <LoginPage user={this.state.user} userService={userService}></LoginPage>,
        //     "/cart/": <CartPage></CartPage>
        // }

        userService.register((user) => {
            this.setState({user: user})
        })

        productService.register((products) => {
            this.setState({products: products})
        })

        // ### 因引入 React Router 而不需要
        // pathService.register((path)=> {
        //     this.setState({path: path})
        // })
    }

    // ### 因引入 React Router 而不需要
    // getPath = (key) => {
    //     // 因應上方 this.pages 因為 props 傳入後無法因應 state 變更而改變的寫法
    //     const path = {
    //         "/": <HomePage/>,
    //         "/products/": <ProductsPage products={this.state.products} productService={productService}></ProductsPage>,
    //         "/user/": <UserPage user={this.state.user}></UserPage>,
    //         "/user/login/": <LoginPage user={this.state.user} userService={userService}></LoginPage>,
    //         "/cart/": <CartPage></CartPage>
    //     }
    //     return path[key]
    // }

    render = () => {
        // ### 因引入 React Router 而不需要
        // 將 path 當作 key 去指向 this.pages 內的頁面元件
        // path 在 state 內隨著頁面動態改變、接著載入相對應的 js
        // console.log(this.state)
        // // let page = this.pages[this.state.path]
        // let page = this.getPath(this.state.path)
        // if (this.state.user.id){
        //     // page = <UserPage ></UserPage>
        //     page = this.getPath("/user/")
        // }

        // // 解決直接進入 UserPage 卻因為沒登入而沒有使用者狀態而報錯的情況
        // if (this.state.path == "/user/" && !this.state.user.id){
        //     // page = <LoginPage user={this.state.user} userService={userService}></LoginPage>
        //     page = this.getPath("/user/login/")
        // }

        return (
            <div>
                {/* // ### 因引入 React Router 而不需要 */}
                {/* <Nav navRoutes={NavRoutes} pathService={pathService} {...this.state}></Nav> */}
                {/* {page} */}
                
                <AppRouter
                    userService={userService} 
                    user={this.state.user} 
                    productService={productService} 
                    products={this.state.products}>
                    {/* 因為 Nav 內的 Link 一定要在 Router 內，而 Router 標籤在 AppRouter 內
                    因此擺在 AppRouter 內以 this.props.children 的方式傳入 */}
                    <Nav
                        userService={userService}
                        user={this.state.user} 
                        productService={productService} 
                        products={this.state.products}
                    >
                    </Nav>
                </AppRouter>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>, document.getElementById("app"));