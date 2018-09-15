const path = require("path");
module.exports = {
    entry: path.join(__dirname, "src/app.js"),
    output: {
        filename: "build.js"
    }
}