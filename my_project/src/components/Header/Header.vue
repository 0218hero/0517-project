<template>
  <header class="header-container">
    <div class="header-search-login">
      <span class="logo"></span>
      <div class="searchInput" @click="$router.push('/search')">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共xxxxx款好物</span>
      </div>
      <button @click="$router.push('/profile')">登录</button>
    </div>
    <div class="header-nav">
      <ul class="header-nav-left">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
      </ul>
      <span class="iconfont iconiconfonticonfonti2 header-nav-arrow"></span>
    </div>
    <!--<div class="navbox-wrapper">-->
      <!--<div class="nav-box">-->
        <!--<span>全部频道</span>-->
        <!--<i class="iconfont iconiconfonticonfonti2copy"></i>-->
        <!--<ul>-->
          <!--<li></li>-->
        <!--</ul>-->
        <!--<div class="mask"></div>-->
      <!--</div>-->
    <!--</div>-->
  </header>
</template>

<script type="text/ecmascript-6">

  export default {

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .header-container
    position relative
    height 150px
    width 100%
    background-color #fff
    z-index 100
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
        height 56px
        border-radius 10px
        border none
        background rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      button
        flex 1
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline none
        color $red
        border 1px solid $red
        background #fff
    .header-nav
      position relative
      width 100%
      height 60px
      overflow hidden
      .header-nav-left
        width 1650px
        font-size 30px
        height 60px
        li
          float left
          height 50px
          margin 5px 20px
          padding 0 10px
          text-align: center
          &.active
            border-bottom 4px  solid $red
            a
              color $red
      .header-nav-arrow
        position absolute
        right 0
        top 0
        width 100px
        height 60px
        font-size 30px
        text-align center
        line-height 60px
        background-color #fff


</style>
