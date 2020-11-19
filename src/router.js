import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/Layout'),
    children: [
      // Dashboard
      {
        name: 'Index',
        path: '/',
        component: () => import('@/views/Index'),
      }
    ],
  }
]

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes,
})
