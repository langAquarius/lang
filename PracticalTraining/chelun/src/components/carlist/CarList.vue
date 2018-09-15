<template>
    <div class="car-list" ref="carList">
        <aside class="car-item-list" v-for="(item,index) in initials" :id="item" :key="index">
            <p class="initial" ref="initial">{{item}}</p>
            <ul>
                <li v-for="(value,key) in carList" v-if="value.Spelling.slice(0,1)===item" @click="MasterBrand(value.MasterID,'showMaster')" :key="key">
                    <img :src="value.CoverPhoto"/>
                    <span>{{value.Name}}</span>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'CarList',
    props:{
        carList:{
            type:Array,
            default:[]
        },
        initials:{
            type:Array,
            default:[]
        },
        MasterBrand:{
            type:Function,
            default:()=>{}
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'carList.css';
</style>
