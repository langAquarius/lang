<template>
    <div class="wrap">
        <div class="box" ref="box">
            <CarBrandList :carBrandList="carBrandList" :letterList="letterList" :masterBrand="masterBrand"/>
        </div>
        <Letter :letterList="letterList" :changeLetter="changeLetter"/>
        <MasterBrandList :masterBrandList="masterBrandList" :hiddenMaster="hiddenMaster" :showMaster="showMaster"/>
    </div>
</template>

<script>
import {  mapState, mapMutations } from 'vuex'
import Letter from "./carlist/Letter"
import CarBrandList from "./carlist/CarBrandList"
import MasterBrandList from './carlist/MasterBrandList'
export default {
    name: 'Index',
    data () {
        return {
            showMaster:''//添加显示品牌列表类名
        }
    },
    //获取数据
    computed:{
        ...mapState({
            carBrandList:state=>state.carlist.carBrandData,
            masterBrandList:state=>state.carlist.masterBrandeData,
            letterList:state=>state.carlist.letterData
        })
    },
    components:{
        Letter ,
        CarBrandList,
        MasterBrandList
    },
    mounted() {
      this.$store.dispatch('getCarBrandData')
    },
	  methods:{
        masterBrand(id,showMaster){
            this.$store.dispatch('getMasterBrandData',id);
            //接收点击品牌是给hiddenMaster定义的class名
            this.showMaster = showMaster
        },
        //清空showMaster，达到隐藏MasterBrandList的目的
        hiddenMaster(){
           this.showMaster = ''
        },
        changeLetter(id){
            if (id !== '#'){
                //首字母为（id）的 aside 1、相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
                //--------------------- 2、(相对于由offsetParent属性指定的父坐标距离顶端的高度。)
                let scrollTop = document.querySelector(`#${id}`).offsetTop;
                //将值赋给box box.scrollTop 向上移动相对应的位置，使首字母为（id）的aside显示在顶部
                //将box的css设置为overflow-y：scroll；
                this.$refs.box.scrollTop = scrollTop
            }
            
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
    @import './index.css';
</style>


