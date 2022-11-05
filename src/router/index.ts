import { createRouter, createWebHistory } from 'vue-router'
import HomeMenuView from '../views/HomeMenuView.vue'
import NotFound from '../components/NotFound.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound,
    },
  ],
})

export default router
