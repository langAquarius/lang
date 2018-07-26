<template>
    <div class="filter">
        <div class="years">
            <span v-for="(item,index) in yearList" @click="yearFilter(item)" :class="item===year?'active':''" :key="index">
                {{item}}
            </span>
        </div>
        <CarYearFilter :type="year"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CarYearFilter from '../../../common/carYearFilter/CarYearFilter'
export default {
    name: 'EnquirePrice',
    data(){
        return {
            year:'2018'
        }
    },
    //获取数据
    computed:{
        ...mapState({
            yearList:state=>state.detail.yearData
        })
    },
    components:{
        CarYearFilter
    },
    mounted(){
        console.log(this.$router)
        let id = this.$route.query.id;
        console.log(id)
        this.$store.dispatch('getCarDetailData',id);//id=2593
    },
	methods:{
         /**
        *按年份筛选
        *@params String :年份
        *return String：年份
        */
        yearFilter(item){
            this.year = item
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.filter {
    font-size: .32rem;
    background: #fff;
    .years span {
        height: .77rem;
        line-height: .77rem;
        padding: .3rem 0;
        padding-right: .46rem;
        padding-left: .2rem;
        &.active {
            color: #00afff;
        }
    }
}
</style>