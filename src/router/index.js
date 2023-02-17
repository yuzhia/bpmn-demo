import { createRouter, createWebHistory } from 'vue-router'

// 路由信息
const routes = [
  {
    path: '/',
    redirect: '/bpmn'
  },
  {
    path: '/bpmn',
    name: 'bpmn',
    component: () => import('@/views/table.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/bpmn/designer/:id',
    name: 'designer',
    component: () => import('@/views/designer/index.vue'),
    meta: { title: '设计流程' }
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table.vue'),
    meta: { title: '关于' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true }
]

// 路由器
const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    routes
  })
  router.matcher = newRouter.matcher // reset router
}
