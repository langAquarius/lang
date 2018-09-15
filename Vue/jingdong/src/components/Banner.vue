<template>
  <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="../../static/images/banner/1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/4.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/5.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/6.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/7.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/images/banner/8.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
    export default {
        data() {
           return {
                 swiperOption: {
                    autoplay: 3000,
                    direction : 'horizontal',
                    pagination : '.swiper-pagination'
                }
           }
        },
        components: {

        }
    }
</script>

<style scoped>
</style>
