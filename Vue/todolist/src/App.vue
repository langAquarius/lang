<template>
  <div id="app">
    <input type="text" v-model="msg"><button type="button" @click="sumbit">提交</button>
    <ul>
      <li v-for="i in $store.state.list">{{i}}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:''
    }
  },
  created(){
    console.log(this.$store)
  },
  methods:{
      sumbit(){
         this.$store.commit('sumbit',this.msg)
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
