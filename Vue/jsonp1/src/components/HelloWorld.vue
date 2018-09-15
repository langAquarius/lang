<template>
  <div class="hello">
    世界！你好
  </div>
</template>

<script>
import jsonp from "jsonp"
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){
    this.getJson();
  },
  method:{
    getJson(){
      const url="http://localhost:3333/getJson";
      const opt={
        params:"callpack",
        prefix:"jp"
      }
      jsonp(url,opt,(err,data)=>{
        if(!err){
          console.log(data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
