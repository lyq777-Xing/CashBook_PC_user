import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* 引入swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import draggable from 'vuedraggable'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import swal from 'sweetalert';
import LetItSnow from 'vue-let-it-snow';
Vue.use(LetItSnow);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueAwesomeSwiper /* { default options with global component } */ )

// Vue.components: { draggable }
Vue.use(ElementUI);

Vue.use(draggable);

Vue.config.productionTip = false

Vue.prototype.$http = axios

// 120.48.85.254
axios.defaults.baseURL = 'http://localhost:8888/'

axios.interceptors.request.use(config => {
    console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')