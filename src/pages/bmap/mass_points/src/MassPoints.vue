<template>
  <div style="width: 100%; height: 100%">
    <baidu-map
      style="width: 100%; height: 100%"
      v-model="bmap"
      @ready="handler"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
    ></baidu-map>
  </div>
</template>

<script>
// 官方示例 https://lbsyun.baidu.com/jsdemo.htm#c1_19

import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'vVEVtCwO840wMI2PbMncO7YGXQGwy5DD',
})

export default {
  name: 'BmapMassPoints',
  meta: {
    col: 12,
    title: '海量图形点',
  },
  data() {
    return {
      center: { lng: 105.403119, lat: 38.028658 },
      zoom: 9,
      bmap: null,
    }
  },
  props: {},
  methods: {
    handler({ BMap, map }) {
      if (document.createElement('canvas').getContext) {
        // 判断当前浏览器是否支持绘制海量点
        var randomCount = 10000
        var markers = []
        // 构造数据
        while (randomCount--) {
          markers.push(
            new BMap.Point(
              105.403119 - 5 + Math.random() * 10,
              38.028658 - 5 + Math.random() * 10
            )
          )
        }
        var options = {
          size: 20,
          shape: window.BMAP_POINT_SHAPE_STAR, // 仅支持如下几种类型，对应值为1、2、3、4
          // BMAP_POINT_SHAPE_CIRCLE
          // BMAP_POINT_SHAPE_RHOMBUS
          // BMAP_POINT_SHAPE_SQUARE
          // BMAP_POINT_SHAPE_STAR
          // BMAP_POINT_SHAPE_WATERDRO
          color: '#d340c3',
        }
        map.pointCollection = new BMap.PointCollection(markers, options)
        map.pointCollection.addEventListener('click', function (e) {
          console.log('单击点的坐标为：' + e.point.lng + ',' + e.point.lat) // 监听点击事件
        })
        map.addOverlay(map.pointCollection)
      }
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
// .sk-img-icon {
//   display: inline-block;
//   vertical-align: middle;
//   background-size: contain !important;
// }
</style>
