<template>
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
</template>

<script>
import axios from 'axios'
export default {
    name: 'Filters',
    data () {
	    return {
           years:[],
           carList:[],
           ID:null,
           year:'2018'
	    }
	},
    mounted(){
        //通过this.$route拿到参数
        let id = this.$route.query.type;
        //console.log(id)
        // this.ID = id
        this.getJson(id);
        // console.log(this.num)
    },
	methods:{
        //json数据获取数据
        getJson(id){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            axios.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID="+id).then(res=>{
                this.carDetail=res.data.data;
                //console.log(this.carDetail)
                //筛选数据
                let yearArr = []//年份数据
                let carArr = {}//分类后的汽车信息
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
        /**
        *按年份筛选
        *@params String :年份
        *return String：年份
        */
        yearFilter(item){
            this.year = item
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import './filter.scss';
</style>