<template>
  <div style="width: 100%; height: 100%">
    <baidu-map
      style="width: 100%; height: 100%"
      v-model="test"
      @ready="handler"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
    ></baidu-map>
  </div>
</template>

<script>
// 官方示例 https://lbsyun.baidu.com/jsdemo3.0.htm#js3_14

import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
import InfoWindow from './components/InfoWindow.vue'

Vue.use(BaiduMap, {
  ak: 'vVEVtCwO840wMI2PbMncO7YGXQGwy5DD',
})

export default {
  name: 'BmapBaseMap',
  meta: {
    col: 12,
    title: '地图基本要素',
  },
  data() {
    return {
      center: { lng: 116.403765, lat: 39.91485 },
      zoom: 9,
      test: null,
    }
  },
  props: {},
  methods: {
    handler({ BMap, map }) {
      // var map = new BMap.Map('allmap')
      console.log('BaseMap.vue第41行:::ty8s', this.center)
      const { lng, lat } = this.center
      map.centerAndZoom(new BMap.Point(lng, lat), 5)
      map.enableScrollWheelZoom()

      function getBoundary() {
        var bdary = new BMap.Boundary()
        bdary.get('北京市海淀区', function (rs) {
          //获取行政区域
          console.log(rs, '888')
          // map.clearOverlays() //清除地图覆盖物
          var count = rs.boundaries.length //行政区域的点有多少个，可能不连贯多个区域
          if (count === 0) {
            alert('未能获取当前输入行政区域')
            return
          }
          var pointArray = []
          for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {
              strokeWeight: 2,
              strokeColor: '#ff0000',
            }) //建立多边形覆盖物
            ply.addEventListener('mouseover', () => {
              // clickEvent?.(polygonConfig)
              // //因为跟关闭弹窗的逻辑冲突，故在此添加关闭弹窗的能力
              // this.nagtiveLastMarker()
              // this.closeInfoWindow()
              map.closeInfoWindow()
              console.log('BaseMap.vue第69行:::movevvv')
              const Info = Vue.extend(InfoWindow)
              const content = new Info({
                propsData: {
                  detail: {
                    name: 'skyline',
                    age: 18,
                  },
                },
              }).$mount().$el
              const infoWindow = new BMap.InfoWindow(content, {
                width: 0,
                height: 0,
                // ...options,
                enableCloseOnClick: true,
                offset: new BMap.Size(...[10, 10]),
              })

              map.openInfoWindow(infoWindow, new BMap.Point(116.0542, 40.09132))
            })

            map.addOverlay(ply) //添加覆盖物
            pointArray = pointArray.concat(ply.getPath())
          }
          map.setViewport(pointArray) //调整视野
        })
      }

      // setTimeout(function () {
      getBoundary()
      addlabel()
      // }, 2000)

      function addlabel() {
        // const { lng, lat } = this.center
        var label = new BMap.Label('海淀区', {
          position: new BMap.Point(116.0542, 40.09132),
          offset: new BMap.Size(100, 0), // 第一个参数左右，左-右+，第二个参数上下。上+下-
        })
        label.setStyle({
          color: 'red',
          fontSize: '12px',
          height: '20px',
          lineHeight: '20px',
          fontFamily: '微软雅黑',
          borderColor: 'transparent',
          backgroundColor: 'transparent',
        })
        map.addOverlay(label)
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
