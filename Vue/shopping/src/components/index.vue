<template>
  <div class="index-wrap">
    <header>
      <a>返回</a><a>购物车</a><a></a>
    </header>
    <section>
    	<div class="chc">
    		全选<input type="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked()"/>
    	</div>
      <div class="product" v-for="item in msg">
          <dl>
           
            <dt><img :src="item.p_url"></dt>
            <dd><p>{{item.p_name}}<span>单价:{{item.p_price}}</span></p><p><span @cilck="minus">-</span><span @cilck="increase">+</span></p></dd>
          </dl>
          <div>
            <input type="checkbox" id="runoob"  v-model="item.isCheck" @click="changeChecked()"/>
          </div>
      </div>
    </section>
    <footer>
    	<div></div>
    	<div>总数:<span></span></div>
    	<div>总价:<span></span></div>
    </footer>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'index',
  data () {
    return {
      msg:null,
      checked: false
		 
    }
  },
    mounted(){
    	this.choose()
      this.minus()
      this.increase()
  },
	methods: {
		changeAllChecked: function() {
			if (this.checked) {
        this.msg.map((item)=>{
          item.isCheck=false
        })
			} else {
       this.msg.map((item)=>{
          item.isCheck=true
        })
			}
		},
    changeChecked(){
      let team=[];
       this.msg.map((item)=>{
         if(item.isCheck){
           team.push(item)
         }
         if(team.length==this.msg.length-1){
           this.checked=true
         }else{
           this.checked=false
         }
       })
        //this.compute()
    },
    choose(){
  		axios.get("/shopping").then(result=>{
  			this.msg=result.data;
        console.log(this.msg.length)
  		})
  	},
    minus(){},
    increase(){}
	},                            
	watch: {
		"checkedNames": function() {
			if (this.checkedNames.length == this.msg.length) {
				this.checked = true
			} else {
				this.checked = false
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
