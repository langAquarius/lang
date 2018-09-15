<template>
    <div class="all-picture" @scroll="handleScrollMore(pictureAllList.Page)">
        <ul ref="ul" >
            <li v-for="(item,index) in List" @click="enlargePicture(url(item.Url))" :key="index">
                <img v-lazy="url(item.Url)" />
            </li>
        </ul>
       
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import EnlargePicture from '../../common/enlargePicture/EnlargePicture'
export default {
    name:'PictureAll',
    data(){
        return {
            page:1,
            all:null
        }
    },
    components:{
        //EnlargePicture
        //  <EnlargePicture :pictureAllList="pictureAllList" :List="List"/>
    },
    computed:{
        ...mapState({
             pictureAllList:state=>state.picture.pictureAllData,
             List:state=>state.picture.List
        })
    },
    created() {
        this.url()
    },
    mounted() {
        //通过this.$route拿到参数
        this.all = this.$route.query.all;
        this.$store.dispatch('getPictureAllData',{all:this.all,page:this.page})
    },
    methods:{
        //替换图片的{0}
        url(url){
            if(url){
                return url.replace(/\{0\}/,1)
            }
        },
        handleScrollMore(page){
            let scrollHeight = this.$refs.ul.getBoundingClientRect().height - window.innerHeight;
            let current = window.event.target.scrollTop;
            if (current > (scrollHeight-20)&&page!==this.page){
                this.$store.dispatch('getPictureAllData',{all:this.all,page})
                this.page = page
            }
        },
        enlargePicture(img){
            console.log(111,img)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './scss/picture.scss';
</style>