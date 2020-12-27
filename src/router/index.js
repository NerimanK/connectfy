import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import Services from '../views/Services.vue'
import NewService from '../views/NewServices.vue'
import Settings from '../views/Settings/SettingsPre.vue'
import Newsletter from '../views/Newsletter.vue'
import SystemSettings from '../views/Settings/SystemSettings.vue'
import PersonalSettings from '../views/Settings/PersonalSetting.vue'
import Rechnung from '../views/Rechnung.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/rechnung',
    name: 'rechnung',
    component: Rechnung
  },
  {
    path: '/personalsettings',
    name: 'personalsettings',
    component: PersonalSettings
  },
  {
    path: '/systemsettings',
    name: 'systemsettings',
    component: SystemSettings
  },
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  var routes = [];

  if (localStorage.getItem("LS_ROUTE_KEY") !== null) {
    routes = JSON.parse(localStorage.getItem("LS_ROUTE_KEY")) 
  }
  if(from.path !== "")
  {
    routes.push(from.path) 
  }
  window.localStorage.setItem('LS_ROUTE_KEY', JSON.stringify(routes));
  next()
});

export default router
