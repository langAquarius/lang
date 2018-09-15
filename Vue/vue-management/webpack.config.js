/**
 * Created by Nan on 2017/12/6.
 */

var fs = require('fs');
var path = require('path');
var multipart = require('connect-multiparty')();
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/main.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:3].min.js'
    },

    module: {
        rules: [{
                test: /\.css$/,
                exclude: "/node_modules",
                // use: extractTextPlugin.extract({
                //     fallback: "style-loader!css-loader",
                //     use: ["vue-style-loader", "css-loader"]
                // })
                loader: "style-loader!css-loader"

            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)/,
                use: "url-loader?limit=50000&name=[path][name].[ext]"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: "/node_modules/"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // 运行时构建不包含模板编译器，因此不支持 template 选项，只能用 render 选项
    // 如果我们想使用template，我们不能直接在客户端使用npm install之后的vue
    // 添加如下别名
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.esm.js',
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        compress: true,
        contentBase: "./", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        port: 3000,
        hot: true,
        // proxy:function(onProxy,req,res,next){
        //    if(req.method === 'GET') {

        //    }
        // },
        setup: (app) => {
            app.post('/api', multipart, function(req, res) {
                let filepath = path.normalize(req.files.file.path);
                let target = path.join(__dirname, "src/assets/images/pht", req.files.file.name);
                fs.readFile(filepath, (err, data) => {
                    if (err) return console.error(err);
                    fs.writeFile(target, data, "binary", (err) => {
                        if (err) return console.error(err);
                        res.header('Access-Control-Allow-Origin', '*');
                        res.json({ result: 'success', data: path.join("src/assets/images/pht", req.files.file.name) });
                    })
                });

            });
        }
    },
    plugins: [
        // new extractTextPlugin('css/[name]-[hash:3].css'), //css随机数
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}