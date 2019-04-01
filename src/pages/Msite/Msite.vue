<template>
  <div>
    <!--头部-->
    <div class="header">
      <!--头部上半部-->
      <div class="header_top">
        <div class="title"></div>
        <div class="search" @click="toSearch">
          <span>搜索商品，共22113款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
      <!--头部下半部-->
      <nav class="head_nav">
        <div class="wrapper">
          <ul class="content">
            <li class="active">推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个护清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>全球特色</li>
          </ul>
        </div>
        <div class="toggle_channel">
          <span class="iconfont icon-xialajiantou"></span>
        </div>
      </nav>
    </div>
    <!--主体容器-->
    <div class="main_bs">
      <!--主体-->
      <div class="main">
        <!--首页banner图轮播-->
        <div class="some_show">
          <div class="swiper-container home-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(list,index) in msite.focusList" :key="index">
                <img :src="list.picUrl" alt="">
              </div>
            </div>
            <!--自定义分页器-->
            <div class="swiper-pagination home-pagination"></div>
          </div>
          <div class="return_goods">
            <ul class="group">
              <li v-for="(policy,index) in msite.policyDescList" :key="index">
                <img :src="policy.icon" alt="">
                <span class="text">{{policy.desc}}</span></li>
            </ul>
          </div>
          <div class="food_show">
            <ul class="food_wrap"  v-if="msite.kingKongModule">
              <li class="food_item"  v-for="(cate,index) in msite.kingKongModule.kingKongList" :key="index">
                <img :src="cate.picUrl" alt="">
                <span>{{cate.text}}</span>
                <!--<span>{{cate.extra.operationResource.categoryName}}</span>-->
              </li>
            </ul>
          </div>
          <!--dont-->
          <div class="girlsDay">
            <div class="img_top">
              <img src="./images/nw01.gif" alt="">
            </div>
            <div class="img_bottom_group">
              <div class="img_lf"><img src="./images/nw02.jpg" alt=""></div>
              <div class="img_rt"><img src="./images/nv03.jpg" alt=""></div>
            </div>
            <div class="img_foot">
              <img src="./images/wyyg.png" alt="">
            </div>
          </div>
          <div class="shopping_guide">
            <ul class="guide_wrap" v-if="msite.sceneLightShoppingGuideModule">
              <li v-for="(scene,index) in msite.sceneLightShoppingGuideModule" :key="index">
                <span class="title">{{scene.styleItem.title}}</span>
                <span class="info">{{scene.styleItem.desc}}</span>
                <div class="img_wrap">
                  <img :src="scene.styleItem.picUrlList[0]" alt="">
                  <img :src="scene.styleItem.picUrlList[1]" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Split/>
        <!--品牌制造商直供-->
        <div class="brand">
          <div class="nav">
            <h2 class="title">品牌制造商直供</h2>
            <span class="more">更多></span>
          </div>
          <ul class="puzContain">
            <li class="puzItem" v-for="(tag,index) in msite.tagList" :key="index"
                :style="{backgroundImage: 'url(' + tag.picUrl + ')', backgroundSize: 'contain'}">
              <h4 class="brand_name">{{tag.name}}</h4>
              <span class="brand_price">{{tag.floorPrice}}元起</span>
            </li>
          </ul>
        </div>
        <Split/>
        <!--类目热销榜-->
        <div class="category">
          <div class="nav">
            <span class="title">类目热销榜</span>
          </div>
          <div class="content">
            <div class="bottom_contain">
              <div class="cat_item" v-for="(hotItem, index) in categoryHotSellList" :key="index">
                <span class="cat_text">{{hotItem.categoryName}}</span>
                <img :src="hotItem.picUrl" alt="">
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <!--人气推荐-->
        <div class="container">
          <div class="nav">
            <div class="title">人气推荐</div>
            <span class="more">更多></span>
          </div>
          <div class="recommend" v-if="msite.popularItemList">
            <div class="rec_left">
              <img :src="msite.popularItemList[0].scenePicUrl" alt="">
            </div>
            <div class="rec_right">
              <span class="blockText">{{msite.popularItemList[0].name}}</span>
              <p class="greyText">{{msite.popularItemList[0].simpleDesc}}</p>
              <span class="price">￥{{msite.popularItemList[0].counterPrice}}</span>
            </div>
          </div>
          <div class="show_list" >
            <div class="list_wrap" v-for="(popItem,index) in popularItemList" :key="index">
              <img :src="popItem.primaryPicUrl" alt="">
              <div class="good_detail">
                <span class="text">{{popItem.name}}</span>
                <span class="now_price">￥{{popItem.counterPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <!--限时购-->
        <div class="container" v-if="msite.flashSaleModule">
          <div class="nav">
            <div class="title">限时购</div>
            <span class="more">更多></span>
          </div>
          <div class="show_list">
            <div class="list_wrap" v-for="(flashItem,index) in msite.flashSaleModule.itemList" :key="index">
              <img :src="flashItem.picUrl" alt="">
              <div class="good_detail">
                <span class="now_price">￥{{flashItem.activityPrice}}</span>
                <span class="old_price">￥{{flashItem.originPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <!--新品首发-->
        <div class="container">
          <div class="nav">
            <div class="title">新品首发</div>
            <span class="more">更多></span>
          </div>
          <div class="show_list">
            <div class="list_wrap" v-for="(item,index) in newItemList" :key="index">
              <img :src="item.primaryPicUrl" alt="">
              <div class="good_detail">
                <span class="text">{{item.name}}</span>
                <span class="now_price">￥{{item.counterPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <!--狂购-->
        <div class="crazyBuy" v-for="(catgItem, index) in msite.categoryModule" :key="index">
          <div class="img_wrap" :style="{backgroundImage: 'url(' + catgItem.titlePicUrl + ')'}"></div>
          <!--狂购轮播-->
          <div class="swiper-container goods_container">
            <div class="swiper-wrapper goods_wrapper">
              <div class="swiper-slide goods_slide"  v-for="(goodItem, index) in catgItem.itemList" :key="index">
                <img :src="goodItem.primaryPicUrl" alt="">
                <p>
                  <span>{{goodItem.name}}</span>
                  <span class="price">${{goodItem.counterPrice}}</span>
                </p>
              </div>
            </div>
          </div>
          <Split/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  import {mapState} from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('getMsite')
    },
    computed: {
      ...mapState({
        msite: state => state.msite.msite
      }),
      // 类目热销榜
      categoryHotSellList () {
        if (this.msite.categoryHotSellModule) {
          const categoryHotSellList = this.msite.categoryHotSellModule.categoryList
          let arr = categoryHotSellList.splice(2, 8)
          return arr
        }
      },
      // 人气推荐
      popularItemList () {
        const {popularItemList} = this.msite
        if (popularItemList) {
          let arr = popularItemList.splice(1, 3)
          return arr
        }
      },
      // 新品首发
      newItemList () {
        if (this.msite.newItemList) {
          const {newItemList} = this.msite
          let arr = newItemList.splice(0, 6)
          return arr
        }
      }
    },
    methods: {
      toSearch () {
        this.$router.push('/search')
      }
    },
    watch: {
      msite () {
        this.$nextTick(()=>{
          new BScroll('.main_bs', {
            scrollY: true
          })
          // 头部下半部滑动
          new BScroll('.wrapper', {
            scrollX: true
          })
          // 首页banner图轮播
          new Swiper('.home-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                let customPaginationHtml = ''
                for (let i = 0; i < total; i++) {
                  // 判断哪个分页器应该被激活
                  if (i === (current - 1)) {
                    customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
                  } else {
                    customPaginationHtml += '<span class="swiper-pagination-customs"></span>'
                  }
                }
                return customPaginationHtml
              }
            },
            autoplay: true
          })
          // 狂购轮播
          new Swiper('.goods_container', {
            spaceBetween: 20,
            slidesPerView: 3.5
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  /*头部*/
  .header
    position fixed
    top 0
    left 0
    width 100%
    z-index 10
    background #fff
    .header_top
      width 100%
      box-sizing border-box
      display flex
      padding 0.21333rem 0.4rem
      align-items center
      display flex
      justify-content space-around
      .title
        width 1.84rem
        height 0.53333rem
        background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display inline-block
        margin-right 0.26667rem
        background-size cover
        background-position center
        background-repeat no-repeat
      .search
        width 60%
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
      .login
        width 0.98667rem
        height 0.53333rem
        line-height 0.53333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 0.10667rem
        margin-left 0.21333rem
        font-size 0.32rem
    .head_nav
      width 100%
      height 1rem
      line-height 0.8rem
      .wrapper
        position relative
        width 88%
        height 100%
        float left
        overflow hidden
        .content
          position absolute
          left 0
          top -3px
          white-space nowrap
          li
            position relative
            display inline-block
            text-align center
            color #333
            font-size 0.37333rem
            padding 0 10px
            margin-left 5px
            &.active
              color #b4282d
              &::before
                content ''
                position absolute
                left 0
                bottom 2px
                width 100%
                height 0.04rem
                background #b4282d
      .toggle_channel
        width 10%
        height 100%
        float right
        text-align center
        .icon-xialajiantou
          color #333
          font-size 30px
  /*主体容器*/
  .main_bs
    width 100%
    height 1334px
    overflow hidden
    /*主体*/
    .main
      width 100%
      padding-top 163px
      padding-bottom 100px
      /*首页banner图轮播*/
      .some_show
        margin-bottom 15px
        .swiper-container
          .swiper-wrapper
            .swiper-slide
              img
                width 100%
                height 400p
          .swiper-pagination
            .swiper-pagination-customs
              width 40px
              height 4px
              display inline-block
              background #fff
              opacity .5
              border-radius 0
              margin 80px 15px 10px 0
            /*自定义分页器激活时的样式表现*/
            .swiper-pagination-customs-active
              opacity  1
              background  #fff
              border-radius  0
        .return_goods
          padding 0 30px
          .group
            display flex
            align-items center
            justify-content space-around
            width 100%
            height 72px
            color #B4282D
            img
              width 32px
              height 32px
              vertical-align middle
            .text
              font-size .32rem
              margin-left .10667rem
              line-height .42667rem
              display inline-block
              vertical-align middle
        .food_show
          width 100%
          height 340px
          padding-bottom .693rem
          .food_wrap
            width 100%
            display flex
            justify-content space-around
            align-content space-around
            flex-wrap wrap
            .food_item
              width 110px
              height 156px
              margin 0.13333rem 0.26667rem 0
              display flex
              flex-direction column
              align-items center
              justify-content space-around
              img
                width 110px
                height 110px
              span
                text-align center
                color #333
                margin-top 0.13333rem
                font-size 0.32rem
                line-height 0.48rem
                white-space nowrap
        .girlsDay
          width 100%
          .img_top
            width 100%
            img
              width 100%
          .img_bottom_group
            display flex
            img
              width 375px
          .img_foot
            width 100%
            margin-top 20px
            img
              width 100%
              height 160px
        .shopping_guide
          overflow hidden
          padding .13333rem .4rem .4rem .34667rem
          background #fff
          margin-bottom .26667rem
          .guide_wrap
            display flex
            flex-wrap wrap
            li
              width 322px
              height 244px
              float left
              margin .05333rem 0 0 .05333rem
              padding .26667rem 0 0 .26667rem
              background #f5f5f5
              border-radius .05333rem
              display flex
              flex-direction column
              align-items center
              .title
                padding-left .13333rem
                font-size .42667rem
                font-family PingFangSC-Medium
                color #333
              .info
                padding-left .13333rem
                font-size .32rem
                margin-top 10px
                color #7f7f7f
              .img_wrap
                width 322px
                height 150px
                img
                  float left
                  width 150px
                  height 150px

      /*品牌制造商直供*/
      .brand
        .nav
          box-sizing border-box
          width 100%
          height 1.33333rem
          line-height 1.33333rem
          padding 0 30px
          background #fff
          overflow hidden
          .title
            float left
            font-size .42667rem
            font-family PingFangSC-Regular
          .more
            display block
            font-size .37333rem
            float right
            color #333
            line-height 1.33333re
        .puzContain
          position relative
          overflow hidden
          background #fff
          margin-bottom .26667rem
          padding 0 .34667rem .34667rem .4rem
          .puzItem
            display inline-block
            position relative
            margin 0 .05333rem .05333rem 0
            width 4.57333rem
            height 3.46667rem
            overflow hidden
            background-color #f4f4f4
            border-radius .05333rem
            .brand_name
              text-align center
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              color #333
              font-family PingFangSC-Medium
              font-size .37333rem
              line-height .45333rem
              margin 20px 0
            .brand_price
              display block
              text-align center
              font-size 18px
              color #7f7f7f
      /*类目热销榜*/
      .category
        width 100%
        .nav
          -webkit-box-sizing border-box
          -moz-box-sizing border-box
          box-sizing border-box
          width 100%
          height 1.33333rem
          line-height 1.33333rem
          padding 0 .4rem
          background #fff
          overflow hidden
          .title
            font-size .42667rem
            font-family PingFangSC-Regular
            float left
        .content
          padding 0 .26667rem .26667rem .4rem
          overflow hidden
          .top_contain
            width 100%
            overflow hidden
            .hot
              width 340px
              height 200px
              float left
              .cat_text
                width 2.2rem
                height 2.4rem
                background #F5F5F5
                border-radius .05333rem
              img
                float right
                width 200px
                height 200px
          .bottom_contain
            width 100%
            margin-top 15px
            overflow hidden
            .cat_item
              width 2.2rem
              height 2.4rem
              background #F5F5F5
              border-radius .05333rem
              float left
              margin 0 .13333rem .13333rem 0
              text-align center
              padding-top 15px
              .cat_text
                text-align center
                font-size .32rem
                margin-top 15px
                color #333
                font-family PingFangSC-Medium
              img
                display inline-block
                width 120px
                height 120px
      /*人气推荐，限时购，新品首发*/
      .container
        width 100%
        .nav
          box-sizing border-box
          width 100%
          height 1.33333rem
          line-height 1.33333rem
          padding 0 .4rem
          background #fff
          overflow hidden
          .title
            font-size .42667rem
            font-family PingFangSC-Regular
            float left
          .more
            display block
            font-size .37333rem
            float right
            color #333
            line-height 1.33333rem
        .recommend
          color #333
          width 9.2rem
          height 280px
          display -webkit-box
          display -ms-flexbox
          display flex
          background #fef0df
          border-radius 0.05333rem
          margin 0 0.38rem 0.26667rem
          overflow hidden
          .rec_left
            float left
            width 280px
            height 280px
            img
              width 280px
              height 280px
          .rec_right
            float right
            display flex
            flex-direction column
            padding 50px
            .blockText
              padding 10px
              width 45%
              margin-bottom 15px
              font-size 22px
              color #b4282d
            .greyText
              color #7F7F7F
              margin 15px 0
            .price
              color #b4282d
        .show_list
          overflow hidden
          padding 0 .13333rem 0 .4rem
          .list_wrap
            text-align center
            color #333
            float left
            margin-right 0.22rem
            img
              display inline-block
              width 216px
              height 216px
            .good_detail
              margin 20px 0
              overflow hidden
              width 214px
              text-align left
              .now_price
                font-size 0.37333rem
                color #b4282d
              .text
                color #333
                margin-top 0
                margin-bottom 0.13333rem
                font-size 0.32rem
                overflow hidden
                line-height 0.48rem
                white-space normal
                text-overflow ellipsis
                display-webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
              .old_price
                font-size 0.32rem
                color #7f7f7f
                text-decoration line-through
      /*狂购*/
      .crazyBuy
        .img_wrap
          display block
          width 100%
          height 370px
          margin-bottom .26667rem
          background-size 100% 100%
          background-repeat no-repeat
        .goods_container
          .goods_wrapper
            .goods_slide
              img
                display block
                width 216px
                height 216px
              p
                width 100%
                margin-top 0
                margin-bottom .13333rem
                font-size .32rem
                overflow visible
                white-space normal
                line-height .48rem
                padding 0 20px
                span
                  display block
                  width 216px
                  text-overflow ellipsis // 显示为省略号
                  display -webkit-box // 对象作为伸缩盒子模型显示
                  -webkit-box-orient vertical // 设置或检索伸缩盒对象的子元素的排列方式
                  -webkit-line-clamp 2 // 显示行数 ## 标题文字 ##
                  overflow hidden
                  &.price
                    color #b4282d
</style>
