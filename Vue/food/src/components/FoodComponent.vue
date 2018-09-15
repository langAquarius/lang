<template>
  <div class="foodComponent-wrap">
    <Header>
        <span>食物成份表</span>
    </Header>
    <Nav>
        <div class="zhu">
            <p>注:课查询1500多种食物的营养成分，如食物中的脂肪、蛋白质、热量、维生素A、胡萝卜素、钙等营养成分...GI值是食物的血糖生成...</p>
        </div>
    </Nav>
    <div class="content">
        <dl v-for="item in list">
          <dt><img :src="item.img" alt=""></dt>
          <dd>{{item.txt}}</dd>
        </dl>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import Nav from './Nav'
export default {
  data() {
    return {
      list:''
    }
  },
  mounted(){
    axios.get('/foodComponent').then(res=>{
      this.list=res.data
    })
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style scoped>
.foodComponent-wrap{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.content{
    display:flex;
    flex-wrap:wrap;
    background:#fff;
  }
  .content dl{
    width:33.3%;
    padding:10px 0;
    text-align:center;;
  }
  .content dl dt img{
    width:60px;
    height:62px;
  }
  .content dl dd{
    line-height:2;
    color:#333333;
  }
</style>