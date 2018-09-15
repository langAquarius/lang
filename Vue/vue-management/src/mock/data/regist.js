const fs = require("fs");
const path = require("path");


let readFile = (filename) => {

}

//TODO
let getFile = (folder = ".") => {
    fs.readdir(folder, (err, files) => {
        if (err) return console.error(err);
        files.forEach((file) => {
            fs.stat(file, (err, stats) => {
            	console.log();
            });
        })
    })
}