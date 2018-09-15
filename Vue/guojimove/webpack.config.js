const path = require('path');
const webpack = require('webpack');




module.exports = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        filename: 'build.js',
        path: __dirname + '/dist'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            use: 'url-loader'
        }, {
            test: /\.(jpg|jpeg|png|gif)/,
            use: 'url-loader'
        }]
    },
    devServer: {

    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}