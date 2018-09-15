export default {
	install:function(Vue,options){
		const bus = new Vue();
		Vue.prototype.bus=bus;
		window.bus = bus;
	}
}