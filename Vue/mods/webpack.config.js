const fs = require('fs')
const path = require('path')

module.exports = {
    entry: {
        path: path.join(__dirname, "src/app.js")
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"

    },
    module: {

    }
}