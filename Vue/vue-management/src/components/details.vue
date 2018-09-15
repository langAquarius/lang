<template>
    <div class="banner clearfix">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in images">
                <h3 class="text-center">{{ item.title }}</h3>
                <img :src="item.image" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: 'detail',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            images: [{
                "title": "美女一",
                "image": "src/assets/images/pic/img1.jpg"
            }, {
                "title": "美女一",
                "image": "src/assets/images/pic/img2.jpg"
            }, {
                "title": "美女一",
                "image": "/src/assets/images/pic/img3.jpg"
            }, {
                "title": "美女一",
                "image": "/src/assets/images/pic/img4.jpg"
            }, {
                "title": "美女一",
                "image": "/src/assets/images/pic/img5.jpg"
            }]
        };
    }
};
</script>
<style scope>
@import url("/src/assets/css/reset.css");
@import url("/src/assets/css/common.css");
.banner img {
    width: 100%!important;
    height: 100%!important;
}
.text-center{
  text-align: center;
}
</style>