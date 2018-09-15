<template>
  <div class="home-wrap">
    <Header>
        <span>食物查询工具</span>
    </Header>
    <div class="section">
      <dl class="box" v-for="item in list">
        <router-link :to="item.url" router-link-active="active">
          <dt><i :class="item.ico"></i></dt>
          <dd>{{item.text}}</dd>
        </router-link>
      </dl>
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  data () {
    return {
      list: [
        {ico:'icon iconfont icon-wodedingdan',text:'食物GI表',url:'/GI'},
        {ico:'icon iconfont icon-eyeoclose',text:'食物交换份',url:'/foodExchange'},
        {ico:'icon iconfont icon-fuzhi',text:'食物成分表',url:'/foodComponent'},
        {ico:'icon iconfont icon-zhuanhuan',text:'常见活动能量消耗转换',url:'/energyConsumption'},
        {ico:'icon iconfont icon-gongzuojilu',text:'BIM测试',url:'/BIM'},
        {url:'/'}]
    }
  },
  components:{
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-wrap{
  width:100%;
  height:100%;
  background:#292B37;
}
.header {
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding-left: .2rem;
    padding-right: .2rem;
    border-bottom:.01rem solid #3B3E4C;
}
.section{
  display:flex;
  flex-wrap:wrap;
  text-align:center;
 
}
.section .box{
  width:50%;
  height:1.2rem;
  border-bottom:.01rem solid #3B3E4C;
}
.section .box:nth-child(2n-1){
  border-right:.01rem solid #3B3E4C;
}
.section .box a{
  display:block;
  height:100%;
  color:#fff;
}
.section .box a dt{
  height:.75rem;
  line-height:.75rem;
}
.section .box .active:hover {
    background:#21232F;
}
</style>
