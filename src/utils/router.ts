import { createRouter, createWebHistory } from "vue-router"

const routes = [{ path: "/", component: () => import("@/view/home/HomeView.vue") }]

export default createRouter({
  history: createWebHistory(),
  routes,
})
