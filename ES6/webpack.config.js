// 以下基本設定來自 webpack 官網的 webpack.config.js 的 Getting Started，但針對我們的目錄調整
// 這裏的 path 可以解決編譯後仍然產生的 exports 問題
const path = require('path');

module.exports = {
    entry: './13-WebPackBabel.js',
    output: {
        filename: '13-WebPackBabel.js',
        path: path.resolve(__dirname, 'ES6BabelCompiled'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};