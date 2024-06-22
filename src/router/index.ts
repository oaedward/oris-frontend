import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Engineering from '@/views/Engineering.vue'
import Consult from '@/views/Consult.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/services/engineering',
      name: 'engineering',
      component: Engineering
    },
    {
      path: '/services/consult',
      name: 'consult',
      component: Consult
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
