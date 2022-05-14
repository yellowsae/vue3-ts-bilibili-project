import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/video/:id',
    component: () => import('@/views/Video/index.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
