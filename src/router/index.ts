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
          title: '首页',
          icon:'icon-shouye'
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户管理',
          icon:'icon-yonghuguanli_huaban'
        }
      },
      {
        path: '/doormodel',
        name: 'doormodel',
        component: () => import('@/views/doormodel/index.vue'),
        meta: {
          title: '装修户型',
          icon:'icon-tubiao_huxingku'
        }
      },
      {
        path: '/material',
        name: 'material',
        component: () => import('@/views/material/index.vue'),
        meta: {
          title: '装修材料',
          icon:'icon-cailiaokufang'
        }
      },
      {
        path: '/price',
        name: 'price',
        component: () => import('@/views/price/index.vue'),
        meta: {
          title: '装修报价',
          icon:'icon-baojia'
        }
      },
      {
        path: '/design',
        name: 'design',
        component: () => import('@/views/design/index.vue'),
        meta: {
          title: '设计效果',
          icon:'icon-kanxiaoguo'
        }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order/index.vue'),
        meta: {
          title: '装修订单',
          icon:'icon-dingdan1'
        }
      },
      {
        path: '/company',
        name: 'company',
        component: () => import('@/views/company/index.vue'),
        meta: {
          title: '装修公司',
          icon:'icon-zhuangxiugongsi'
        }
      },
    ]
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
