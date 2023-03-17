<template>
  <div id="dynamicBar" style="width: 100%; height: 100%"></div>
</template>

<script>
// import { defineComponent } from "vue"
import * as echarts from 'echarts'
import { option } from './option.ts'
export default {
  name: 'DynamicBar',
  data() {
    return {
      startValue: 0,
      endValue: 3,
    }
  },
  meta: {
    col: 12,
    title: '动态柱状图',
  },
  props: {
    src: {
      type: String,
      default: 'default.png',
    },
    size: {
      default: 16,
    },
  },
  methods: {
    init() {
      const dom = document.getElementById('dynamicBar')
      this.chart = echarts.init(dom)
    },
    refresh(option) {
      this.chart.setOption(option)
    },
  },
  mounted() {
    this.init()
    this.refresh(option)
    setInterval(() => {
      this.startValue++
      this.endValue++
      this.chart.dispatchAction({
        type: 'dataZoom',
        // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
        // dataZoomIndex: number,
        // // 开始位置的百分比，0 - 100
        // start: number,
        // // 结束位置的百分比，0 - 100
        // end: number,
        // 开始位置的数值
        startValue: this.startValue % 3,
        // 结束位置的数值
        endValue: (this.endValue % 3) + 4,
      })
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
// .sk-img-icon {
//   display: inline-block;
//   vertical-align: middle;
//   background-size: contain !important;
// }
</style>
