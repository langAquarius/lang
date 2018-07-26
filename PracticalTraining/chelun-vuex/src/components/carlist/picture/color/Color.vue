<template>
    <div class="color">
        <div class="colorAll" @click="Color">全部颜色</div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in yearList" @click="yearChoose(item)" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="section">
            <ol>
                <li v-if="Object.keys(colorList).length && yearList.length" v-for="(value,key) in colorList[year||yearList[0]]" @click="colorChoose(value.Value)" :key="key">
                    <span class="bg" :style="{background:value.Value}"></span><span>{{value.Name}}</span>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'Color',
    computed:{
        ...mapState({
            colorList:state=>state.color.PictureColorData,
            yearList:state=>state.color.colorList,
            year:state=>state.color.year
        })
    },
    mounted() {
        //通过this.$route拿到参数D:2593
        let id = this.$route.query.color;
        this.$store.dispatch('getPictureColorData',id)
    },
    methods:{
        Color(){
            //$router.back()以及$router.go(-1)都无法带参数后退到上一个页面
            //将参数存到sessionStorge中，返回时将值去出进行筛选
            //用Vuex更简单
            this.$router.back()
        },
        yearChoose(item){
            this.year = item
            console.log(this.year)
        },
        colorChoose(color){
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './scss/color.scss';
</style>