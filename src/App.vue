<template>
  <div class="app">
    <transition name="show">
      <!--缓存-->
      <keep-alive>
        <!--显示当前路由组件-->
        <router-view />
      </keep-alive>
    </transition>
    <Footer v-show="$route.meta.isShow"/>
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
      const result0 = await reqShouye()
      const result1 = await reqFenlei()
      const result2 = await reqShiwu()
      const result3 = await reqSearch()
      console.log(result0);
      console.log('--------------------');
      console.log(result1);
      console.log('--------------------');
      console.log(result2);
      console.log('--------------------');
      console.log(result3);
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
