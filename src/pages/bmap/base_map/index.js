import BmapBaseMap from './src/BmapBaseMap.vue'

/* istanbul ignore next */
BmapBaseMap.install = function (Vue) {
  Vue.component(BmapBaseMap.name, BmapBaseMap)
}

export default BmapBaseMap
