<template>
    <div>
        <div class="left">
            <router-link  tag="p" :to="{name:'around', params:{id: 1}}" active-class="special">周边</router-link>
            <router-link  tag="p" :to="{name:'around', params:{id: 2}}" active-class="special">美国</router-link>
            <router-link  tag="p" :to="{name:'around', params:{id: 3}}" active-class="special">日本</router-link>
        </div>
        <div><router-view></router-view></div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="" scoped>
   .special {
       background: purple;
   }
</style>