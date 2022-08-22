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
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
