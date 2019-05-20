<template>
  <div class="categoryList-container">
    <div class="searchInput">
      <i class="iconfont iconsousuo"></i>
      <span class="placeholder">搜索商品，共xxxxx款好物</span>
    </div>
    <section class="categoryList-main">
      <div class="line"></div>
      <div class="categoryList-left">
        <ul>
          <li>
            <rooter-link>推荐专区</rooter-link>
          </li>
          <li>
            <rooter-link>冬季专区</rooter-link>
          </li>
          <li>
            <rooter-link>爆品专区</rooter-link>
          </li>
          <li>
            <rooter-link>新品专区</rooter-link>
          </li>
          <li>
            <rooter-link>居家</rooter-link>
          </li>
          <li>
            <rooter-link>鞋包配饰</rooter-link>
          </li>
          <li>
            <rooter-link>服装</rooter-link>
          </li>
          <li>
            <rooter-link>电器</rooter-link>
          </li>
          <li>
            <rooter-link>洗护</rooter-link>
          </li>
          <li>
            <rooter-link>饮食</rooter-link>
          </li>
          <li>
            <rooter-link>餐厨</rooter-link>
          </li>
          <li>
            <rooter-link>婴童</rooter-link>
          </li>
          <li>
            <rooter-link>文体</rooter-link>
          </li>
          <li>
            <rooter-link>特色区</rooter-link>
          </li>
        </ul>
      </div>
      <router-view/>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .categoryList-container
    height 100%
    padding-bottom 100px
    .searchInput
      height 56px
      width 90%
      margin 20px auto
      border-radius 10px
      background-color rgba(0,0,0,.1)
      text-align center
      line-height 56px
      i
        font-size 30px
      .placeholder
        font-size 30px
        color #666
    .line
      width 100%
      height 2px
      background-color: #eee
    .categoryList-main
        height 100%
        position relative
      .categoryList-left
        position absolute
        top 0
        left 0
        height 100%
        padding 20px 0
        ul
          width 162px
          display flex
          flex-direction column
          li
            width 160px
            display flex
            line-height 50px
            text-align center
            font-size 28px
            margin 15px 0
            border-left 6px solid #fff
            &:active
              border-left 6px solid $red
              a
                color $red


</style>
