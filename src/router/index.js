import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const files = require.context('../pages/', true, /.*index.vue$/)
const routeReg = /\.(\/(\w*)\/.*)/
let routes = [
  {
    path: '/',
    redirect: 'echarts'
  },
  // {
  //   path: '/echarts',
  //   name: 'echarts',
  //   component: () => import('@/pages/echarts/index.vue'),
  // }
]
files.keys().forEach((key) => {
  console.log('index.js第19行:::key', key);
  const r = routeReg.exec(key)
  console.log('index.js第20行:::`@/pages${r[1]}`', `@/pages${r[1]}`);
  routes.push(  {
    path: '/'+`${r[2]}`,
    name: r[2],
    component: files(key).default || files(key),
  })
})


const router = new Router({
  routes
})

export default router
