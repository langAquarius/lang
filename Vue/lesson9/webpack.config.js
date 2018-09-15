const fs = require("fs");
const url = require("url");
const path = require("path");
const query = require("querystring");

const webpack = require("webpack");
const HtmlWebpackPLugin = require("html-webpack-plugin");

const users = [{
    username: "heinan",
    password: "123456"
}]

let getInformation = (res, file) => {
    // let pathname = path.join(__dirname, "src/data/" + file + ".json")
    let pathname = path.join(__dirname, `src/mock/${file}.json`);
    fs.exists(pathname, (exists)=> {
        if (!exists) {
            res.end("Can't find file at:" + pathname);
        }
        fs.readFile(pathname, (err, data) => {
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
            app.get("/music", (req, res) => {
                getInformation(res, "musics");
            })
            app.get("/data", (req, res) => {
                let oUrl = url.parse(req.url);
                let oUser = query.parse(oUrl.query);
                if (oUser.username == users[0].username && oUser.password == users[0].password) {
                    res.end("OK")
                } else {
                    res.end("MISS");
                }
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