import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/mixins/_reset.scss'
import './assets/scss/mixins/_reboot.scss'
// import './assets/scss/mixins/_variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
