// 分类模块
import {
  GETCLASSIFY
} from '../mutation-types'

import {
  reqFenlei
} from '../../api'

// 包含n个状态数据的对象
const state = {
  classify: {}
}

// 包含n个间接更新状态数据的方法对象
const actions = {
  async getClassify ({commit}) {
    const result = await reqFenlei()
    if (result.code === 0) {
      commit(GETCLASSIFY, result.data)
    }
  }
}

// 包含n个直接更新状态数据的方法对象
const mutations = {
  [GETCLASSIFY] (state, info) {
    state.classify = info
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
