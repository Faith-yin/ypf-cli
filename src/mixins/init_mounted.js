/*
 * @Author: 殷鹏飞
 * @Date: 2020-03-23 15:55:45
 * @Description: 混入vuex等方法属性
 */
import { mapMutations,mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapMutations('platform',[
      'SET_PAGE_CONFIG',//页面配置存储
      'SET_STORE',//store赋值
      'CLEAR_STORE',//清空store
    ]),
  },
}  