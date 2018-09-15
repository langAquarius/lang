// let fs = require('fs');
// let url = require('url');
// let path = require('path');
// let gulp = require('gulp');
// let connect = require('gulp-connect');
// let webserver = require('gulp-webserver');

// //启服务
// gulp.task('server', function() {
//     connect.server({
//         host: 'localhost',
//         port: 8080,
//         livereload: true
//     })
// })

// gulp.task('webserver', function() {
//     gulp.src('.')
//         .pipe(webserver({ //以流的方式创建数据接口
//             host: 'localhost',
//             port: 3333, //数据接口
//             middleware: function(req, res) { //请求数据；
//                 if (req.url === '/favicon.ico') return;
//                 let urlObj = url.parse(req.url);
//                 let pathname = urlObj.pathname;
//                 console.log(pathname);
//                 res.writeHead(200, {
//                     'Content-type': 'text/json;charset=utf8',
//                     'Access-Control-Allow-Origin': '*' //支持跨域；
//                 })
//                 fs.readFile(path.join(__dirname, 'data/data.json'), function(error, data) {
//                     res.end(data.toString());
//                 })
//             }
//         }))
// })

// gulp.task('default', ['server', 'webserver']);