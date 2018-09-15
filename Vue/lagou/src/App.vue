<template>
   <div id="app">  
        <router-view/>
        <Foots></Foots>
   </div>
</template>

<script>
  import Foots from "@/components/foots.vue"
  export default {
    name: 'App',
    data(){
        return{
            
        }
    },
    components:{
        Foots
    }
  }
</script>

<style>
 @import url("./css/style.css");
 @import url("./fonts(1)/iconfont.css");
</style>
