// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'

import './assets/icon/iconfont.css'
import './assets/icon2/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueFullpage from 'vue-fullpage.js'

Vue.use(VueFullpage)
Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
