<template>
  <div id="app">
    <div class="wrap">
        <div class="box" v-Drag>123</div>
        <div class="box1" v-Drag>456</div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html,body,#app,.wrap{
  width:100%;
  height:100%;
}
.box1{
  width:50px;
  height:50px;
  position:absolute;
  top:100px;
  left:40px;
  background:pink;
}
.box{
  width:50px;
  height:50px;
  position:absolute;
  top:0;
  left:0;
  background:limegreen;
}
</style>
