const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPLugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "src/app.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            }, {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "vue-style-loader"]
            },
            {
                test: /\.(jpg|png|gif)/,
                use: {
                    loader: "url-loader"
                }
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            //使用.vue文件，必须设置.vue的解析规则
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: ".",
        setup(app) {
            app.get("/data", (req, res) => {
                res.end("666");
            });
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPLugin({
            title: "index",
            filename: "index.html",
            template: "./index.html"
        })
    ]
}