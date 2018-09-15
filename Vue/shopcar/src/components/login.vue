<template>
    <div>
        <headers :tit="'登陆'"></headers>
        <form class="p10">
            <div class="row pl15 pr15">
                <div class="col-md-4">
                    <label for="password">用户名</label>
                </div>
                <input class="col-md-8 form-control" type="text" v-model="username" name="username" placeholder="please input your username">
            </div>
            <div class="row pl15 pr15 mt10">
                <div class="col-md-4">
                    <label for="password">密码</label>
                </div>
                <input class="col-md-8 form-control" type="text" v-model="password" name="password" placeholder="please input your password">
            </div>
            <div class="pt10 pb10 mt10">
                <button type="button" class="btn btn-default form-control" @click="login">登陆</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios"
import headers from "@/components/include/header.vue"
export default {
    name: "",
    data() {
        return {
            flag: true,
            username: "heinan",
            password: 123456
        }
    },
    components: {
        headers
    },
    methods: {
        login() {
            axios.get("/login", {
                params: {
                    username: this.username,
                    password: this.password
                }
            }).then((result) => {
                if (result.data.isSuccess && result.data.errCode == 0) {
                    this.$router.push({ path: 'index' })
                }
            }).catch((error) => {
                if (error) {
                    this.password = null;
                }
            });
        }
    }
}
</script>
<style>
@import url("../css/bootstrap.min.css");
</style>