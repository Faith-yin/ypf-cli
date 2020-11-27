/*
 * @Date: 2020-01-11 12:53:49
 * @information:自定义组件扫描
 */
import Vue from 'vue'

export default class ScanComponents {
    constructor() {
        // 扫描组件文件夹，约定放组件的文件夹名称是components
        this.components = require.context('@/components', true, /\.vue$/)
    }
   /**
    * 注册组件
    */
    init() {
        let { components } = this
        // 初始化数组
        let initArr = [components]
        // 注册组件
        initArr.forEach(el => {
            el.keys().forEach(subEl => {
                let src = el(subEl)
                if(!src.name) {
                    src.name = subEl.split('/').pop().replace(/\.vue$/, '')
                }
                Vue.component(src.name, src.default)
            })
        })
    }
}
