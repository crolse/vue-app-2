import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from "../views/Home.vue"
import AperoCreate from "../views/AperoCreate"
import Events from "../views/Events.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: HOME
  },
  {
    path: '/AperoCreate',
    name: 'AperoCreate',
    component: AperoCreate
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events
  }
]

const router = new VueRouter({
  routes
})

export default router
