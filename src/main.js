import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/test'

Vue.config.productionTip = false

new Vue({
    el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')