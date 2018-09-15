const fs = require('fs');
const path = require('path');


module.exports = {
    entry: path.join(__dirname, "src/app.js"),
    output: {
        filename: "bulid.js"
    },
    devServer: { //启服务与接口；
        host: 'localhost',
        port: 9090,
        contentBase: '.',
        setup(app) {
            app.get('/api', (req, res) => {
                res.end('hello')
            });
            app.get('/music', (req, res) => {
                let pathurl = path.join(__dirname, 'src/data/music.json')
                fs.readFile(pathurl, (err, data) => {
                    if (err) return console.log(err)
                    res.end(data);
                })
            })
        }
    }



}