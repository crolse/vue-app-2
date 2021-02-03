import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from "../views/Home.vue"
import AperoCreate from "../views/AperoCreate"

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
]

const router = new VueRouter({
  routes
})

export default router
