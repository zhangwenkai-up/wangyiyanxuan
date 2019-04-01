<template>
  <div class="container">
    <!--头部-->
    <div class="header">
      <div class="header_main">
        <div class="head_search" @click="toSearch">
          <span>搜索商品，共22113款好物</span>
        </div>
      </div>
    </div>
    <!--主体-->
    <div class="main">
      <div class="wrapper nav_wrapper">
        <ul class="cateNav">
          <li v-for="(cateNavItem, index) in classify.categoryL1List" :key="index">
            <router-link :class="{active: cateNavItem.id === $route.params.id * 1}"
                         :to="`/classify/classifylist/${cateNavItem.id}`">
              <span class="navTitle">{{cateNavItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="cateList">
        <routerView/>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('getClassify')
    },
    computed: {
      ...mapState({
        classify: state => state.classify.classify
      }),
    },
    methods: {
      toSearch () {
        this.$router.push('/search')
      }
    },
    watch: {
      classify(){
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollY: true,
            click: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    /*头部*/
    .header
      position fixed
      top 0
      left 0
      width 100%
      z-index 10
      background #fff
      .header_main
        width 100%
        box-sizing border-box
        display flex
        padding 0.21333rem 0.4rem
        align-items center
        display flex
        justify-content space-around
        .head_search
          width 90%
          justify-content center
          height 0.74667rem
          font-size 0.37333rem
          background-color #ededed
          border-radius 0.10667rem
          text-align center
          display flex
          align-items center
          &.cat
            width 90%
    /*主体*/
    .main
      margin-top 87px
      display flex
      .nav_wrapper
        height 1244px
        .cateNav
          width 162px
          overflow hidden
          a
            float left
            width 100%
            color #7e8c8d
            text-align center
            margin 40px 0
            font-size 28px
            &.active
              color darkorange
      .cateList
        width 528px
        padding 0.4rem 0.4rem 0.28rem
</style>
