/*
 * @Author: 殷鹏飞
 * @Date: 2020-03-23 15:37:58
 * @Description: store平台
 */

import * as type from '../mutation/index.js'

const state = {
  platformState: { //平台state
    name: null, //姓名
  },
  obj: {}, //某某详情对象
}

const mutations = {
  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-23 15:40:47
   * @Description: store赋值
   */
  [type.SET_STORE](state, model) {
    let {fromObj, toObj} = model
    state[toObj] = fromObj
  },
  /**
   * @Author: 殷鹏飞
   * @Date: 2020-03-23 15:42:55
   * @Description: 页面配置赋值
   */
  [type.SET_PAGE_CONFIG](state,model) {
    state.platformState={
        ...state.platformState,
        ...model
    }
  },
  [type.CLEAR_STORE](state) {
    state.platformState = {
      name: null, //姓名
    }
    let arr = [
      'obj'
    ]
    arr.forEach(el => {
      state[el] = {}
    })
  },
}

export default ({
  namespaced: true,
  state,
  mutations
})