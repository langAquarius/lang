var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");
var gulp = require("gulp");
var webserver = require("gulp-webserver");
//node的判断文件是否存在后读取文件
var getJson = function(req, res, filepath) {
    fs.exists(filepath, function(exist) {
        if (!exist) return;
        fs.readFile(filepath, function(err, data) {
            if (err) return console.error(err);
            res.end(data);
        });
    });
}

//启服务
gulp.task("server", function() {
    gulp.src(".") //匹配任何路径
        .pipe(webserver({ //以流的方式创建一个服务
            host: "localhost",
            port: 8080,
            fallback: "index.html"
        }));
});

//接口    连接
gulp.task("api", function() {
    gulp.src(".")
        .pipe(webserver({
            host: "localhost",
            port: 8090,
            livereload: true, //时实刷新
            middleware: function(req, res, next) { //middleware: function(){}  Es6固定语句；
                res.writeHead(200, {
                    "Content-type": "text/json;charset=utf8",
                    "Access-Control-Allow-Origin": "*"
                });
                var oUrl = url.parse(req.url);
                var filename = oUrl.pathname;
                var filepath = path.join(__dirname, "data", filename + ".json");
                getJson(req, res, filepath)
            }
        }));
});

gulp.task("default", ["server", "api"]); //输入 gulp 就会默认启动srever 与 api，不用单独启服务