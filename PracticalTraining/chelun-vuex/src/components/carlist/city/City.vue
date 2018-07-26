<template>
    <ul class="list">
        <li v-for="(item,index) in data" @click.stop="cityAuto(item.CityName)" :key="index">{{item.CityName}}</li>
    </ul>
</template>

<script>
export default {
    name: 'City',
    props:{
        data:{
            type:Array
        }
    },
	methods:{
        //自动定位
        cityAuto(city){
            sessionStorage.setItem('city',city);
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './scss/city.scss';
</style>