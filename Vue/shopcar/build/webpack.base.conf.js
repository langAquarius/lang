const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: path.join(__dirname, "../src/app.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["vue-style-loader", "css-loader"]
                })
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.(eot|svg|ttf|woff|woff2|otf)/,
                use: "url-loader?limit=50000&name=[path][name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            'vue$': 'vue/dist/vue.esm.js',
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
}