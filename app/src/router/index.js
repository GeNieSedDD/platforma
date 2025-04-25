import { createRouter, createWebHistory } from "vue-router"
import Authorization from "./user-router"
import Dashboard from "./dashboard-router"
const routes = [
  {
    path: '/',
    component: () => import('../components/landing.vue')
  },
  ...Authorization,
  ...Dashboard
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router