const fs = require("fs");
const path = require("path");

const mock = require("mockjs");
const webpack = require("webpack");
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = require("./webpack.base.conf");
const util = require("../config/util");

module.exports = merge(baseConfig, {
    devServer: {
        host: "localhost",
        port: 8080
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'vendor-async',
            children: true,
            minChunks: 3
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            parallel: true
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        }),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ]
});