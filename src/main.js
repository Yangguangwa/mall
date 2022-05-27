import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EasySlider from 'vue-easy-slider'
import axios from 'axios'

Vue.use(EasySlider)
Vue.config.productionTip = false
axios.defaults.baseURL = '/api' 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
