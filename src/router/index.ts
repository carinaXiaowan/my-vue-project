import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "/home",
        name: "home",
        component: HomeView,
        meta: { transition: "slide-left" },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/about/AboutView.vue"),
        meta: { transition: "slide-right" },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
