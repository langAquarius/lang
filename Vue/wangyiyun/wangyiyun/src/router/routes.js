import Resoected from '@/components/resoected.vue'
import Singer from '@/components/singer.vue'
import Top from '@/components/top.vue'
import Find from '@/components/find.vue'


let routes = [{
    path: '/resoected',
    name: 'resoected',
    component: Resoected
}, {
    path: '/singer',
    name: 'singer',
    component: Singer
}, {
    path: '/top',
    name: 'top',
    component: Top
}, {
    path: '/find',
    name: 'find',
    component: Find
}];

export default routes