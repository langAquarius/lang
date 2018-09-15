# web本地服务
# webpack-dev-server  自带nodejs express的一个小型web服务器 
# webpack-dev-middleware nodejs 手动去创建一个web小型服务器

使用：
cnpm install --save-dev webpack-dev-server
cnpm install --save-dev webpack-dev-middleware

# webpack
1、热加载/热替换(自动刷新)  hotMoudleReplacePlguin

# devServer
启动命令：
webpack-dev-server --inline --config webpack.config.js --hot

页面打开方式：
1、inline  在当前窗口中打开
2、iframe  新窗口中打开

热加载
hot

1、页面的开发
2、入口js 打包 html css js  font image(jpg,png.gif.jpeg)
3、模块的热替换