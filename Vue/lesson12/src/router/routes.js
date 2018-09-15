import News from '@/components/news.vue'
import Detail from '@/components/detail.vue'
import Shopcar from '@/components/shopcar.vue'

let routes = [{
    path: '/',
    name: 'shopcar',
    component: Shopcar
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]
export default routes;
