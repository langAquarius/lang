<template>
    <div class="detail">
        <div class="section">
            <div class="Img" @click="allPicture(ID)"><img :src="url(carDetail.CoverPhoto)"><span>{{carDetail&&carDetail.pic_group_count}}张照片</span></div>
            <div class="synopsis">
                    <p>
                        <span>{{carDetail&&carDetail.market_attribute.dealer_price}}</span>
                        <span>指导价&ensp;{{carDetail&&carDetail.market_attribute.official_refer_price}}</span>
                    </p>
                    <p @click="enquirePrice(carDetail&&carDetail.BottomEntranceLink)">{{carDetail&&carDetail.BottomEntranceTitle}}</p>
            </div>
            <div class="filter">
                    <div class="years">
                        <span v-for="(item,index) in years" @click="yearFilter(item)" :class="item===year?'active':''" :key="index">
                            {{item}}
                        </span>
                    </div>
                    <div class="info">
                        <ul>
                            <li v-for="(list,idx) in carList[year]" :key="idx" >
                                <h5>{{list.exhaust_str}}/{{list.max_power_str}}&ensp;{{list.inhale_type}}</h5>
                                <ol>
                                    <li>{{list.market_attribute.year}}款&ensp;{{list.car_name}}</li>
                                    <li>{{list.horse_power}}马力&ensp;{{list.gear_num}}档</li>
                                    <li>指导价 {{list.market_attribute.official_refer_price}}&ensp;<span>{{list.market_attribute.dealer_price_min}}</span></li>
                                </ol>
                                <p @click="enquirePrice(list.car_id)">询问低价</p>
                            </li>
                        </ul>
                    </div>
            </div>
       </div>
       <div class="enquire-price" @click="enquirePrice(carDetail.BottomEntranceLink)">
            <p>询问底价</p>
            <p>本地经销商为您报价</p>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Detail',
    data () {
	    return {
	       carDetail:[],
           years:null,
           carList:[],
           ID:null,
           year:'全部'
	    }
	},
    mounted(){
        //通过this.$route拿到参数
        let id = this.$route.query.id;
        //console.log(id)
        this.ID = id
        this.getJson(id);
    },
	methods:{
        //json数据获取数据
        getJson(id){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            axios.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID="+id).then(res=>{
                this.carDetail=res.data.data;
                //console.log(this.carDetail)
                //筛选数据
                let yearArr = ['全部']//年份数据
                let carArr = {'全部':[]}//分类后的汽车信息
                res.data.data.list.forEach((item,index)=>{
                    //console.log(item)
                    let year = item.market_attribute.year
                    if(yearArr.indexOf(year)===-1){
                        yearArr.push(year)
                        //console.log([item])
                        carArr[year]=[item]
                    }else{
                        carArr[year].push(item)
                    }
                    carArr['全部'].push(item)
                })
                this.years = yearArr
                console.log(yearArr,carArr)
                //排序
                let sortCar = (arr)=>{
                    return arr.sort((a, b)=>{
                        if (a.exhaust < b.exhaust){
                            return -1;
                        }else if(a.exhaust > b.exhaust){
                            return 1;
                        }else{
                            if (a.max_power < b.max_power){
                                return -1;
                            }else if(a.max_power > b.max_power){
                                return 1;
                            }else{
                                return b.inhale_type - a.inhale_type;
                            }
                        }
                    })
                }
                console.log(carArr)
                for (let i in carArr){
                    carArr[i] = sortCar(carArr[i]);
                }
                this.carList = carArr
                console.log(this.carList);              
            })
        },
        url(url){
            return url.replace(/\{0\}/,1)
        },
        /**
        *按年份筛选
        *@params String :年份
        *return String：年份
        */
        yearFilter(item){
            this.year = item
        },
        //x询问底价
        enquirePrice(id){
            id = id.split('/')[id.split('/').length-1]
            this.$router.push({
                path:`/detail/price?price=${id}`,
                qurey:{
                    price:id
                }
            })
        },
        /**
         *显示所有照片
         *跳转路由
         */
        allPicture(ID){
            this.$router.push({
                path: `/picture?ID=${ID}`,
                query:{
                    ID
                }
            })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import './detail.scss';
</style>

