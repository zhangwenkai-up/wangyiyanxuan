// vuex最核心的管理（状态数据）对象（store）模块
import Vue from 'vue'
import Vuex from 'vuex'

import msite from './modules/msite'
import classify from './modules/classify'
import identify from './modules/identify'
import search from './modules/search'

// 声明并使用
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msite,
    classify,
    identify,
    search
  }
})
