import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: `Login | siSantri`
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: `Aplikasi Si Santri Darussalam 2`
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})


export default router
