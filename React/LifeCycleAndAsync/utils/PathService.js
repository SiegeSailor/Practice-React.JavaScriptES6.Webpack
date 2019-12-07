class PathService {
    constructor() {
        // 一開始的路徑，一定是首頁
        this.path = window.location.pathname
    }

    register = (setStateFunction) => {
        this.setStateFunction = setStateFunction
    }

    setPath = (path) => {
        window.history.pushState("", "", path)
        // 送出 this.path 而非代入的 path 是因為，代入的 path 是包含 http:// 的，會無法進行跳頁
        this.path = window.location.pathname
        if (this.setStateFunction){
            this.setStateFunction(this.path)
        }
    }
}

export default PathService;