import DynamicBar from './src/DynamicBar.vue'

/* istanbul ignore next */
DynamicBar.install = function (Vue) {
  Vue.component(DynamicBar.name, DynamicBar)
}

export default DynamicBar
