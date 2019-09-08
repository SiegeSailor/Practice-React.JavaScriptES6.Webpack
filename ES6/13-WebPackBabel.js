import FunctionFromLibrary, {
    sum,
    pi,
    echo
} from "./13-WebPackBabelLibrary";

class BabelNeedsWebpack {
    constructor() {
        console.log(`即使經過 Babel 編譯，class 仍然不能直接在 module 中直接宣告使用。需要 Webpack。`)
    }
    echoSummonsFromEcho = () => {
        echo(`Pi is ${pi}.`)
    }
}

// 經 WebPack Babel 編譯後，先嘗試以不正確的 window 指定方式調配 class
window.BabelNeedsWebpack = BabelNeedsWebpack;

// 再來，這是正確的使用方法
document.addEventListener('DOMContentLoaded', () => {
    const babelNeedsWebpack = new BabelNeedsWebpack();
    babelNeedsWebpack.echoSummonsFromEcho();
})