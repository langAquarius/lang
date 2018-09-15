<template>
  <div class="footer-wrap">
      <div>
        <p clas="sum">总计：<span>{{priceZ}}</span></p>
        <p>含运费</p>
      </div>
      <button type="submit" @click="up">提交订单</button>
  </div>
</template>

<script>
import bus from '../js/vue-bus'
    export default {
    data() {
        return {
            priceZ:0,
            sump:0,
            flag:false
        }
    },
   mounted(){
        bus.$on("calculation",(price)=> {
            this.priceZ=price
        })
        bus.$on('quan',(pic)=>{
            this.priceZ=this.priceZ-pic
        })
        bus.$on('no',(pic)=>{
            this.priceZ=this.priceZ+pic
        })
    },
    methods:{
        up(){
            if(this.priceZ>0){
                this.flag=true
            }else{
                this.flag=false
            }
            console.log(this.flag)
            bus.$emit('open',this.flag)
        }
    },
    components:{
       
    }
    }
</script>

<style scoped>
</style>
