<template>
    <div class="city">
        <div>
            <ol>
                <p>自动定位</p>
                <li @click="cityAuto">北京</li>
            </ol>
            <ul>
                <p>省市</p>
                <li v-for="(item,index) in cityData" @click="cityChoose(item.CityID)" :key="index"><span>{{item.CityName}}</span><span>〉</span></li>
            </ul>
        </div>
        <CityDetail :data="data"/>
    </div>
</template>

<script>
import axios from 'axios'
import CityDetail from './CityDetail.vue'
export default {
    name: 'City',
    data () {
	    return {
	       cityData:null,
           id:'1',
           data:[]
	    }
	},
    components:{CityDetail},
    mounted(){
        this.getJson();
        this.getData(1)  
        console.log(this.id)
    },
	methods:{
        //json数据获取数据
        getJson(){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            axios.get(`https://baojia.chelun.com/v1-city-alllist.html?_1531363507147`).then(res=>{
                this.cityData=res.data.data        
            })
        },
        //自动定位
        cityAuto(){

        },
        //省份--->选择城市
        cityChoose(idx){
            this.getData(idx)
            // this.id = idx
            // console.log(this.id)
        },
        getData(idx){
            axios.get(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${idx}&_1531373699623`).then(res=>{
                this.data = res.data.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './city.scss';
</style>