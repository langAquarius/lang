<template>
    <div class="enquire-price">
        <div class="header" >可向多个商家询问最低底价，商家及时回复</div>
        <div class="section" v-if="Object.keys(priceList).length">
           <dl @click="enquierDetail(priceList.details.serial.SerialID)">
                <dt><img :src="priceList.details.serial.Picture" alt=""/></dt>
                <dd>
                    <h5>{{priceList.details.serial.AliasName}}</h5>
                    <p>
                        <span>{{priceList.details.market_attribute.year}}款&ensp;{{priceList.details.car_name}}</span>
                        <span class="go-info">></span>
                    </p>
                </dd>
               
           </dl>
           <div class="self-info">
                <p class="tip">个人信息</p>
                <ul>
                    <li><span>姓名</span><input type="text" placeholder="输入你的真实中文姓名" maxlength="4"></li>
                    <li><span>手机</span><input type="tel" placeholder="输入你的真实手机号码" maxlength="11"></li> 
                    <li @click="cityChoose"><span>城市</span><span>北京></span></li>
                </ul> 
                <div class="quotation"><p>询最低价</p></div>
            </div>
            <div class="dealer-info">
                <p class="tip">选择报价经销商</p>
                <ul>
                    <li v-for="(item,index) in priceList.list" :key="index">
                        <p><span>{{item.dealerShortName}}</span><span>{{numbers(item.promotePrice)}}</span></p> 
                        <p><span>{{item.address}}</span><span>售{{item.saleRange}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Price',
    computed:{
        ...mapState({
            priceList:state=>state.price.priceData
        })
    },
    created() {
        this.numbers()
    },
    mounted(){
        let id = this.$route.query.price;
        this.$store.dispatch('getPriceData',id);
    },
	methods:{
        /**
        *字符串截取保留小数点后两位
        *@params String
        *@return String
        */
        numbers(num){
            if(num){
                return num.substring(0,num.length-2)
            }
        },
        enquierDetail(carId){
            this.$router.push({
                path:`/detail/EnquirePrice?id=${carId}`,
                qurey:{
                    id:carId
                }
            })
        },
        cityChoose(){
            this.$router.push({path:'/enquirePrice/city'})
        }
    }
}
</script>
 
<style lang="scss" scoped>
    @import './scss/price.scss';
</style>

