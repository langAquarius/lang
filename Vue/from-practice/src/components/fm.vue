<template>
    <div class="form-wrap">
        <input type="text" :placeholder="placeholder" @input="changes" v-model="text">
    </div>
</template>
<script>
    export default {
      props:['name','placeholder'],
        data () {
          return {
              txt:''
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
 