<template>
    <div>
        <header class="header">
            登陆系统
        </header>
        <div class="content">
            {{musicList}}
            <ul>
                <li v-for="music in musicList">
                    <h3>{{music.name}}</h3>
                    <p>{{music.author}} - {{music.album}}</p>
                </li>
            </ul>
            <form action="">
                <div class="list-group">
                    <label for="username">用户名</label>
                    <input type="text" id="username" v-model="username">
                </div>
                <div class="list-group">
                    <label for="password">密码</label>
                    <input type="text" id="password" v-model="password">
                </div>
                <div>
                    <button type="button" v-on:click="submitForm">提交</button>
                </div>
            </form>
        </div>
        <footer class="footer">
            <ul>
                <li>版权所有©北京八维教育1601ABC</li>
                <li>地址:北京市海淀区八维学校网站工程学院</li>
            </ul>
        </footer>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "",
    //data变成方法，并返回一个{}
    data() {
        return {
            username: null,
            password: null,
            musicList: null,
        }
    },
    mounted(){
        this.getMusicList();
    },
    methods: {
        getMusicList() {
            axios.get("http://localhost:8080/music").then((result) => {
                this.musicList = result.data;
            });
        },
        submitForm() {
            let config = {
                username: this.username,
                password: this.password
            }
            axios.get("http://localhost:8080/data", { params: config }).then((result) => {
                console.log(result.data);
                if (result.data == "OK") {
                    alert("ok");
                } else {
                    alert("miss");
                }
            });
        }
    }
}
</script>
<style>
@import url("./css/font-awesome.min.css");
@import url("./css/bootstrap.min.css");
@import url("./css/reset.css");
@import url("./css/common.css");
@import url("./css/style.css");
</style>