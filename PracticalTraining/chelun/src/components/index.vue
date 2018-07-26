<template>
    <div class="wrap">
        <div class="box" ref="box">
            <CarList :carList="carList" :initials="initials" :MasterBrand="MasterBrand"/>
        </div>
        <Letter :Letter="initials" :changeLetter="changeLetter"/>
        <MasterBrandList :getMasterBrandList="getMasterBrandList" :hiddenMaster="hiddenMaster" :showMaster="showMaster"/>
    </div>
</template>

<script>
import axios from 'axios'
import Scroll from "better-scroll"
import Letter from "./letter/Letter"
import CarList from "./carlist/CarList"
import MasterBrandList from './masterBrandList/MasterBrandList'
export default {
    name: 'Index',
    data () {
	    return {
	        carList:null,//列表数据
            initials:[],//首字母
            getMasterBrandList:null,//品牌列表数据
            showMaster:''//添加显示品牌列表类名
	    }
	},
    mounted(){
        this.getJson();
        // <t></t>his.changeLetter()
        //new Scroll(this.$refs.carList,{})
    },
    components:{
        Letter ,
        CarList,
        MasterBrandList
    },
	methods:{
        //json数据获取数据
        getJson(){
            // axios.get("/api").then(res=>{
            //     this.carList=res.data.data
            //     // console.log(this.carList)
            //     //获取首字母
            //     this.carList.map((item,index)=>{
            //         let N = item.Spelling.slice(0,1)
            //         if(this.initials.indexOf(N) === -1){
            //             this.initials.push(N)
            //         }
            //     })
            // });
            //接口获取首页列表
            axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1530691504150").then(res=>{
                this.carList=res.data.data
                //获取首字母
                this.carList.map((item,index)=>{
                    let N = item.Spelling.slice(0,1)
                    if(this.initials.indexOf(N) === -1){
                        this.initials.push(N)
                    }
                })
            })
        },
        //点击品牌获取数据
        MasterBrand(id, showMaster){
            //获取品牌列表
            fetch('https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID='+id).then(res=>res.json()).then(res=>{
                this.getMasterBrandList = res.data
                console.log(this.getMasterBrandList)
            })
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

