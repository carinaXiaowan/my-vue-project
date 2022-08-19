import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
});

export default router;
