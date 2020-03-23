<!--
 * @author: 殷鹏飞
 * @Date: 2019-12-25 18:46:44
 * @information: 主页面路由
-->
<template>
    <div id="home-page">
        home-page -- {{platformState.name}}
    </div>
</template>

<script>
import {initMounted, publicClass}  from '@/mixins'
import publicInfo from '@/relyClass/public_info.js'
import {mapState} from 'vuex'

export default {
    mixins: [initMounted, publicInfo, publicClass],
    data() {
        return {}
    },
    computed: {
      ...mapState('platform', [
        'platformState',//平台state
        'obj', //详情对象
      ])
    },
    methods: {},
    mounted() {
      // store 赋值
      this.SET_PAGE_CONFIG({name: 'Jerry'})
    },
}
</script>

<style lang="scss">
@import '@/style/business/home_page.scss';
</style>