<template>
  <div class="shop-wrap">
        <div class="shop">
            <h3>横之然旗舰店</h3>
            <Product id="1" univalent="798" originalPrice="898" @transferValue="val"/>
            <Product id="2" univalent="698" originalPrice="798" @transferValue="val"/>                                                                       
        </div>
         <div class="price-box">
            <p><span>商品总金额</span><b class="total-p">￥{{sum1}}</b></p>
            <p><span>运费</span><span class="freight">￥{{freight}}</span></p>
            <p><span>总额（含运费）</span><b class="total-s">￥{{sum2}}</b></p>
        </div>
  </div>
</template>

<script>
import Product from './Product'
import bus from '../js/vue-bus'
export default {
  data() {
    return {
        freight:10,
        sum1:0,
        sum2:0,
        stor:{}
    }
  },
  watch:{
    stor(n){                                
        let sums=0;
        for(let i in n){
            sums+=n[i];
        }
        this.sum1=sums
        this.sum2=sums+this.freight
        bus.$emit('calculation',this.sum2)
    }
  },
  methods:{
    val(num){
        this.nums=num.a
        let obj =Object.assign({},this.stor)
        obj[num.id]=num.b
        this.stor=obj;
    }
  },
  components: {
        Product
  }
}
</script>

<style scoped>
</style>
