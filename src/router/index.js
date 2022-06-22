import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import AboutMe from '../components/AboutMe.vue'
import Use from '../components/Use.vue'
import Doc from '../components/Doc.vue'
import PaySuccess from '../components/PaySuccess.vue'
import Report from '../components/Report.vue'
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
    path: '/use',
    component: Use,
}, {
    path: '/doc',
    component: Doc
}, {
    path: '/paysuccess',
    component: PaySuccess
}, {
    path: '/report',
    component: Report
}]

const router = new VueRouter({
    routes,
    // mode:"hash"
})

export default router