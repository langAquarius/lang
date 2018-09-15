<template>
   <div class="index-wrap" ref="indexWrap">
      <div class="index-box">
            <header>拉勾网</header>  
            <nav><p>10秒钟职位定制</p><p>编辑</p></nav>
            <div id="index-content">
                <dl v-for="data in indexContent">
                    <dt><img :src="'https://static.lagou.com/'+data.companyLogo" alt=""></dt>
                    <dd>
                        <div class="company">{{data.companyFullName}}</div>
                        <div class="job-salary"><span class="job">{{data.positionName}}[{{data.city}}]</span><span class="salary">{{data.salary}}</span></div>
                        <div class="time">今天 15:29</div>
                    </dd>
                </dl>
                <div id="more" @click="moreInfo">加载更多</div>
            </div>

      </div>
   </div>
</template>

<script>
    import axios from "axios"
    import Scroll from "better-scroll"
    export default {
      data(){
          return{
              indexContent:null,
              num:1,
              amount:15,
              pathNum:15
          }  
      },
      components:{},
      mounted(){
          this. getJson()
      },
      methods:{
           getJson(){
              axios.get("/api/listmore.json",{params:{pageNo:this.num,pathSize:this.amount}}).then(res=>{
                    this.indexContent=res.data.content.data.page.result;
                    // console.log( this.indexContent)
              })
              const MyScroll=new Scroll(this.$refs.indexWrap,{
                    mouseWhell:true,
                    click:true,
                    tabe:true
              })
          },
          moreInfo(){
                this.num++;
                this.amount=this.num*this.pathNum
                console.log(this.num)
                console.log(this.amount)
          }
          
         
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
