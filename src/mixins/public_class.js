/*
 * @Date: 2020-01-11 12:53:49
 * @information:公共方法
 */
import { Message } from 'element-ui'

export default {
    methods: {
        /**
         * 请求方法
         */
        methodQuery(model) {
            // loading名称，消息提示，promise或方法名称，方法参数，回调
            let { loadingName, message, pMethod, params, callBack } = model
            // 打开loading
            loadingName && (this[loadingName] = true)
            // 判断传进来的是 promise 还是  方法名称
            let method = typeof pMethod == 'string' ? this[pMethod](params) : pMethod
            // 操作promise
            method.then(async res => {
                message && Message.success(message || '操作成功')
                // 回调方法
                callBack && await this[callBack](res)
            }).finally(_ => {
                // 关闭loading
                loadingName && (this[loadingName] = false)
            })
        },
        /**
         * 路由跳转
         */
        routeGo(model) {
            this.$router.push({
                ...model
            })
        },
        /**
         * 表单检验
         */
        formRequired(model) {
            let { arr, msg } = model
            let requiredArr = ['string', 'array', 'object']
            if(!arr || !requiredArr.includes(typeof arr)) return;
            let obj
            if(typeof arr == 'object' && !Array.isArray(arr)) {
                // 是对象
                obj = Object.values(arr)
            }else {
                // 字符串或数组
                obj = typeof arr == 'string' ? [arr] : arr
            }
            let mark = !obj.some(el => {
                return (!el && el != 0) || (Array.isArray(el) && !el.length)
            })
            !mark && Message.warning(msg ? msg : '请完善必填信息')
            return mark
        },
    }
}
