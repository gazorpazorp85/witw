import Vue from 'vue'
import VueScrollTo from 'vue-scrollto';
import router from './router'
import store from './store/store'

import App from './App.vue'

import './registerServiceWorker'
import './filters'

import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: ".home"
});

new Vue({
  router,
  store,
  VueScrollTo,
  render: h => h(App)
}).$mount('#app')
