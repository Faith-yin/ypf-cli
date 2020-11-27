/*
 * @Date: 2020-07-27 17:06:39
 * @information: store
 */

import * as type from '../mutation/index.js'

const state = {
  username: '',
}

const mutations = {
  [type.SET_USERNAEM](state, val) {
    state.username = val
  }
}

const actions = {

}

export default ({
  namespaced: true,
  state,
  mutations,
  actions,
})
