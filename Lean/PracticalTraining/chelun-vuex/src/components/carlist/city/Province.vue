<template>
    <div class="city">
        <div>
            <ol>
                <p>自动定位</p>
                <li @click="cityAuto('北京')">北京</li>
            </ol>
            <ul>
                <p>省市</p>
                <li v-for="(item,index) in provinceList" @click="cityChoose(item.CityID)" :key="index"><span>{{item.CityName}}</span><span>〉</span></li>
            </ul>
        </div>
        <div class="city-list" @click="hidden" :class="flag?'active':''"><City :data="cityList"/></div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import City from './City.vue'
export default {
    name: 'Province',
    data(){
        return {
            flag:false
        }
    },
    computed:{
        ...mapState({
            provinceList:state=>state.city.provinceData,
            cityList:state=>state.city.cityData
        })
    },
    components:{City},
    mounted(){
        this.$store.dispatch('getProvinceData');
    },
	methods:{
        cityAuto(city){
            sessionStorage.setItem('city',city);
            this.$router.back();
        },
        //省份--->选择城市
        cityChoose(id){
            this.flag = true
            this.$store.dispatch('getCityData',id);
        },
        hidden(e){
            this.flag = false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './scss/city.scss';
</style>