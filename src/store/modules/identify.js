// 识物模块
import {
  GETIDENTIFY
} from '../mutation-types'

import {
  reqShiwu
} from '../../api'

// 包含n个状态数据的对象
const state = {
  identify: {}
}

// 包含n个间接更新状态数据的方法对象
const actions = {
  async getIdentify ({commit}) {
    const result = await reqShiwu()
    if (result.code === 0) {
      commit(GETIDENTIFY, result.data)
    }
  }
}

// 包含n个直接更新状态数据的方法对象
const mutations = {
  [GETIDENTIFY] (state, info) {
    state.identify = info
  }
}

// 包含n个getter计算属性的方法对象
const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
