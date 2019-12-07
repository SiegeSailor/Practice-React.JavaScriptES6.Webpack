import React, {Component} from "react";
import ReactDOM from "react-dom";
import UserPage from "./user/UserPage.jsx";
import LoginPage from "./user/LoginPage.jsx";
import HomePage from "./home/HomePage.jsx";
import ProductsPage from "./products/ProductsPage.jsx";
import CartPage from "./cart/CartPage.jsx";
import Nav from "./layout/Nav.jsx"
import NavRoutes from "./configs/NavRoutes.json"

import UserService from "./utils/UserService.js";
const userService = new UserService();

import ProductService from "./utils/ProductService.js";
const productService = new ProductService;

import PathService from "./utils/PathService.js";
const pathService = new PathService();

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // path: window.location.pathname,
            // 因為要實做 SPA，將 path 統一交由 PathService 管理
            path: pathService.path,
            user: userService.currentUser,
            products: productService.products
        }


        // 注意這裡 UserPage 和 LoginPage 傳入的 props
        // 因為這裡是在 constructor 內，是程式碼建立後就建立的物件，
        // 因此在一開始就把值傳入，後續的 state 變更是沒辦法繼續影響的
        // this.pages = {
        //     "/React/LifeCycleAndAsync/index.html": <HomePage/>,
        //     "/React/LifeCycleAndAsync/products/": <ProductsPage></ProductsPage>,
        //     "/React/LifeCycleAndAsync/user/": <UserPage user={this.state.user}></UserPage>,
        //     "/React/LifeCycleAndAsync/user/login/": <LoginPage user={this.state.user} userService={userService}></LoginPage>,
        //     "/React/LifeCycleAndAsync/cart/": <CartPage></CartPage>
        // }

        userService.register((user) => {
            this.setState({user: user})
        })

        productService.register((products) => {
            this.setState({products: products})
        })

        pathService.register((path)=> {
            this.setState({path: path})
        })
    }

    getPath = (key) => {
        // 因應上方 this.pages 因為 props 傳入後無法因應 state 變更而改變的寫法
        const path = {
            "/React/LifeCycleAndAsync/index.html": <HomePage/>,
            "/React/LifeCycleAndAsync/products/": <ProductsPage products={this.state.products} productService={productService}></ProductsPage>,
            "/React/LifeCycleAndAsync/user/": <UserPage user={this.state.user}></UserPage>,
            "/React/LifeCycleAndAsync/user/login/": <LoginPage user={this.state.user} userService={userService}></LoginPage>,
            "/React/LifeCycleAndAsync/cart/": <CartPage></CartPage>
        }
        return path[key]
    }

    render = () => {
        // 將 path 當作 key 去指向 this.pages 內的頁面元件
        // path 在 state 內隨著頁面動態改變、接著載入相對應的 js
        console.log(this.state)
        // let page = this.pages[this.state.path]
        let page = this.getPath(this.state.path)
        if (this.state.user.id){
            // page = <UserPage ></UserPage>
            page = this.getPath("/React/LifeCycleAndAsync/user/")
        }

        // 解決直接進入 UserPage 卻因為沒登入而沒有使用者狀態而報錯的情況
        if (this.state.path == "/React/LifeCycleAndAsync/user/" && !this.state.user.id){
            // page = <LoginPage user={this.state.user} userService={userService}></LoginPage>
            page = this.getPath("/React/LifeCycleAndAsync/user/login/")
        }

        return (
            <div>
                <Nav navRoutes={NavRoutes} pathService={pathService} {...this.state}></Nav>
                {page}
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>, document.getElementById("app"));