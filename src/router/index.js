import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import NewService from '../views/NewServices.vue'
import Settings from '../views/Settings.vue'
import Newsletter from '../views/Newsletter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/newservice',
    name: 'NewService',
    component: NewService
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: Newsletter
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
