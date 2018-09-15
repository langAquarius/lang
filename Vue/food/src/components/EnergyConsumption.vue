<template>
  <div class="energy-wrap">
     <Header>
        <span>食物能量转换</span>
    </Header>
    <Nav>
        <div class="zhu">
            <p>注:课查询1500多种食物的营养成分，如食物中的脂肪、蛋白质、热量、维生素A、胡萝卜素、钙等营养成分...GI值是食物的血糖生成...</p>
        </div>
    </Nav>
  </div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
export default {
  data() {
    return {

    }
  },
  components: {
    Header,
    Nav
  }
}
</script>

<style scoped>
</style>
