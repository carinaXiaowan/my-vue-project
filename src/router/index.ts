import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import Login from '@/views/login-view/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: 'home',
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          title: '登录'
        }
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '详情'
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
