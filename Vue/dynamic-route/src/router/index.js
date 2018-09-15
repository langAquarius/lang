import Vue from 'vue'
import Router from 'vue-router'
// webpack.base.conf   文件中@是src的相对路径
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home.vue'
import Address from '@/components/Address/Address.vue'
import Play from '@/components/Play/Play.vue'
import Mine from '@/components/Mine/Mine.vue'
import Discover from "@/components/Discover/Discover.vue";
import Around from "@/components/Around/Around.vue"

Vue.use(Router)

export default new Router({
  // name可以省略
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home',
          redirect: '/home/around/1'
        },
        {
          path: 'around/:id',
          name: 'around',
          component: Around
        }
      ]
    },{
      path: '/address',
      name: 'address',
      component: Address
    },{
      path: '/discover',
      name: 'discover',
      component: Discover
    },{
      path: '/play',
      name: 'play',
      component: Play
    },{
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
