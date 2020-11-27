/*
 * @Date: 2020-01-07 12:43:52
 * @information:main
 */
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


new Vue({
  el: '#app',
  ...vueOptions,
  components: { App },
  template: '<App/>'
})
