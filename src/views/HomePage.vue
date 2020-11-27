<!--
 * @Date: 2020-01-11 12:53:49
 * @information: homepage
-->
<template>
    <div id="home-page">
        home-page
    </div>
</template>

<script>
import {publicClass}  from '@/mixins'
import {mapState} from 'vuex'

export default {
    mixins: [publicClass],
    data() {
        return {}
    },
    computed: {
      ...mapState('public', [
        'username', //详情对象
      ])
    },
    methods: {},
    mounted() {

    },
}
</script>

<style lang="scss">
@import '@/style/business/home_page.scss';
</style>
