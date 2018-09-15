<template>
    <div class="picture">
        <div class="header"><span @click="color">颜色</span><span @click="appearance">车款</span></div>
        <div class="section">
            <ul v-for="(item,index) in pictureList" :key="index">
                <p @click="morePicture(item.Id)">
                    <span>{{item.Name}}</span>
                    <span>{{item.Count}}张照片></span>
                </p>
                <li v-for="(value,keys) in item.List" :key="keys">
                    <img v-lazy="url(value.Url)" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'Picture',
    data(){
        return {
            id:null
        }
    },
    computed:{
        ...mapState({
            pictureList:state=>state.picture.pictureData
        })
    },
    mounted() {
        //通过this.$route拿到参数
        this.id = this.$route.query.picture;
        this.$store.dispatch('getPictureData',this.id)
    },
    methods:{
        //替换图片的{0}
        url(url){
            return url.replace(/\{0\}/,1)
        },
        morePicture(all){
            this.$router.push({
                path: '/picture/all',
                query:{
                    all
                }
            })
        },
        color(){
             this.$router.push({
                 path: `/picture/color?id=${this.id}`,
                 query:{
                     color:this.id
                 }
            })
        },
        appearance(){
           //this.$router.push({path: '/enquirePrice/filters'})
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './scss/picture.scss';
</style>