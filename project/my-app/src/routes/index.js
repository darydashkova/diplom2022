import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../components/HomePage.vue'),
    meta: {
      requiresAuth: true,
      title: 'HomePage'
    }
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('../components/AuthorizationPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Authorization'
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/Main/MainPage.vue'),
    meta: {
      requiresAuth: true,
      title: 'Main'
    }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;