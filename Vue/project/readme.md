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
