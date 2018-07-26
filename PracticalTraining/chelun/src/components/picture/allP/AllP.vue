<template>
    <div class="all-picture">
        <ul>
            <li v-for="(item,index) in allPicture" :key="index">
                <img :src="url(item.Url)" />
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'AllPicture',
    data(){
        return {
            allPicture:null
        }
    },
    mounted() {
        //通过this.$route拿到参数
        let all = this.$route.query.all;
        this.getJson(all);
    },
    methods:{
        getJson(all){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            axios.get(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=${all}&Page=1&PageSize=30&_1531053990902`).then(res=>{
                this.allPicture = res.data.data.List   
                console.log(this.allPicture)    
            })
        },
        //替换图片的{0}
        url(url){
            return url.replace(/\{0\}/,1)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import 'allP.scss';
</style>