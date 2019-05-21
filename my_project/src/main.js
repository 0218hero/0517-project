import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'
import './mock/mock-server'

import FootGuide from './components/FootGuide/FootGuide.vue';
import Header from './components/Header/Header.vue';
import Split from './components/Split/Split.vue';
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue';

//注册全局组件
Vue.component('FootGuide', FootGuide);
Vue.component('Header', Header);
Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router,  //配置路由器
  store,  //配置vuex
  template: '<App />'
})

