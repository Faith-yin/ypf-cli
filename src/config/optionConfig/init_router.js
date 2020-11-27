/*
 * @Date: 2020-07-27 17:06:39
 * @information:路由配置
 */

import Vue from 'vue'
import Router from 'vue-router'
// 引入路由配置
import routeConfig from './routeConfig/public_views.js'

const routerOption = {
  routes: routeConfig
}


export default class InitRouter {
  constructor() {
    this.routerOption = routerOption
    this.name = 'router'
  }
  /**
   * 注册路由
   */
  init() {
    let {routerOption} = this
    Vue.use(Router)
    let routeObj = new Router(routerOption)
    return routeObj
  }
}
