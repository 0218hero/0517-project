<template>
  <ul>
    <li :class="{on:$route.path==='/homepage'}" @click="goTo('/homepage')">
      <div class="footer-icon">
        <i class="iconfont iconxiazai45"></i>
      </div>
      <span>首页</span>
    </li>
    <li :class="{on:$route.path==='/categorylist'}" @click="goTo('/categorylist')">
      <div class="footer-icon">
        <i class="iconfont iconfenlei1"></i>
      </div>
      <span>分类</span>
    </li>
    <li :class="{on:$route.path==='/search'}" @click="goTo('/search')">
      <div class="footer-icon">
        <i class="iconfont icontupian1"></i>
      </div>
      <span>识物</span>
    </li>
    <li :class="{on:$route.path==='/shopcart'}" @click="goTo('/shopcart')">
      <div class="footer-icon">
       <i class="iconfont icongouwuche"></i>
      </div>
      <span>购物车</span>
    </li>
    <li :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
      <div class="footer-icon">
       <i class="iconfont icongeren"></i>
      </div>
      <span>个人</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
//跳转
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  ul
    top-border-1px(#e4e4e4)
    position fixed
    bottom 0
    left 0
    right 0
    width 100%
    height 50px
    display flex
    justify-content space-around
    li
      display flex
      flex 1
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 16px
        margin-top 2px
        margin-bottom 2px
      .iconfont
         font-size 23px
</style>
