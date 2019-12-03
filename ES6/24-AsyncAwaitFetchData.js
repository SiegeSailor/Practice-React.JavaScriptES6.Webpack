const domainURL = `http://127.0.0.1:5501`;

const productURL = (id) => {
    return `${domainURL}/ES6/24-AsyncAwaitProduct${id}.json`
}
const userURL = (id) => {
    return `${domainURL}/ES6/24-AsyncAwaitUser${id}.json`
}
const cartURL = (user) => {
    const userIDInCart = user.id
    return `${domainURL}/ES6/24-AsyncAwaitCart${userIDInCart}.json`
}

const getUser = (userID) => {
    const URL = userURL(userID);
    return fetch(URL).then((response)=> {
        return response.json()
    }).then((json)=> {
        return json
    }, (error)=> {
        return `JSON decode error`
    })
}

const getCart = (user) => {
    const URL = cartURL(user);
    return fetch(URL).then((response)=> {
        return response.json()
    }).then((json)=> {
        return json
    }, (error)=> {
        return `JSON decode error`
    })
}

const getProduct = (productID) => {
    const URL = productURL(productID);
    return fetch(URL).then((response)=> {
        return response.json()
    }).then((json)=> {
        return json
    }, (error)=> {
        return `JSON decode error`
    })
}

const getProducts = (productIDs) => {
    // map 能將 return 的值放入一個陣列
    const productFetchs = productIDs.map((productID)=> {
        return getProduct(productID)
    })

    // Promise.all 內接陣列，而 productFetchs 為用 map 組成的陣列
    return Promise.all(productFetchs)
}

const fetchRun = () => {
    let me = {};

    // 先用 id 取得 user，再將取出來的 response 用 Promise 的 then 放入，
    // getCart 代入的 user 是 getUser 代入 id 後取出的
    getUser(1).then((user)=> {
        me = user;
        return getCart(user)
    }).then((cart)=> {
        me.cart = cart;
        const productIDs = cart.cart_items.map((item)=> {
            return item.product_id
        })
        return getProducts(productIDs)
    }).then((products)=> {
        me.cart.cart_items.forEach((item)=> {
            products.forEach((product)=> {
                if (item.product_id == product.id) {
                    item.product = product
                    return
                }
            })
        })
        console.log(me)
    })
}

const fetchRunAsyncAwaitVersion = async () => {
    const user = await getUser(1);
    console.log(user)
    // 因不明原因，這裡的 user 與下方做過資料整合的 userWithInfo 一樣，若下方註解則只有 user 本身的資料
    // 估計是因為 shallow-copy 對 object 的影響
    const cart = await getCart(user);
    const productIDs = cart.cart_items.map((item)=> {
        return item.product_id;
    });
    const products = await getProducts(productIDs);
    const userWithInfo = combine(user, cart, products)
    console.log(userWithInfo)
}

const combine = (user, cart, products) => {
    user.cart = cart;
    user.cart.cart_items.forEach((item)=> {
        products.forEach((product)=> {
            if (item.product_id == product.id) {
                item.product = product
                return
            }
        })
    })
    return user
}

fetchRunAsyncAwaitVersion();