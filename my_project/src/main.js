import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
// import store from 'store'


import Split from './components/Split/Split.vue'


import Header from './components/Header/Header.vue'
//注册全局组件
Vue.component('Header',Header)
Vue.component('Split',Split)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router
  // store
})

