import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import('../views/ApplicationsView.vue')
  },
  {
    path: '/guide', 
    name: 'guide',
    component: () => import('../views/GuideView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router