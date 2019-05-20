<template>
  <div class="home-container">
    <!--头部-->
    <Header/>
    <div class="home-main">
      <!--加一padding解决scroll回弹下落页面显示不完整的问题-->
      <div style="padding-bottom: 260px">
        <Swiper/>  <!--轮播图-->
        <ul class="wangyi-grow">
          <li>
            <i class="wangyi-icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="wangyi-icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="wangyi-icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <Nav/> <!--首页导航去-->
        <Gift />  <!--首页福利区-->
        <Split />
        <Manufacturer /> <!--首页品牌制造商区-->
        <Split />
        <Popular/> <!--首页热销榜单区-->
        <Split />
        <Recommend/> <!--首页人气推荐单区-->
        <Split />
        <FlashSale />  <!--首页限时购单区-->
        <Split />
        <NewProducts />  <!--首页新品首发单区-->
        <Split />
        <Classify/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from './components/Swiper/Swiper.vue';
  import Nav from './components/Nav/Nav.vue';
  import Gift from './components/Gift/Gift.vue';
  import Manufacturer from './components/Manufacturer/Manufacturer.vue';
  import Popular from './components/Popular/Popular.vue';
  import Recommend from './components/Recommend/Recommend.vue';
  import FlashSale from './components/FlashSale/FlashSale.vue';
  import NewProducts from './components/NewProducts/NewProducts.vue';
  import Classify from './components/Classify/Classify.vue';

  export default {
    components:{
      Swiper,
      Nav,
      Gift,
      Manufacturer,
      Popular,
      Recommend,
      FlashSale,
      NewProducts,
      Classify
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-container
    padding-bottom 100px
    .home-main
      .wangyi-grow
        display flex
        justify-content space-around
        align-items center
        height 72px
      li
        display flex
        &:nth-of-type(1)
          i
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
        &:nth-of-type(2)
          i
            background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
        &:nth-of-type(3)
          i
            background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
        .wangyi-icon
          width 32px
          height 32px
          background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          background-size 32px 32px
          background-repeat no-repeat
          background-position center
          margin 0 10px 0 0
</style>
