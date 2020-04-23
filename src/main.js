import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.use(Vant)
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.use(VueLazyload)
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
