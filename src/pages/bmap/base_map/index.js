import BmapBaseMap from './src/BaseMap.vue'

/* istanbul ignore next */
BmapBaseMap.install = function (Vue) {
  Vue.component(BmapBaseMap.name, BmapBaseMap)
}

export default BmapBaseMap
