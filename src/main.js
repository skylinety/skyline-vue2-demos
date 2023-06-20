import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

import { Row, Col, Card } from 'element-ui'
const components = [Row, Col, Card]

for (let i = 0; i < components.length; i++) {
  const e = components[i]
  Vue.use(e)
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
