import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
  // 指定路由模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
        path: "/",
        name: "index",
        component: () => import('@/views/index/index.vue'),
    },
  ]
})