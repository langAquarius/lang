<template>
    <div class="car-detail" v-if="Object.keys(carDetailList).length">
        <div class="section">
            <div class="Img" @click="allPicture"><img :src="url(carDetailList.CoverPhoto)"><span>{{carDetailList.pic_group_count}}张照片</span></div>
            <div class="synopsis">
                    <p>
                        <span>{{carDetailList.market_attribute.dealer_price}}</span>
                        <span>指导价&ensp;{{carDetailList.market_attribute.official_refer_price}}</span>
                    </p>
                    <p @click="enquirePrice(carDetailList.BottomEntranceLink)">{{carDetailList.BottomEntranceTitle}}</p>
            </div>
            <div class="filter">
                <div class="years">
                    <span @click="yearFilter('all')" :class="year=='all'?'active':''">全部</span>
                    <span v-for="(item,index) in yearList" @click="yearFilter(item)" :class="year==item?'active':''" :key="index">
                        {{item}}
                    </span>
                </div>
                <CarYearFilter :type="year" />
            </div>
       </div>
       <div class="enquire-price" @click="enquirePrice(carDetailList.BottomEntranceLink)">
            <p>询问底价</p>
            <p>本地经销商为您报价</p>
       </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CarYearFilter from '../../common/carYearFilter/CarYearFilter'
export default {
    name: 'CarDetail',
    data(){
        return {
            year:'all',
            ID:null
        }
    },
    //获取数据
    computed:{
        ...mapState({
            carDetailList:state=>state.detail.carDatailData,
            yearList:state=>state.detail.yearData
        })
    },
    components:{
        CarYearFilter
    },
    created() {
        this.url()
    },
    mounted(){
        let id = this.$route.query.carDetail;
        this.ID = id;
        this.$store.dispatch('getCarDetailData',id);//id=2593
    },
	methods:{
        url(url){
            if(url){
                 return url.replace(/\{0\}/,1)
            }  
        },
         /**
        *按年份筛选
        *@params String :年份
        *return String：年份
        */
        yearFilter(item){
            this.year = item
        },
        //x询问底价
        enquirePrice(id){
            //id:126282
            id = id.split('/')[id.split('/').length-1]
            this.$router.push({
                path:'/detail/price',
                query:{
                    price:id
                }
            })
        },
        /**
         *显示所有照片
         *跳转路由
         */
        allPicture(){
            this.$router.push({
                path: `/picture`,
                query:{
                    picture:this.ID
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './scss/detail.scss';
</style>

