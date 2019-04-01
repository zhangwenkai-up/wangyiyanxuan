<template>
  <div class="app">
    <transition name="show">
      <!--缓存-->
      <keep-alive>
        <!--显示当前路由组件-->
        <router-view />
      </keep-alive>
    </transition>
    <Footer v-if="!$route.meta.hide"/>
  </div>
</template>

<script>
  import Footer from './compotents/Footer/Footer'

  import {reqShouye, reqFenlei, reqShiwu, reqSearch} from './api'

  export default {
    components: {
      Footer
    },

    async mounted () {
      const shouye = await reqShouye()
      const fenlei = await reqFenlei()
      const shiwu = await reqShiwu()
      const sousuo = await reqSearch()
      console.log('首页-', shouye);
      console.log('--------------------');
      console.log('分类-', fenlei);
      console.log('--------------------');
      console.log('识物-', shiwu);
      console.log('--------------------');
      console.log('搜索-', sousuo);
      console.log('--------------------');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-size 24px
    .app
      width: 100%
      height 100%
    .show-enter-active,.show-leave-active
      transition opacity .5s
    .show-enter,.show-leave-to
      opacity 0
</style>
