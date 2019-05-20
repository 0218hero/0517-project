<template>
  <div class="app-container">
      <router-view/>
      <FootGuide/>
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
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-container
    height 100%
</style>

