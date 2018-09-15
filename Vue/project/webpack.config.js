const fs = require("fs");
const path = require("path");
const mock = require("mockjs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let imageArray = [];
for (let i = 0; i < 5; i++) {
    imageArray.push(mock.mock({
        "name": "@name",
        "url": `src/images/${i}.jpg`
    }))
}



let getJson = function(req, res, filepath) {
    fs.exists(filepath, function(exist) {
        if (!exist) {
            res.end("error");
            return;
        };
        fs.readFile(filepath, function(err, data) {
            if (err) return console.error(err);
            res.end(data);
        });
    });
}

module.exports = {
    entry: {
        app: path.join(__dirname, "src/app.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["vue-style-loader", "css-loader"]
                })
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.(eot|svg|ttf|woff|woff2|otf)/,
                use: "url-loader?limit=50000&name=[path][name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.esm.js',
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        host: "localhost",
        port: 8080,
        setup(app) {
            app.get("/mock", function(req, res) {
                //let filepath = path.join(__dirname, "src/data/imgs.json");
                //getJson(req, res, filepath);
                let data = JSON.stringify(imageArray);
                res.end(data);
            });
        }
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        }),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ]
}