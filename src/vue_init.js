/*
 * @Date: 2020-01-07 12:43:52
 * @information:初始化配置
 */
import Vue from 'vue'
// 引入扫描配置
import initConfig from '@/config/initConfig'
// 初始化数组
let initArr = [initConfig]

let install = _ => {
  // 注册配置文件
  initArr.forEach(el => {
    Vue.use(el)
  })
}
export default install
