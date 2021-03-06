// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'
import SlideUpDown from 'vue-slide-up-down'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)
Vue.use(VueClipboard)
Vue.component('slide-up-down', SlideUpDown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
