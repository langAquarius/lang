<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-show="frist">{{frist}}</el-breadcrumb-item>
            <el-breadcrumb-item v-show="second">{{second}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="article">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'slideRight',
    data() {
        return {
            frist: null,
            second: null
        };
    },
    mounted() {
        const that = this;
        this.bus.$on('toggleNav', (names) => {
            that.frist = names;
            that.list = null;
        });
        this.bus.$on('togglePage', (names) => {
            that.second = names;
        });
    }
};
</script>
<style>
</style>