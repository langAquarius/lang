const fs = require("fs");
const path = require("path");


module.exports = {
    entry: path.join(__dirname, "src/app.js"),
    output: {
        filename: "build.js"
    },
    //解析器，用设置webpack打包需要解析的各种文件类型
    //webpack打包任意类型的文件，都需要一个loader
    //css
    //img 前景图 背景图
    //html
    //js
    //font
    module:{
        rules:[]
    },
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: ".",
        setup(app) {
            app.get("/api", (req, res) => {
                res.end("hello!")
            });
            app.get("/songs", (req, res) => {
                let pathurl = path.join(__dirname, "src/data/songs.json");
                fs.readFile(pathurl, (err, data) => {
                    if (err) return console.error(err);
                    res.end(data);
                });
            });
        }
    }
    //各种模块实例的调用
    // plugin:[

    // ]
}