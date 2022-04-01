import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const files = require.context('../pages', false, /\.js$/)
// let modules = {}
// files.keys().forEach((key) => {
//   let obj = files(key).default || files(key)
//   modules = { ...modules, ...obj }
// })
// export default modules

export const routes = [
  {
    path: '/',
    redirect: 'echarts'
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('@/pages/echarts/index.vue'),
  }
]

export const router = new Router({
  routes
})
