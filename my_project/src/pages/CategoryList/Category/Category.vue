<template>
  <div class="category-container">
    <div class="category-main">
      <img class="category-bigImg" :src="categoryList.bannerUrl" alt="居家生活大图" >
      <ul >
        <li v-for="(category,index) in categoryList.subCateList" :key="index">
          <img :src="category.bannerUrl" :alt="category.name">
          <span>{{category.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState({
        categoryList:state=>state.categoryList.categoryList
      })
    },
    mounted(){
      new BScroll('.category-container', {
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .category-container
    height 100%
    overflow hidden
    .category-main
      height 100%
      margin-left 162px
      padding 30px 30px 120px
      .category-bigImg
        width 528px
        height 192px
        margin-bottom 30px
      ul
        display flex
        flex-wrap wrap
        width 100%
        li
          text-align center
          width 144px
          margin-right 30px
          img
            width 144px
            height 144px
</style>
