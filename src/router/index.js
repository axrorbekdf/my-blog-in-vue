import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView, 
  LoginView, 
  RegisterView,
  ArticlesIndexView,
  ArticlesReadView,
  ArticleFormView
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
    },
    {
      path: '/article/:slug',
      name: 'articles-read',
      component: ArticlesReadView
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: ArticleFormView
    },
  ]
})

export default router
