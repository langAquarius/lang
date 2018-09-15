<template>
  <div class="footer-wrap">
    
        <dl v-for="list1 in footerlist">
            <router-link :to="list1.paths" >
                <dt><img :src="list1.img" alt=""></dt>
                <dd>{{list1.text}}</dd>
            </router-link>
        </dl>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerlist:[
          {
            img:'',
            text:'首页',
            paths:'/home'
          }, {
            img:'',
            text:'目的地',
            paths:'/address'
          }, {
            img:'',
            text:'发现',
            paths:'/find'
          }, {
            img:'',
            text:'行程玩法',
            paths:'/play'
          }, {
            img:'',
            text:'我的',
            paths:'/me'
          }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>