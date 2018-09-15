<template>
	<div id="app">
		<Head></Head>
		<div class="section">
			<router-view></router-view>
		</div>
		<div class="myFooter">
			<router-link tag="p" active-class="active" to="/home">
				<dl>
					<dt><i class="icon iconfont icon-17"></i></dt>
					<dd>首页</dd>
				</dl>
			</router-link>
			<router-link tag="p" active-class="active" to="/address">
				<dl>
					<dt><i class="icon iconfont icon-06"></i></dt>
					<dd>目的地</dd>
				</dl>
			</router-link>
			<router-link tag="p" active-class="active" to="/discover">
				<dl>
					<dt><i class="icon iconfont icon-051"></i></dt>
					<dd>发现</dd>
				</dl>
			</router-link>
			<router-link tag="p" active-class="active" to="/play">
				<dl>
					<dt><i class="icon iconfont icon-09"></i></dt>
					<dd>行程玩法</dd>
				</dl>
			</router-link>
			<router-link tag="p" active-class="active" to="/mine">
				<dl>
					<dt><i class="icon iconfont icon-21"></i></dt>
					<dd>我的</dd>
				</dl>
			</router-link>
		</div>
	</div>
</template>

<script>
	import Head from './views/Head/head.vue'
	export default {
		name: 'App',
		components: {
			Head
		}
	}
</script>

<style>
	@import './common/css/default.css';
	@import './common/icon/fonts(1)/iconfont.css';
	@import './common/icon/fonts/iconfont.css';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.header {
		height: .5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
	}
	
	.header p {
		flex-basis: .5rem;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		color: #33BD61;
	}
	
	.header form {
		flex: 1;
		height: .3rem;
		display: flex;
		align-items: center;
		width: 95%;
		background: #E5E5E5;
		border-radius: .04rem;
	}
	
	.header form input {
		width: 100%;
		border: 0;
		background: #E5E5E5;
		padding-left: .1rem;
	}
	
	.header form .icon-fangdajing {
		padding-left: .03rem;
	}
	
	.header form .saoyisao {
		padding-right: .03rem;
	}
	
	.section {
		flex: 1;
	}
	
	.myFooter {
		width: 100%;
		height: .5rem;
		display: flex;
		border-top: 1px solid #000;
	}
	
	.myFooter p {
		flex: 1;
		border-right: 1px solid #000;
		height: .5rem;
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.myFooter p:last-child{
		border-right: 0;
	}
	
	.myFooter p dl {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.myFooter p:nth-of-type(1) dl dt .icon {
		color: #49C44F;
	}
	
	.myFooter p:nth-of-type(2) dl dt .icon {
		color: #41D7FF;
	}
	
	.myFooter p:nth-of-type(3) dl dt .icon {
		color: #4C3B3D;
	}
	
	.myFooter p:nth-of-type(4) dl dt .icon {
		color: #F7320B;
	}
	
	.myFooter p:nth-of-type(5) dl dt .icon {
		color: #FF8700;
	}
	
	.active {
		color: #70CF67;
	}
</style>