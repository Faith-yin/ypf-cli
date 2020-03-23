/*
 * @author: 殷鹏飞
 * @Date: 2019-12-25 18:29:31
 * @information: 全局配置
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueInit from '@/vue_init.js'
import vueOptions from '@/vue_options.js'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(vueInit)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ...vueOptions,
  components: { App },
  template: '<App/>'
})
