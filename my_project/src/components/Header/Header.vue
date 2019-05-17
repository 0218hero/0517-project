<template>
  <header class="header-container">
    <div class="header-search-login">
      <span class="logo"></span>
      <div class="searchInput" @click="$router.push('./search')">
        <i class="iconfont iconsousuo"></i>
        <span class="placeholder">搜索商品，共xxx款</span>
      </div>
      <button @click="$router.push('/profile')">登录</button>
    </div>
    <div class="header-nav"></div>
    <div class="navbox-wrapper"></div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header-container
    position relative
    width 100%
    height 150px
    background #fff
    z-index 99
    .header-search-login
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 25px
      box-sizing border-box
      .logo
        flex 2
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 138px 40px
        background-position center
        margin-right 10px
      .searchInput
        flex 7

</style>
