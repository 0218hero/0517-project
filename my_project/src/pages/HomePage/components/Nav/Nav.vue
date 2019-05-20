<template>
  <section class="nav-container">
    <ul class="nav-box">
      <li class="nav-item">
        <span>居家生活</span>
      </li>
      <li class="nav-item">
        <span>服饰鞋包</span>
      </li>
      <li class="nav-item">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <span>个人清洁</span>
      </li>
      <li class="nav-item">
        <span>限时购</span>
      </li>
      <li class="nav-item">
        <span>母婴亲子</span>
      </li>
      <li class="nav-item">
        <span>运动旅行</span>
      </li>
      <li class="nav-item">
        <span>数码家电</span>
      </li>
      <li class="nav-item">
        <span>全球特色</span>
      </li>
      <li class="nav-item">
        <span>超级会员</span>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .nav-container
    padding-bottom 30px
    background-color #F4F4F4
    .nav-box
    clearFix()
    text-align center
    .nav-item
      float left
      width 110px
      height 156px
      margin 10px 20px 9px
      img
        width 110px
        height 110px
        margin-bottom 10px
      span
        font-size 24px
        width 110px
        height 36px
        margin-top 10px
</style>
