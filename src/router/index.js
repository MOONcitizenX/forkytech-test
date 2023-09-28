import { createRouter, createWebHistory } from 'vue-router'
import AdvantagesView from '../views/AdvantagesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'advantages',
      component: AdvantagesView
    },
    {
      path: '/rates',
      name: 'rates',
      component: () => import('../views/RatesView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/promo',
      name: 'promo',
      component: () => import('../views/PromoView.vue')
    },
    {
      path: '/esim',
      name: 'esim',
      component: () => import('../views/EsimView.vue')
    },
    {
      path: '/newcustomer',
      name: 'newcustomer',
      component: () => import('../views/NewCustomerView.vue')
    }
  ]
})

export default router
