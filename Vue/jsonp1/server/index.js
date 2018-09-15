const fs = require('fs');
const path = require('path');

let getJsons = (filename) => {
    let pathname = path.join(__dirname, 'data' + filename + '.json');
    fs.readerFile(pathname, (error, result) => {
        if (!error) {
            res.jsonp(result)
        } else {
            res.jsonp("404    can't fined:" + filename)
        }
    })
}

module.exports = {
    entry: path.join(__dirname, 'app.js'),
    devServer: {
        host: 'localhost',
        port: 3333,
        concentBase: '.',
        setup(app) {
            app.get('/getInfo', (req, res) => {
                getJsons(list)
            })
        }
    }
}