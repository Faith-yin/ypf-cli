/*
 * @Author: 殷鹏飞
 * @Date: 2020-03-23 15:03:06
 * @Description: 路由配置
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
   * @Author: 殷鹏飞
   * @Date: 2020-03-23 15:10:38
   * @Description: 注册路由
   */  
  init() {
    let {routerOption} = this
    Vue.use(Router)
    let routeObj = new Router(routerOption)
    return routeObj
  }
}