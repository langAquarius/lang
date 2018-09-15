const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "src/app.js")
    },
    output: {
        path: __dirname + '/dist',
        filename: "build.js"
    },
    module: {
        rules: [{
                test: /\.js/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     test: /\.css/,
            //     loader: ["style-loader", "css-loader"]
            // },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(jpg|jpeg|png|gif)/,
                use: [{
                    loader: "url-loader"
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
            }
        ]
    },
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: ".",
        setup(app) {}
    },
    plugins: [
        //抽离样式表
        new ExtractTextPlugin("mian.css"),
        //js压缩
        new UglifyJsPlugin({
            exclude: /\/node_modules/,
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            cache: true,
            //开启多核处理
            parallel: 4,
            sourceMap: true
        }),
        //模块的热替换
        new webpack.HotModuleReplacementPlugin(),
        //创建一个html页面
        new HtmlWebpackPlugin({
            name: "index",
            title: "主页",
            filename: "index.html",
            template: './index.html'
        }),
        new HtmlWebpackPlugin({
            name: "login",
            title: "登陆",
            filename: "login.html"
        }),
        //提取/切割公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        })
    ]
}