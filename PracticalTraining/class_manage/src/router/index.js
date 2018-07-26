import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Content from '@/components/common/Content'

const View = null;
const Modify = null;
const Checkin = null;
const Query = null;
const Delete = null;

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/userList',
        name: 'Home',
        component: Home,
        children: [{
            path: '/userList/view',
            component: View
        }, {
            path: '/userList/modify',
            component: Modify
        }, {
            path: '/userList/checkin',
            component: Checkin
        }, {
            path: '/userList/query',
            component: Query
        }, {
            path: '/userList/delete',
            component: Delete
        }, {
            path: '/userList/admin',
            component: Content
        }]
    }]
})