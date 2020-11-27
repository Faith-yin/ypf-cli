/*
 * @Date: 2020-01-11 12:53:49
 * @information:axios
 */
import axios from 'axios'
import { Message } from 'element-ui'


let path = {
    // 本地
    // development: `http://localhost:3000/`,
}


const ENV = process.env.NODE_ENV
export default class InitAxios {
    constructor() {
        // 基础URL
        this.baseURL = path[ENV]
        // 成功响应状态码
        this.successCode = [1000, 200]
    }
   /**
    * 请求拦截
    */
    requestFun(request) {
        return request
    }
   /**
    * 响应拦截
    */
    responseFun(response) {
        let { data } = response
        let { message, start } = data
        let isSuccess = this.verifyCode(start)
        if (isSuccess) {
            return Promise.resolve(data)
        }
        Message.error(message || '返回错误')
        return Promise.reject(data)
    }
   /**
    * 检验状态码
    */
    verifyCode(statusCode) {
        return this.successCode.includes(statusCode)
    }
   /**
    * 失败回调
    */
    errorFun() {
        Message.error('网络连接异常')
        return Promise.reject()
    }
   /**
    * 初始化axios
    */
    init() {
        let { requestFun, responseFun, errorFun } = this
        // 基础url
        axios.defaults.baseURL = path[ENV];
        // 默认时间
        axios.defaults.timeout = 10000
        // 请求拦截
        axios.interceptors.request.use(requestFun.bind(this), errorFun)
        // 相应拦截
        axios.interceptors.response.use(responseFun.bind(this), errorFun)
    }
}
