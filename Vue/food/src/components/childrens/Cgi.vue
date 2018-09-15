<template>
  <div class="content">
    <ul>
        <li v-for="list in dataList"><span>{{list.name}}</span><span>{{list.SugarContent}}</span></li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
       lists:'Grain',
       dataList:''
    }
  },
  created(){
     this.text()
  },
  watch:{
    '$route':function(n){
        this.lists=n.params.id
        this.text()
        console.log(this.$route.fullPath)
        console.log(this.$route.matched)
    }
  },methods:{
    text(){
        axios.get('/CgiData').then(res=>{
           res.data.map((item,index)=>{
                if(item.name==this.lists){
                    this.dataList=item.content
                    console.log(this.dataList)
                }
            })
        })
    }
    
  },
  components: {

  }
}
</script>

<style scoped>
.content {
    width:100%;
    height:100%;
    padding-left:.2rem;
}
.content ul li{
    height:.5rem;
    padding-right:.2rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:.01rem solid #ccc;
}
</style>
