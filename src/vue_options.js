/*
 * @Date: 2020-07-27 17:06:39
 * @information:初始化router 和 store
 */

// 引入配置文件
import optionArr from '@/config/optionConfig/index.js'

// vue 选项
const vueOptions = {}
// 添加选项
optionArr.forEach(el => {
  let optionObj = new el()
  let {name} = optionObj
  vueOptions[name]=optionObj.init()
})

export default vueOptions
