import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import AboutMe from '../components/AboutMe.vue'
import AdminLogin from '../components/admin/LoginAdmin.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/home',
    component: Home
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}, {
    path: '/index',
    component: Index
}, {
    path: '/login',
    component: Login
}, {
    path: '/aboutme',
    component: AboutMe
}, {
    path: '/adminlogin',
    component: AdminLogin
}]

const router = new VueRouter({
    routes
})

export default router