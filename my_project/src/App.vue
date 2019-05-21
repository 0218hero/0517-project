<template>
  <div class="app-container">
      <router-view/>
      <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
import HomePage from './pages/HomePage/HomePage.vue';
import Category from './pages/CategoryList/CategoryList.vue';
import Recommend from './pages/Recommend/Recommend.vue';
import ShopCart from './pages/Shopcart/Shopcart.vue';
import Profile from './pages/Profile/Profile.vue';
import Search from './pages/Search/Search.vue';
export default {
  components:{
    HomePage,
    Category,
    Recommend,
    ShopCart,
    Profile,
    Search,
    FootGuide
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-container
    height 100%
</style>

