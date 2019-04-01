<template>
  <div ref="wrap" class="BSwrapper">
    <div class="contain">
      <div class="list_wrapper" >
        <div class="img_wrap">
          <img :src="detail.wapBannerUrl" alt="">
        </div>
        <div v-for="(cateList, index) in detail.subCateList" :key="index">
          <img :src="cateList.wapBannerUrl" alt="">
          <div class="text">{{cateList.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        detail: {}
      }
    },
    computed: {
      ...mapState({
        classify: state => state.classify.classify
      })
    },
    watch: {
      classify () {
        this.$nextTick(() => {
          let result = this.classify.categoryL1List.find(item => item.id === this.$route.params.id * 1)
          if (!result) {
            this.detail = this.classify.categoryL1List[0]
          } else {
            this.detail = result
          }
          new BScroll(this.$refs.wrap, {
            scrollY: true
          })
        })
      },
      $route (value) {
        const id = value.params.id * 1
        let result = this.classify.categoryL1List.find(item => item.id === id)
        if (!result) {
          this.detail = this.classify.categoryL1List[0]
        } else {
          this.detail = result
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .BSwrapper
    height: 1100px
    overflow: hidden;
    .contain
      width: 528px
      .list_wrapper
        overflow: hidden;
        .img_wrap
          width: 528px
          height: 192px
          img
            width: 100%
            height: 100%
        div
          width: 144px
          height: 216px
          float: left;
          margin-right:30px
          margin-top 20px
          img
            width: 144px
            height: 144px
</style>
