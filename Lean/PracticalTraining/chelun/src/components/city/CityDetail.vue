<template>
    <ul class="city-list">
    
        <li v-for="(item,index) in data" @click="cityAuto" :key="index">{{item.CityName}}</li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CityDetail',
    data () {
	    return {
	       cityList:null,
	    }
	},
    props:{
        data:{
            type:Array
        }
    },
    mounted(){
        console.log(this.data)
        this.getJson();
    },
	methods:{
        //json数据获取数据
        getJson(){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            
        },
        //自动定位
        cityAuto(){

        }
    }
}
</script>

<style lang="scss" scoped>
    @import './city.scss';
</style>