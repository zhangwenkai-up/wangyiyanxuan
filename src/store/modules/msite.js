// 首页模块
import {
  GETMSITE
} from '../mutation-types'

import {
  reqShouye
} from '../../api'

// 包含n个状态数据的对象
const state = {
  msite: {}
}

// 包含n个间接更新状态数据的方法对象
const actions = {
  async getMsite ({commit}) {
    const result = await reqShouye()
    if (result.code === 0) {
      commit(GETMSITE, result.data)
    }
  }
}

// 包含n个直接更新状态数据的方法对象
const mutations = {
  [GETMSITE] (state, info) {
    state.msite = info
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
