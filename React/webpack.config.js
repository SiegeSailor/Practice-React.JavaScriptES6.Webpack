// 以下基本設定來自 webpack 官網的 webpack.config.js 的 Getting Started，但針對我們的目錄調整
// 這裏的 path 可以解決編譯後仍然產生的 exports 問題
const path = require('path');

module.exports = {
    entry: './2-JSXBabel.jsx',
    output: {
        filename: '2-JSXBabel.js',
        path: path.resolve(__dirname, './'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    // 2-JSXBabel
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // 注意這裡有針對 react 的 preset
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};

module.exports = {
    entry: './4-VirtualDOM.jsx',
    output: {
        filename: '4-VirtualDOM.js',
        path: path.resolve(__dirname, './'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    // 4-VirtualDOM
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // 注意這裡有針對 react 的 preset
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};

module.exports = {
    entry: './5-Props.jsx',
    output: {
        filename: '5-Props.js',
        path: path.resolve(__dirname, './'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    // 5-Props
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // 注意這裡有針對 react 的 preset
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};

module.exports = {
    entry: './6-State.jsx',
    output: {
        filename: '6-State.js',
        path: path.resolve(__dirname, './'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    // 6-State
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // 注意這裡有針對 react 的 preset
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};

module.exports = {
    entry: './7-PropsAndState.jsx',
    output: {
        filename: '7-PropsAndState.js',
        path: path.resolve(__dirname, './'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    // 7-PropsAndState
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // 注意這裡有針對 react 的 preset
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};

module.exports = {
    entry: './8-ES5ReactInput.jsx',
    output: {
        filename: '8-ES5ReactInput.js',
        path: path.resolve(__dirname, './'),

    },
    // 以下的 module 來自 webpack 官網的 babel loader 設定
    // 8-ES5ReactInput
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // 注意這裡有針對 react 的 preset
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    }
};
