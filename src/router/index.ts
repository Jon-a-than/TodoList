import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/list',
        component: () => import('@/views/todo/index.vue')
      },
      {
        path: '/login',
        component: () => import('@/views/login/index.vue')
      },
      {
        path: '/add',
        component: () => import('@/components/addList/index.vue')
      }
    ]
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})