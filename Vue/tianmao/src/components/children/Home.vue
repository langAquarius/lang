<template>
  <div class="section-wrap">
    <ul class="left">
        <li v-for="list in citylist"><router-link to="">{{list}}</router-link></li>
    </ul>
     <div class="right">
    
     </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
        citylist:['热门','周边','国内','马尔代夫','欧洲','美洲','韩国','日本','泰国','东南亚','南亚','港澳']
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
