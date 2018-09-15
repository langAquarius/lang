<template>
  <div class="foots">
        <router-link to="/homePage" class="footer">
            <span><i class="icon iconfont icon-shouye"></i></span>
            <span>职位</span>           
        </router-link>
        <router-link to="/seach" class="footer">       
            <span><i class="icon iconfont icon-fangdajing"></i></span>
            <span>搜索</span>          
        </router-link>
        <router-link to="/me" class="footer">         
            <span><i class="icon iconfont icon-wode"></i></span>
            <span>我的</span>          
        </router-link>        
  </div>
</template>

<script>
    export default {
        data() {
            return {
                 
            }
        },
        
        components: {

        }
    }
</script>

<style scoped>
</style>
