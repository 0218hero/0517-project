<template>
  <section>
    <div class="classify-container" v-for="(classify, index) in classifyList" :key="index">
      <img :src="classify.titlePicUrl" alt="标题图片">
      <div class="classify-list">
        <ul class="ul-node">
          <li v-for="(item,index) in classify.itemList" :key="index">
            <img :src="item.listPicUrl" alt="商品图片">
            <div class="good-info">
              <span class="good-name">100%山羊绒纯色围巾</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        classifyList:state=>state.homepage.classifyList
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .classify-container img
    width 100%
    height 370px
    margin-bottom 30px
  .classify-list
    width 100%
    padding 0 30px 20px
    box-sizing border-box
    overflow hidden
    ul
      display flex
      flex-wrap nowrap
      li
        margin-right 20px
        img
          width 200px
          height 200px
          margin-bottom 10px
          background-color #F4F4F4
        .good-info
          span
            display block
            width 200px
          .good-price
            color $red
</style>
