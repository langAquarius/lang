<template>
  <div class="HomePage-wrap" ref="homePageWrap">
			<div class="HomePage-box">

				  <Banner></Banner>
					
					<div class="recommend">为您推荐</div>
					<div id="login2">登录账号，查看专属推荐商品></div>
					<div class="recommend-products">
						<div class="details">
								<dl v-for="item in recommendContent">
										<dt><img v-lazy="item.imageurl"/></dt>
										<dd>
												<span class="product-info">{{item.wname}}</span>
												<p class="product-price">￥{{item.jdPrice}}</p>
												<p class="product-similarity">好评率{{item.good}}</p>
										</dd>
								</dl>
						</div>  				
					</div>
			</div>  
  </div>
</template> 

<script>
  import axios from "axios"
	import Scroll from "better-scroll"
	import Banner from "@/components/Banner.vue"

  export default {
	  data () {
	    return {
	     recommendContent:null
	    }
	  },
	    mounted(){
	    	this.getJson()
				this.$nextTick(() => {this.myScroll = new Scroll(this.$refs.homePageWrap,{})})
	    },
	    methods:{
	    	getJson(){
						axios.get("/api/index/recommend.action",{params:{page:1,_format_:'json'}}).then(res=>{
								this.recommendContent=JSON.parse(res.data.recommend).wareInfoList
								console.log(this.recommendContent)
								const myScroll=new Scroll(this.$refs.homePageWrap, {
									click: true
								})
						})
	    	}
			},
			components:{
				Banner
			}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
