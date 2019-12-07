// 如果沒有必要，資料就不用露出來，因為這樣外面就可以拿到
const logInURL = (username, password) => {
    return `http://127.0.0.1:5501/json/${username}.json`
}

// 以下兩個連結是模擬 server 回應，當 server 確定此使用者為登入中時，會回傳使用者資料
// 而未登入中則回傳空值 (success 模擬成功回傳，failed 模擬失敗回傳，實務上指會有一個URL)
const getUserSuccessURL = () => {
    return `http://127.0.0.1:5501/json/user1.json`
}

const getUserFailedURL = () => {
    return `http://127.0.0.1:5501/json/userfailed.json`
}

class UserService {
    static defaultUser = {
        videos: {
            likes: []
        }
    }
    constructor() {
        // 因為有些地方會用到 user 內的節點做判斷，而做判斷時若節點本身為 undefinded 會出錯，
        // 因此這裡必須要先做一個預設的空架構
        
        this.currentUser = UserService.defaultUser;
        // 或是 this.currentUser = this.constructor.defaultUser;
    }

    getCurrentUser = () => {
        return this.currentUser;
    }

    // 為了在 App.jsx 中能延續 user 的狀態，使各頁面使用者登入與否能夠統一
    register = (setStateFunction) => {
        this.setStateFunction = setStateFunction

    }

    // 因為使用者狀態改由 App.jsx 控制，不再依賴 UserService 做使用者狀態檢測了
    // redirectIfUserLogin = (path) => {
    //     // 讓已登入者直接跳去指定頁面
    //     const user = this.getCurrentUser();
    //     if(user.id){
    //         window.location.pathname = path
    //     }
    // }

    // 在真正的產品中，沒有後端是不能做使用者登入狀態這件事的
    // 見 LoginPage 中的 this.redirectIfLogin
    getUserFromServer = async() => {
        const URL = getUserFailedURL();
        const response = await fetch(URL);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        this.currentUser = await response.json()


        // 確認已有透過 this.register 註冊一個函式
        if (this.setStateFunction){
            this.setStateFunction(this.currentUser)
        }


        return new Promise((resolve, reject)=> {
            // resolve(this.currentUser)
            // 因為有透 this.register 註冊(由 App.jsx 傳入 setState 來設 user)，因此這個回傳值其實已無意義
            // 因為 user 的狀態變成由 App.jsx 傳下控制
            resolve()
        })
    }
    
    logIn = async(username, password) => {
        const URL = logInURL(username, password)
        const response = await fetch(URL);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        // 這裡不寫 catch，寫在外面。這樣的好處是我們一定只回傳確定的 user 或 error
        this.currentUser = await response.json()

        if (this.setStateFunction){
            this.setStateFunction(this.currentUser)
        }

        return new Promise((resolve, reject)=> {
            // resolve(this.currentUser)
            // 因為有透 this.register 註冊(由 App.jsx 傳入 setState 來設 user)，因此這個回傳值其實已無意義
            // 因為 user 的狀態變成由 App.jsx 傳下控制
            resolve()
        })
    }
}

export default UserService;