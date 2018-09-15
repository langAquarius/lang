<template>
    <div class="wrap">
        <div class="headers">
            <v-photo :username="getUser" :photo="url"></v-photo>
            <h2>后台管理系统</h2>
        </div>
        <el-row :gutter="15">
            <el-col :span="4" class="left">
                <v-aside class="grid-content"></v-aside>
            </el-col>
            <el-col :span="20" class="right">
                <v-section class="grid-content"></v-section>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })

import aside from './layout/slideBar';
import section from './layout/slideRight';
import photo from './parts/photo';

export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            url: undefined
        };
    },
    components: {
        'v-aside': aside,
        'v-section': section,
        'v-photo': photo
    },
    computed: {
        getUser() {
            return localStorage.getItem('username');
        }
    },
    created() {
        this.bus.$on('updatePhotos', (val) => {
            this.url = val;
        })
    },
    methods: {

    },
};
</script>
<style>
@import url("/src/assets/css/reset.css");
@import url("/src/assets/css/common.css");
@import url("/src/assets/css/layout.css");
</style>