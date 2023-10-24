import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView, 
  LoginView, 
  RegisterView,
  ArticlesIndexView
} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },

    {
      path: '/articles',
      name: 'articles',
      component: ArticlesIndexView
    }
  ]
})

export default router
