/*
 * @Date: 2020-01-11 12:53:49
 * @information:api
 */
import axios from 'axios'

const publicApi = {
    // 获取用户详情
    getUserDetail() {
        return axios.get(`/v2/movie/subject/26942674/comments`)
    }
}

export default publicApi
