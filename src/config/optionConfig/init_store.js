/*
 * @Date: 2020-07-27 17:06:39
 * @information:store配置
 */

import Vue from 'vue'
import Vuex from 'vuex'


export default class InitStore {
  constructor() {
    this.name = 'store'
    // vuex 命名空间
    this.model = {
      modules: {}
    }
    // 扫描store文件夹，约定放vuex的文件夹名称是store
    this.storeContext = require.context('@/store',true,/\.js$/)
  }
  /**
   * 注册store
   */
  init() {
    let {storeContext} = this
    // 扫描之后的路径
    let pathArr = storeContext.keys()
    // 注册store 和 命名空间
    pathArr.map(storeContext).forEach((el,index) => {
      // 命名空间名称
      let splicName = pathArr[index].split('/').pop().split('.')[0]
      let context = el.default
      if(!context)return;
      // vuex modules
      this.model.modules[splicName] = context
    })
    // 注册store
    Vue.use(Vuex)
    return new Vuex.Store(this.model)
  }
}
