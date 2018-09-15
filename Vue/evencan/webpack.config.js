const path = require("path");
const webpack = require("webpack");

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
            test: /\.js/,
            loader: "babel-loader"
        }, {
            test: /\.css/,
            loader: ["style-loader", "css-loader"]
        }, {
            test: /\.(jpg|jpeg|png|gif)$/,
            use: [{ loader: "url-loader" }]
        }, {
            test: /\.(svg|ttf|eot|woff|woff2)/,
            loader: "url-loader"
        }]
    },
    devSrever: {
        host: "localhost",
        port: 9090,
        contentBase: ".",
        setup(app) {}
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}