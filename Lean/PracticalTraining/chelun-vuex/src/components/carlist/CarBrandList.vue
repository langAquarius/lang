<template>
    <div class="car-list" ref="carList">
        <aside class="car-item-list" v-for="(item,index) in letterList" :id="item" :key="index">
            <p class="initial" ref="initial">{{item}}</p>
            <ul>
                <li v-for="(value,key) in carBrandList" v-if="value.Spelling.slice(0,1)===item" @click="masterBrand(value.MasterID,'showMaster')" :key="key">
                    <img v-lazy="value.CoverPhoto"/>
                    <span>{{value.Name}}</span>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>

export default {
    name: 'CarBrandList',
    props:{
        carBrandList:{
            type:Array
        },
        letterList:{
            type:Array
        },
        masterBrand:{
            type:Function
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import './scss/carlist.scss';
</style>
