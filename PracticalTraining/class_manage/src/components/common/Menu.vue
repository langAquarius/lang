<template>
     <el-container class="wrap">
        <el-header  height="60px">
            <h2>1601N--班级管理系统</h2>
        </el-header>
        <el-container>
            <el-aside id="menu">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>成绩单管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">成绩查询</el-menu-item>
                            <el-menu-item index="1-2">成绩修改</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-edit-outline"></i>
                            <span>综合积分管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">点名</el-menu-item>
                            <el-menu-item index="2-2">查看综合积分</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-service"></i>
                            <span>管理权限</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">删除用户</el-menu-item>
                            <el-menu-item index="2-2" @click="admin">权限分配</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="box">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container> 
</template>

<script>
export default {
    data() {
        return {
        isCollapse: false,
        accessList: []
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        admin(){
            this.$router.push({path:'/userList/admin'})
        }
    },
    beforeRouteEnter (to, from, next) {
        next((vm)=>{
            // 从缓存中获取登陆态和登陆时间
            let isLogin = window.sessionStorage.getItem('isLogin'),
                loginTime = parseInt(window.sessionStorage.getItem('loginTime'));
            let current = +new Date();
            if (isLogin && current-loginTime<(60*1000)){
            // 登陆态在有效期内，不用拦截
            }else{
                console.log(this);
                let alert = vm.$alert('请先登陆', {
                    callback: ()=>{
                        vm.$router.replace('/login');
                    }
                })
            }
        })
    },
    mounted(){
        // 从缓存中获取权限列表
        let accessList = window.sessionStorage.getItem('accessList');
        if (accessList){
            accessList = JSON.parse(accessList);
        }else{
            accessList = [];
        }
        this.accessList = accessList;
    }
}
</script>

<style>
    #menu{
        height: 560px;
        background-color:#545c64;
    }
    #menu .box{
        height: 560px;
        overflow:hidden;
    }
</style>