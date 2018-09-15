const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: { //引入
        app: path.join(__dirname, 'src/app.js')
    },
    output: { //转译输出
        path: path.join(__dirname, 'dist'),
        filename: "build.js"
    },
    module: { //引入模块
        rules: [{
            test: /\.js/,
            loader: "babel-loader"
        }, {
            test: /\.css/,
            loader: ["style-loader", "css-loader"]
        }, {
            test: /\.(jpg|jpeg|png|gif)$/,
            use: [{
                loader: "url-loader"
            }]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)/,
            loader: "url-loader"
        }]
    },
    // optimization: { //webpack为4.1.1版本用于    //提取公共代码；
    //     splitChunks: {
    //         chunks: "all", //必须3选一：‘ "initial"|"all"（默认就是all）|"async";
    //         minSize: 0, // 最小尺寸， 默认 0 
    //         minChunks: 1 // 最小chunk ，默认1
    //             // maxAsyncRequests: 1, //最大异步请求 ，默认1
    //             // maxInitialRequests: 1, //最大初始化， 默认1
    //             // name: function() {}, //名称， 这里可接受函数
    //             // cacheGroups: { //这里开始设置缓存的chunks
    //             //     priority: 0, //缓存优先级
    //             //     vendor: { //key 为 entry 中定义的入口名称
    //             //         chunks: 'initial',
    //             //         test: /react|lodash/, //正则规则验证，如果符合就提取chunk
    //             //         name: 'vendor',
    //             //         要缓存的 分隔出来的 chunk 名称
    //             //         minChunks: 1,
    //             //         enforce: true,
    //             //         maxAsyncRequests: 1, //最大异步请求 ，默认1
    //             //         maxInitialRequests: 1, //最大初始化， 默认1
    //             //         reuseExistingChunk: true //可设置是否重用该 chunk （查看源码没有发现默认值）
    //             //     }
    //     }
    // },
    devServer: {
        host: 'localhost',
        port: 8081,
        contentBase: '.',
        setup(app) {
            //app.get
        }
    },
    plugins: [
        //样式抽离
        new ExtractTextPlugin('main.css'),
        //js压缩
        new UglifyJsPlugin({
            exclude: /\.node_modules/,
            uglifyOptions: {
                compress: { warnings: false }
            },
            cache: true,
            //开启多核处理
            parallel: 4,
            sourceMap: true
        }),
        //模块的热替换
        new webpack.HotModuleReplacementPlugin(),
        //创建一个html页面；
        new HtmlWebpackPlugin({
            name: 'index',
            title: '主页',
            filename: 'index.html',
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            name: 'login',
            title: '登录',
            filename: 'login.html'
        }),
        //提取公共代码；
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        })
    ]
}