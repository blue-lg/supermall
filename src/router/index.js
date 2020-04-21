import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/profile.vue')
const GoodInfo = () => import('../views/goodInfo/GoodInfo.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { keepAlive: true } },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/goodInfo/:iid', component: GoodInfo, meta: { keepAlive: false } }
  ]
})

export default router
