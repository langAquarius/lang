<template>
    <div class="picture">
        <div class="header"><span @click="color">颜色</span><span @click="appearance">外观</span></div>
        <div class="section">
            <ul v-for="(item,index) in pictureData" :key="index">
                <p @click="morePicture(item.Id)">
                    <span>{{item.Name}}</span>
                    <span>{{item.Count}}张照片></span>
                </p>
                <li v-for="(value,keys) in item.List" :key="keys">
                    <img :src="url(value.Url)" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Picture',
    data(){
        return {
            pictureData:null,
            id:null,
        }
    },
    mounted() {
        console.log(this.$router)
        //通过this.$route拿到参数
        this.id = this.$route.query.ID;
        this.getJson(this.id);
    },
    methods:{
        getJson(id){   
            //接口获取首页列表（根据不同的id拿到不同的数据）
            axios.get(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&_1530930692317`).then(res=>{
                this.pictureData = res.data.data
                console.log(this.pictureData)       
            })
        },
        //替换图片的{0}
        url(url){
            return url.replace(/\{0\}/,1)
        },
        morePicture(all){
            this.$router.push({
                path: `/picture/all?all=${all}`,
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
           this.$router.push({path: '/enquirePrice/filters'})
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './picture.scss';
</style>