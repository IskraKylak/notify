import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notify from '../pages/NotifyPage.vue'
import NotFound from '../pages/404.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/notify',
      name: 'notify',
      component: Notify
   },
   {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router
