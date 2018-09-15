let util = {
    readFile: function(url, res) {
        fs.readFile(url, (err, data) => {
            if (err) return console.error(err);
            res.end(data);
        });
    },
    getJson: function(req, res, filepath) {
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
};


module.export = util;