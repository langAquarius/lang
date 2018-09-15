<template>
  <div class="Gi-wrap">
    <Header>
        <span>食物GI表</span>
    </Header>
    <Nav>
        <div class="zhu">
            <p>注:GI值是食物的血糖生成指数，失衡客流量食物摄入后引起血糖反应的指标</p>
            <div class="standard">
                <p class="donw"><b></b><span>低</span></p>
                <p class="secondary"><b></b><span>中</span></p>
                <p class="heigh"><b></b><span>高</span></p>
            </div>
        </div>
    </Nav>

    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(slider,idx) in navlist" @click="change(idx,slider.name)" :class="index==idx?'shows':''" :key="slider.id">
               <span>{{slider.type}}</span><img :src="slider.img" alt="">
            </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Bus from '../view/js/bus.js'

export default {
  data() {
    return {
        navlist:[
            {type:'谷物类',img:'../../static/images/navimg/18.jpg',name:"Grain"},
            {type:'蔬菜类',img:'../../static/images/navimg/2.jpg',name:"Vegetables"},
            {type:'水果类',img:'../../static/images/navimg/3.jpg',name:"Fruits"},
            {type:'肉蛋类',img:'../../static/images/navimg/4.jpg',name:"MeatEggs"},
            {type:'大豆类',img:'../../static/images/navimg/5.jpg',name:"Soybean"},
            {type:'奶制品',img:'../../static/images/navimg/6.jpg',name:"Milk"},
            {type:'甜点类',img:'../../static/images/navimg/7.jpg',name:"Dessert"},
            {type:'碳酸饮料',img:'../../static/images/navimg/8.jpg',name:"Grain"},
            {type:'果汁类',img:'../../static/images/navimg/9.jpg',name:"Grain"}
            ],
            index:0
    }
  },
  mounted(){
    new Swiper('.swiper-container', {
         slidesPerView :5.5,
    })
    console.log(this.$route.matched)//[{…}, {…}]
    console.log(this.$route.params)//====>{id: "Grain"}
    console.log(this.$route.path)//=====>/Grain/Grain
    console.log(this.$route.fullPath)//=====>/Grain/Grain
  },
  methods:{
     change(idx,name){
        this.index=idx
        this.$router.push({name:'Grain',params:{id:name}})
     }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style scoped>
.nav{
    height:1.4rem;
    background:#EBEBEB;
    padding-left:.2rem;
    padding-right:.2rem;
}
.nav label input{
    width:100%;
    height:.3rem;
    margin-top:.2rem;
    border:0;
    border-radius:.05rem;
    text-align: center;
}
.nav .zhu{
    margin-top:.15rem;
    font-size:.12rem;
    color:#808080;
}
.nav .zhu .standard{
    height:.3rem;
    display:flex;
    align-items:center;
}
.nav .zhu .standard p{
    flex:1;
   
}
.donw b{
    width:.14rem;
    height:.14rem;
    display:inline-block;
    background:#58B431;
}
.secondary b{
    width:.14rem;
    height:.14rem;
    display:inline-block;
    background:#0BCBF2;
}
.heigh b{
    width:.14rem;
    height:.14rem;
    display:inline-block;
    background:#EA5042;
}
.swiper-container{
    padding-left:.15rem;
    padding-right:.2rem;
}
.swiper-slide{
    position:relative;
    width:1rem;
    height:.45rem;
    line-height:.45rem;
    text-align:center;
    margin:.2rem .02rem;
    border-radius:.05rem;
    overflow:hidden;
}
.swiper-slide span{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.6);
    color:#fff;
}
.swiper-slide img{
    display:block;
    height:100%;
}
.shows>span{
   display:none;
}
</style>
