// 入口js
import Vue from 'vue'
import App from './App'

import './mock'

import router from './router'
import store from './store'

import Split from './compotents/Split/Split'

// 注册全局组件
Vue.component('Split', Split)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册组件
  /*components: {
    App
  },
  template: '<App/>',*/
  render: h => h(App),
  // 配置路由器
  router,
  store
})

;(function () {
  let htmlNode = document.documentElement
  const width = htmlNode.clientWidth
  htmlNode.style.fontSize = width/10 + 'px'
})()
