<template>
  <div class="product-wrap">
         <dl>
            <dt><img src="../assets/logo.png" alt=""></dt>
            <dd>
                <div>阿萨德了覅斯蒂芬阿萨德之类的咖啡馆</div>
                <div class="text">
                    <p class="unitPrice"><span class="univalent">￥{{univalent}}</span><span class="originalPrice">￥{{originalPrice}}</span></p>
                    <p class="Number">
                        <span @click="minus()">-</span>
                        <span>{{num}}</span>
                        <span @click="add()">+</span>
                    </p>
                </div>
            </dd>
        </dl>
  </div>
</template>

<script>

export default {
  props:["id","univalent","originalPrice"],
  data() {
    return {
        num:0,
        sum1:0
    }  
  },
  updated(){
      this.$emit("transferValue",{a:this.num,b:this.sum1,id:this.id})
  },
  methods:{
        minus(){
            this.num--
            if(this.num<0){
                this.num=0;
            }
            this.sum1=this.num*this.univalent
        },
         add(){
            this.num++
            if(this.num>10){
                this.num=10;
            }
            this.sum1=this.num*this.univalent
        }
  }
}
</script>

<style scoped>
</style>
