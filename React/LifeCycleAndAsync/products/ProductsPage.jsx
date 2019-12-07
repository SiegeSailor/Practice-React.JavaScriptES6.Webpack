import React, { Component } from 'react'

class ProductsPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        const {productService} = this.props
        // 因為 product 這類東西通常只顯示在特定頁面，這裡才會在 ProductsPage 載入時才帶入 products 資料
        // 以避免浪費
        productService.getProductsFromServer()
    }

    render = () => {
        console.log("ProductsPage render");
        
        const {products} = this.props
        const count = products.length
        return (<div>
            Has {count} products
        </div>)
    }
}

export default ProductsPage