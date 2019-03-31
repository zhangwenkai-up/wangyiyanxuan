// 搜索模块
import {
  GETSEARCH
} from '../mutation-types'

import {
  reqSearch
} from '../../api'

// 包含n个状态数据的对象
const state = {
  search: {}
}

// 包含n个间接更新状态数据的方法对象
const actions = {
  async getSearch ({commit}) {
    const result = await reqSearch()
    if (result.code*1 === 200) {
      commit(GETSEARCH, result.data)
    }
  }
}

// 包含n个直接更新状态数据的方法对象
const mutations = {
  [GETSEARCH] (state, info) {
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
