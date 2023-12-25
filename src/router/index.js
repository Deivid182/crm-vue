import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        title: 'Home'
      }
    },
    {
      path: '/new-customer',
      name: 'new-customer',
      component: () => import('../views/new-customer.vue'),
      props: {
        title: 'New Customer'
      }
    },
    {
      path: '/edit-customer/:id',
      name: 'edit-customer',
      component: () => import('../views/edit-customer.vue'),
      props: {
        title: 'Edit Customer'
      }
    }
  ]
})

export default router
