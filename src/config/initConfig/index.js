/*
 * @Date: 2020-01-11 12:53:49
 * @information:扫描配置
 */
// 引入组件扫描
import componentsScan from './scan_components'
// 引入自定义指令扫描
import directivesScan from './init_directives'
// 引入axios配置
import initAxios from './init_axios'
// 扫描数组
let scanArr = [componentsScan,directivesScan,initAxios]
let install = _ => {
    scanArr.forEach(el => {
        new el().init()
    })
}
export default install
