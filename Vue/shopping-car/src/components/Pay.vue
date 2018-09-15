<template>
    <div class="pay">
        <div v-for="list in paylist">
            <p><span>{{list.pay}}:</span><span>{{list.mroeny}}</span></p>
            <Payment :payType="list.paytype" :mroeny="list.mroeny" :sump="sum" v-on:nums="nums"/>
        </div>
        <div><p><span>其他支付方式</span></p><span>></span></div>            
    </div>
</template>

<script>
import Payment from './Payment'
import bus from '../js/vue-bus'
export default {
  data() {
    return {
      paylist:[{
        pay:'余额支付',
        mroeny:200,
        paytype:'balance'
      },
        {
        pay:'奖金支付',
        mroeny:100,
        paytype:'bonus',
      }],
      sum:0,
      obj:{}
    }
  },
  methods:{
    nums(val){
      if(!val.flag){
          this.obj[val.id]=val.price
      }else{
          this.obj[val.id]=0
      }
      //console.log(this.obj)
      let adds=0
      for(let key in this.obj){
          adds+=this.obj[key]
      }
     this.sum=adds
     bus.$emit('transferV',this.sum)
     //console.log(this.sum)
    }
  },
  components:{
      Payment
  }
}
</script>

<style scoped>
</style>
