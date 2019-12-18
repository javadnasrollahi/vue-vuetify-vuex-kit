import Vue from 'vue'
import store from './store'
import router from './router'



import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@/assets/css/fonts.css'

Vue.config.productionTip = false

import helpers from '@/components/hfuncs'
const plugin = {
  install () {
      Vue.helpers = helpers
      Vue.prototype.$helpers = helpers
  }
}
Vue.use(plugin)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
