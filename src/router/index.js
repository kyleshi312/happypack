import VueRouter from 'vue-router'
import Home from '../layout/content/index.vue'
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Home },
      { path: '/parent', component: () => import('@/layout/showImg/index.vue'),
        children: [
          { path: '/a', component: () => import('@/layout/showImg/index.vue') },
          { path: 'foo', component: () => import('@/layout/showImgTest.1/index.vue') },
          { path: 'bar', component: () => import('@/layout/showImgTest/index.vue') }
        ]
      }
    ]
  })