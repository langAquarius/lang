<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <form class="ms-login">
            <div class="input-group" >
                <input type="text" class="form-control" placeholder="用户名" v-model="username" v-focus required/>
            </div>
            <div class="input-group">
                <input type="password" class="form-control" placeholder="密码" v-model="password" required/>
            </div>
            <div class="input-group">
                <button type="submit" class="btn btn-block btn-primary" @click="submitForm">登录</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import { Loading, Message } from 'element-ui'

Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
});
export default {
    name: 'login',
    data() {
        return {
            err: '',
            username: '',
            password: ''
        };
    },
    methods: {
        submitForm() {
            if (!this.username || !this.password) {
                return Message.error({
                    message: '输入有误'
                });
            }
            axios({
                    url: '/login',
                    method: 'POST',
                    parmas: {
                        username: this.username,
                        password: this.password
                    }
                }).then((res) => {
                    if (res.status === 200) {
                        this.msg = null;
                        this.$router.push({
                            name: 'home',
                            params: { username: res.data.UserName, password: res.data.PassWord }
                        });
                        localStorage.setItem('username', this.username);
                    }
                },(err)=>{
                    Message.error({
                        message: err
                    })
                });
        }
    }
};
</script>
<style scoped>
@import url('/src/assets/css/reset.css');
@import url('/src/assets/css/common.css');
@import url('/src/assets/css/login.css')
</style>