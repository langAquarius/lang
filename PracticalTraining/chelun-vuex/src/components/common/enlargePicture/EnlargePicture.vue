<template>
    <div class="img-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in List" :key="index">
                <img v-lazy="url(item.Url)">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <p>{{swipe.activeIndex+'/'+(pictureAllList.Count)}}</p>
        </swiper>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
    props:['pictureAllList','List'],
    created() {
        this.url()
    },
    
    computed:{
        swiperOption(){
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          return {
                on:{
                    slideNextTransitionEnd: ()=>{
                        console.log('切换结束了',this.swipe.activeIndex);
                        if (this.swipe.activeIndex > this.List.length-5){
                            // 加载下一页数据
                           
                        }
                    },
                },
            }
        },
        swipe() {
            return this.$refs.mySwiper.swiper
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
        //替换图片的{0}
        url(url){
            if(url){
                return url.replace(/\{0\}/,1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>