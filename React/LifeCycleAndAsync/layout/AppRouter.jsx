import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import UserPage from '../user/UserPage.jsx'
import LoginPage from '../user/LoginPage.jsx'
import CartPage from '../cart/CartPage.jsx'
import ProductsPage from '../products/ProductsPage.jsx'
import HomePage from '../home/HomePage.jsx'

class AppRouter extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            // 要啟用 React Rounter 的區塊需用 Router 包起來
            <Router>
                {this.props.children}
                {/* 這個 main 標籤來自 Nav.jsx 的
                <TopAppBarFixedAdjust>
                    My exciting content!
                </TopAppBarFixedAdjust>
                因為放在一個頁面理論上只能有一個 main，而 main 拿來放主要內容，
                而因為我們分層的關係、這個 main 裡的值應該是被 Router 載入的，
                若要被載入，就不可能放在 Nav 中，
                因為目前這裡的 Nav 是透過 App.jsx 以 this.props.children 的方式傳入，
                若從 Nav 傳入 main，則必須在 Nav 的 main 內傳入 Route 載入的東西，這就形成了互包，
                會使維護便得複雜
                */}
                <main className="mdc-top-app-bar--fixed-adjust">
                {/* Switch 是能夠限制從上而下、優先選擇唯一最符合的路徑去載入 component */}
                <Switch>
                    {/* 如果要傳 props，就不能直接用 component，必須用 render。
                    也可以將 render 寫成一個 function component 來用 component */}
                    <Route path="/" exact component={HomePage}></Route>

                    <Route path="/products/" render={(props)=> 
                        <ProductsPage productService={this.props.productService} 
                        products={this.props.products} {...props}></ProductsPage>
                    }></Route>

                    <Route path="/cart/" render={(props)=> (
                        this.props.userService.isLoggedIn() ?
                    <CartPage 
                        userService={this.props.userService} 
                        user={this.props.user} 
                        productService={this.props.productService} 
                        products={this.props.products} 
                    {...props}></CartPage> :
                    <Redirect to="/user/login/"></Redirect>
                    )}></Route>

                    {/* 跟 / 一樣，因為有 /user/ 後有 /user/login，必須使用 exact 來指名 */}
                    <Route exact path="/user/" render={(props)=>
                    (
                        this.props.userService.isLoggedIn() ?
                    <UserPage 
                        userService={this.props.userService} 
                        user={this.props.user} 
                    {...props}>  
                    </UserPage> : 
                    // 在 Route 中，若要重新導向，除了三則判斷外亦需要 Redirect 來導向
                    <Redirect to="/user/login/"></Redirect>
                    )}></Route>

                    <Route path="/user/login" render={(props)=>(
                        this.props.userService.isLoggedIn() ?
                        <Redirect to="/user/"></Redirect>
                        : <LoginPage
                        user={this.props.user}
                        userService={this.props.userService}
                    {...props} />)
                    }></Route>
                    {/* 沒有設定 path 就是指沒有任何符合時，也就是模擬 404 */}
                    <Route render={props=><h1>404</h1>}></Route>
                </Switch>
                </main>
            </Router>)
    }
}

export default AppRouter