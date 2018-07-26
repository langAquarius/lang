<template>
    <div class="enquire-price">
        <div class="header" >可向多个商家询问最低底价，商家及时回复</div>
        <div class="section">
           <dl @click="enquierDetail(enquireData&&enquireData.details.serial.SerialID)">
                <dt><img :src="enquireData&&enquireData.details.serial.Picture" alt=""/></dt>
                <dd>
                    <h5>{{enquireData&&enquireData.details.serial.AliasName}}</h5>
                    <p>
                        <span>{{enquireData&&enquireData.details.market_attribute.year}}款&ensp;{{enquireData&&enquireData.details.car_name}}</span>
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
                    <li v-for="(item,index) in enquireData&&enquireData.list" :key="index">
                        <p><span>{{item.dealerShortName}}</span><span>{{numbers(item.promotePrice)}}</span></p> 
                        <p><span>{{item.address}}</span><span>售{{item.saleRange}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EnquirePrice',
    data () {
	    return {
	       enquireData:null,
	    }
	},
    created() {
        this.numbers()
    },
    mounted(){
        //通过this.$route拿到参数
        //console.log(this.$router)
        let price = this.$route.query.price;
        this.getJson(price)
    },
	methods:{
        //json数据获取数据
        getJson(price){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            axios.get(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${price}&cityId=201&_1531122335819`).then(res=>{
                console.log(res.data.data)
                this.enquireData=res.data.data;         
            })
        },
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
                path:`/enquirePrice/filters?type=${carId}`,
                qurey:{
                    type:carId
                }
            })
        },
        cityChoose(){
            this.$router.push({path:'/enquirePrice/city'})
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import './enquirePrice.scss';
</style>

