<template>
  <div id="app">
      <Header/>
      <form action="">
          <label for="">账号 : <Input name="user" type="text" placeholder="手机号/邮箱" @data="data"/></label>
          <label for="">验证码 : <Input name="identify" type="text" placeholder="验证码" @data="data"/><button type="button">获取验证码</button></label>
          <label for="">密码 : <Input name="pwd" type="text" placeholder="密码" @data="data"/></label>
          <label for="">确认密码 : <Input name="qpwd" type="text" placeholder="确认密码" @data="data"/></label>
          <button type="submit" class="btn">提交</button>
      </form>
  </div>
</template>

<script>
    import Header from './components/header.vue'
    import Fm from './components/fm.vue'

    export default {
      name: 'App',
      data(){
        return{}
      },methods:{
         data(a){
            this.obj[a.place]=a.txt;
            if(this.obj.mm=='123'){
              console.log('正确')
            }else{ console.log('错误')}
        }
      },
      components: {
        Header,
        Fm
      }
    }
</script>

<style>
@import url('./css/style.css');
</style>
