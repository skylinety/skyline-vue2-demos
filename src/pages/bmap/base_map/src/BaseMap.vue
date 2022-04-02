<template>
  <div style="width: 100%; height: 100%">
    <baidu-map
      style="width: 100%; height: 100%"
      v-model="baiduMap"
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
      markerDot: [116.0542, 40.29132],
      labelDot: [116.0542, 40.09132],
      zoom: 9,
      baiduMap: null,
      map: null,
      BMap: null,
    }
  },
  props: {},
  methods: {
    centerAndZoom(center, zoom) {
      let { BMap } = this
      var point = new BMap.Point(center[0], center[1])
      this.map.centerAndZoom(point, zoom)
    },
    openInfoWindow(point) {
      let { BMap, map } = this
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
      map.openInfoWindow(infoWindow, new BMap.Point(...point))
    },
    newMarker() {
      console.log('BaseMap.vue第69行:::new marker', );
      let { BMap, map, openInfoWindow, centerAndZoom, markerDot } = this
      let marker = new BMap.Marker(new BMap.Point(...markerDot), {
        icon: new BMap.Icon(
          require('./place.png'),
          new BMap.Size(...[60, 60]),
          {
            imageSize: new BMap.Size(...[60, 60]),
            // anchor: new BMap.Size(markerOffset[0], markerOffset[1])
          }
        ),
        offset: new BMap.Size(...[25, 15]),
      })
      const clickFn = () => {
        openInfoWindow([...markerDot])
        // this.openInfoWindow({
        //   infowindowContent,
        //   position,
        //   infowindowOffset: [-size[0] / 2 - 2, -size[1] / 2 + 14],
        // })
        centerAndZoom([...markerDot], 18)
      }
      // clickFn()
      // clickEvent?.(markerConfig, e)
      // }
      marker.addEventListener('click', clickFn)
      map.addOverlay(marker);
    },
    handler({ BMap, map }) {
      this.map = map
      this.BMap = BMap
      let { openInfoWindow, labelDot, newMarker } = this
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
              map.closeInfoWindow()
              console.log('BaseMap.vue第69行:::movevvv')
              // const Info = Vue.extend(InfoWindow)
              // const content = new Info({
              //   propsData: {
              //     detail: {
              //       name: 'skyline',
              //       age: 18,
              //     },
              //   },
              // }).$mount().$el
              // const infoWindow = new BMap.InfoWindow(content, {
              //   width: 0,
              //   height: 0,
              //   // ...options,
              //   enableCloseOnClick: true,
              //   offset: new BMap.Size(...[10, 10]),
              // })
              openInfoWindow([...labelDot])
            })

            map.addOverlay(ply) //添加覆盖物
            pointArray = pointArray.concat(ply.getPath())
          }
          map.setViewport(pointArray) //调整视野
        })
      }

      function addlabel() {
        // const { lng, lat } = this.center
        var label = new BMap.Label('海淀区', {
          position: new BMap.Point(...labelDot),
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

      getBoundary()
      addlabel()
      newMarker()
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.BMap_shadow {
  display: none;
}

.BMap_pop {
  > img {
    display: none;
  }

  > div {
    &:nth-child(1) {
      display: none;
    }

    &:nth-child(3) {
      display: none;
    }

    &:nth-child(5) {
      display: none;
    }

    &:nth-child(7) {
      display: none;
    }

    &:nth-child(8) {
      height: 30px !important;
      z-index: 16 !important;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 3px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #3e5e7b;
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #26cbfe;
      }
      img {
        display: none;
      }
    }

    &:nth-child(9) {
      background: rgba(15, 43, 102, 0.8);
      border: 1px solid;
      border-image: linear-gradient(
          180deg,
          rgba(42, 204, 254, 0),
          #00beff 52%,
          #2accfe
        )
        1 1;
      box-shadow: 0px 0px 30px 0px rgba(0, 163, 255, 0.7) inset;
      overflow: visible !important;
      top: 28px !important;
      clip-path: inset(0 0 round 4px);
    }
  }

  .BMap_top {
    border-top: none !important;
    background-color: transparent !important;
  }

  .BMap_center {
    border-left: none !important;
    border-right: none !important;
    background-color: transparent !important;
  }

  .BMap_bottom {
    border-bottom: none !important;
    background-color: transparent !important;
  }
}
</style>
