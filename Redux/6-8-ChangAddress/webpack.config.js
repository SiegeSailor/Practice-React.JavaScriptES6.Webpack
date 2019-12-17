const path = require('path');

module.exports = {
    entry: {
        'index': './index.jsx'
    },
    output: {
        // ## 這裡使用載入的、非命名的預設變數值，注意 entry 變為 {} 並且有了一個 App 的 key，這個 [name] 便是對應到 entry 的 key
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};