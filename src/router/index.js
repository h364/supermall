import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('@/views/home/home.vue')
const category = () => import('@/views/category/category.vue')
const shoppingcart = () => import('@/views/shoppingcart/shopping-cart.vue')
const profile = () => import('@/views/profile/profile.vue')
const detail = () => import('@/views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shoppingcart',
    component: shoppingcart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:id',
    component: detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router