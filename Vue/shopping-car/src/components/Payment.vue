<template>
  <div class="payment-wrap">
      <p class="payment"  @click="tab" :class="[flag?'show':'']" ><span></span></p>
  </div>
</template>

<script>
import bus from '../js/vue-bus'
export default {
  props:["payType","mroeny"],
  data() {
    return {
         flag:false,
         sum3:0,
         arr:[],
         obj:{},
         mroenyZ:0
    }
  },
  mounted(){
    bus.$on('transferV',(pic)=>{
      this.sum3=pic
    })
  },
  methods:{
     tab(){
         this.$emit("nums",{
            flag:this.flag,
            id:this.payType,
            price:this.mroeny
         })
         if(this.flag){
            this.flag=false;
            bus.$emit("no",this.sum3)
         }else{
            this.flag=true;
            bus.$emit("quan",this.sum3)
         }
                
    //   if(this.flag){
    //     this.flag=false;
    //   }else{
    //     this.flag=true;
    //     let objs=Object.assign({},this.obj)
    //     // if(this.payType=='balance'){
    //     //     this.obj[this.payType]=this.mroeny
    //     // }else if(this.payType=='bonus'){
    //     //     this.obj[this.payType]=this.mroeny
    //     // }
    //     console.log(this.obj)
    //   }
     }
  }
}
</script>

<style scoped>
</style>
