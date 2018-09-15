<template>
    <div class="section-wrap">
        <div class="info">
            <div class="left">
                <p><span class="name">路飞</span><span class="phone">138****8888</span></p>
                <p class="address">北京市海淀区知春路北京市海淀区知春路北京市海淀区知春路</p>
            </div>
            <div class="right">
                <i class="icon iconfont icon-angle-right"></i>
            </div>
        </div>
        <div class="products">
            <Shop/>
        </div>
        <Pay/>
        <Mark :class="[flag?'shows':'']"/>
    </div>
</template>

<script>
import Shop from './Shop'
import Pay from './Pay'
import Mark from './Mark'
import bus from '../js/vue-bus'
export default {
  name: 'Shopping',
  data () {
    return {
        flag:false
    }
  },
  mounted(){
      bus.$on("open",(fl)=>{
          //console.log(fl)
        this.flag=fl
        //console.log(this.flag)
      })
  },
  components:{
      Shop,
      Pay,
      Mark
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
