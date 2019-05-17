//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//声明使用vue-router
Vue.use(VueRouter)

export default new VueRouter({
//配置应用路由
  mode:'history',
  routes
})
