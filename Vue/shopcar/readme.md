# 项目

需求 xx网站---需求文档
用户调研
同业对比
竞品分析
分析数据
抽样调研
风险控制

功能模块


实现功能

测试
	自测 黑盒测试 白盒测试 
	测试环境测试
	准生产环境测试
	投产

缺陷管理
发现bug
修改bug

产品和项目最大的区别就是--- 产品会不断的升级迭代
------------------------------------------------------
将所有知识点，在做案例的时候，一定要注意组件化，模块化
1、组件
模板 template
名称 name
组件传参 props
方法 methods, computed
钩子函数

2、组件传参
父子传参   props
子父传参   this.$emit(event,data);   @event="callback"
同级组件传参 bus.$emit(event,data);  bus.$on(event,callback);

3、路由
如何定义路由

4、axios-mock-adpter 模式接口

定义接口
1、import axios form "axios"
2、import mockAdapter from "axios-mock-adpter"

3、let mock = new mockAdapter(axios);

mock.onGet("/url"),reply(200,{});
mock.onPost("/url"),reply(200,{});




Vue  dom操作过渡效果
1、name 来定义动画效果关键帧   来自定义样式
2、结合animate.css 来使用动画效果
3、volacity.js  结合钩子函数来实现动画效果


name 自定义动画关键帧

v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在transition/animation 完成之后移除。

v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation 完成之后移除


<transition name="classname">
	<div>
		
	</div>
</transition>




classname-enter{}
classname-enter-acitve{}
classname-leave{}
classname-leave-acitve{}


结合animate.css来实现过渡
引入animate.css
<transition enter-active-class="animated fade" leave-active-class="animated fade">
	
</transition>



# 通过命令行工具来构建 webpack管理的项目

cnpm install -g vue-cli

vue init webpack  projectname
cd projectname
cnpm install
npm run start