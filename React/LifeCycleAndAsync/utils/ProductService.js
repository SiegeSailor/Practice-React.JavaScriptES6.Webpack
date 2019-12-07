const productsUrl = () => {
    return `http://127.0.0.1:5501/json/products.json`
}

class ProductService {
    constructor (){
        this.products = []
    }

    getProducts = () => {
        return this.products
    }

    register = (setStateFunc) => {
        this.setStateFunc = setStateFunc
    }

    getProductsFromServer = async () => {
        const url = productsUrl()
        const response = await fetch(url)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        
        this.products = await response.json()

        if (this.setStateFunc){
            this.setStateFunc(this.products)
        }
        
        return new Promise((resolve, reject) => {
            resolve()
        })
    }

}

export default ProductService