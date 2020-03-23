/*
 * @Author: 殷鹏飞
 * @Date: 2020-03-23 15:04:38
 * @Description: 页面路由
 */

export default [
  {
    path: '/',  //主页面
    name: 'HomePage',
    component: () => import('@/views/HomePage')
  },
]
