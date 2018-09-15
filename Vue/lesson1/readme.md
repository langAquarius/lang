# ES6入门

# 前言
	JavaScript得运行需要环境， 浏览器环境，nodejs环境去运行js
# 介绍
es6 是 ECMAScript 6简称
#目标
是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

# 语法提案的批准流程
任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。

一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。
一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面

Stage 0 - Strawman（展示阶段）
Stage 1 - Proposal（征求意见阶段）
Stage 2 - Draft（草案阶段）
Stage 3 - Candidate（候选人阶段）
Stage 4 - Finished（定案阶段）

# 部署情况

1、浏览环境 http://kangax.github.io/compat-table/es6/
2、nodejs环境  es-checker  用来检查nodejs对es6得支持情况


1、npm install -g cnpm
2、确定你的全局包存放路径 有没有设置 NODE_PATH 的路径(必须重启cmd窗口)
3、cnpm install -g es-checker

.npmrc自定义配置

//全局缓存路径
npm config set cache D:\Node\npm-cache
//配置全局包存放路径，不需要写node_modules 会自动成
npm config set prefix D:\Node\npm
//设置淘宝镜像
npm config set registry https://registry.npm.taobao.org/


cache=D:\Node\npm-cache
prefix=D:\Node\npm
registry=https://registry.npm.taobao.org/

1、变量得声明

let 声明变量
const  声明常量

includes()
startsWith()
endsWith()
repeat()
padStart();
padEnd();
matchAll()