import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: HOME
  },
]

const router = new VueRouter({
  routes
})

export default router
