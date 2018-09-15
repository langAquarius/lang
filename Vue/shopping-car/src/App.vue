<template>
  <div id="app">
    <Header/>
    <Shopping/>
    <Footer/>
  </div>
</template>

<script>
import Shopping from './components/Shopping'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Shopping,
    Footer
  }
}
</script>

<style>
@import url('./fonts(1)/iconfont.css');
@import url('./css/style.css');
</style>
