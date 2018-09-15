import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home';
import login from '@/components/login';
import details from '@/components/details';
import operating from '@/components/operating';
import form from '@/components/form';
import upload from '@/components/upload'

Vue.use(Router)


const router = new Router({
    routes: [{
            path: '',
            redirect:"/login"
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            children: [{
                    path: 'details',
                    name: 'details',
                    component: details
                },
                {
                    path: '/operating',
                    name: 'operating',
                    component: operating
                },
                {
                    path: '/form',
                    name: 'form',
                    component: form
                },
                {
                    path: '/upload',
                    name: 'upload',
                    component: upload
                }
            ],
            meta: {
                requireAuth: true
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限

        if (localStorage.getItem('username')) {
            // 判断是否登录
            next()
        } else {
            // 没登录则跳转到登录界面
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})
export default router;