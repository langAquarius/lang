<template>
    <div id="wrap">
        <header class="header">
            <div class="top">
                <a><img src="./images/logo.png" alt=""></a>
                <a id="donwload">下载APP</a>
            </div>
            <nav id="nav">
                <div><router-link to="/resoected" class="active">推荐</router-link></div>
                <div><router-link to="/singer">歌手</router-link></div>
                <div><router-link to="/top">排行</router-link></div>
                <div><router-link to="/find">搜索</router-link></div>
            </nav>
        </header>

        <div id="app">         
            <router-view/>      
        </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    @import url("./css/style.css");
    @import url("./fonts(1)/iconfont.css");
</style>
