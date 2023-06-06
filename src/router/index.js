import Vue from 'vue'
import VueRouter from 'vue-router'
import TodosPage from '../views/TodosPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodosPage',
    component: TodosPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
