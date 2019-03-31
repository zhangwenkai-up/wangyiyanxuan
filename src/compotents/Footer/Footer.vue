<template>
  <footer class="footer">
    <a href="javascript:;" class="item" @click="goto('/msite')" :class="{on: this.$route.path === '/msite'}">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/classify')" :class="{on: this.$route.path === '/classify'}">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/identify')" :class="{on: this.$route.path === '/identify'}">
      <i class="iconfont icon-cubelifangti"></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/order')" :class="{on: this.$route.path === '/order'}">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/profile')" :class="{on: this.$route.path === '/profile'}">
      <i class="iconfont icon-geren"></i>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        // 编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .footer
    width 100%
    bottom 0
    height 80px
    display flex
    background: #fff
    z-index 10
    top-border-1px(#ccc)
    @extends .border-1px
    position fixed
    .item
      height 50px
      flex 1
      display flex
      flex-direction column
      align-items center
      &.on
        color #BF4248
        i
          font-weight bold
      span
        margin-top 5px
      i
        font-size 36px
        margin-top 10px
</style>
