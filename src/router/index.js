import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/home-page/HomePage.vue'
import AboutPage from '../pages/about-page/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
