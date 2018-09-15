<template>
  <div id="app">
    <Header/>
    <Index/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Index from './components/Index'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Index,
    Footer
  }
}
</script>

<style>
@import  url('css/style.css');
</style>
