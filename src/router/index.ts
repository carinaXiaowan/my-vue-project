import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
        meta: {
          title: "首页",
        },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/about/AboutView.vue"),
        meta: {
          title: "详情",
        },
        // children: [
        //   {
        //     path: "list",
        //     name: "list",
        //     component: HomeView,
        //     meta: {
        //       transition: "slide-left",
        //       title: "列表页",
        //       code: "list",
        //     },
        //   },
        //   {
        //     path: "detail",
        //     name: "detail",
        //     component: () => import("../views/about/AboutView.vue"),
        //     meta: {
        //       transition: "slide-right",
        //       title: "列表详情",
        //       code: "about",
        //     },
        //   },
        // ],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
