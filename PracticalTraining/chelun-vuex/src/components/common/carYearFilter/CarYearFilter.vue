<template>
    <div class="info">
        <ul>
            <li v-for="(value,key) in carList[type]" :key="key" >
                <h5>{{value.exhaust_str}}/{{value.max_power_str}}&ensp;{{value.inhale_type}}</h5>
                <ol>
                    <li>{{value.market_attribute.year}}款&ensp;{{value.car_name}}</li>
                    <li>{{value.horse_power}}马力&ensp;{{value.gear_num}}档</li>
                    <li>指导价 {{value.market_attribute.official_refer_price}}&ensp;<span>{{value.market_attribute.dealer_price_min}}</span></li>
                </ol>
                <p @click="enquirePrice(value.car_id)">询问低价</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CarYearFilter',
    props:['type'],
    computed:{
        ...mapState({
            carList:state=>state.detail.carData,
            id:state=>state.detail.ID
        })
    },
    mounted(){
        let id = this.$route.query.carDetail;
        this.$store.dispatch('getCarDetailData',id);//id=2593
    },
	methods:{
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
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import './scss/carYearFilter.scss';
</style>