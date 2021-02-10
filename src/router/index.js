import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from "../views/Home.vue"
import AperoCreate from "../views/AperoCreate"
import Events from "../views/Events.vue"
import SoireeCreate from "../views/SoireeCreate.vue"
import RepasCreate from "../views/RepasCreate.vue"
import MakumbaCreate from "../views/MakumbaCreate.vue"


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
  },
  {
    path: '/SoireeCreate',
    name: 'SoireeCreate',
    component: SoireeCreate
  },
  {
    path: '/RepasCreate',
    name: 'RepasCreate',
    component: RepasCreate
  },
  {
    path: '/MakumbaCreate',
    name: 'MakumbaCreate',
    component: MakumbaCreate
  }


]

const router = new VueRouter({
  routes
})

export default router
