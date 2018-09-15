<template>
   <div class="header">
        <span><router-link to="/"><i class="icon iconfont icon-angle-left"></i></router-link></span>
        <slot></slot>
        <span><i class="icon iconfont icon-gengduo"></i></span>
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
