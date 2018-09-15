<template>
    <div class="content">
        <Menu />
    </div>
</template>

<script>
import axios from 'axios'
import Menu from './common/Menu'
import Content from './common/Content'
export default {
    name:'Home',
    components:{
      Menu,
      Content
    }
}
</script>

<style>
    .content{
        height:100%;
    }
</style>