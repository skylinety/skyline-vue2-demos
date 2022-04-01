<template>
  <div id="chart" style="width: 100%; height: 100%"></div>
</template>

<script>
// import { defineComponent } from "vue"
import * as echarts from 'echarts'
import { option } from "./option.ts";
export default {
  name: 'LineArea',
  meta: {
    col: 12,
    title: '区域线条'
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
      const dom = document.getElementById('chart')
      this.chart = echarts.init(dom)
    },
    refresh(option) {
      this.chart.setOption(option);
    },
  },
  mounted(){
    this.init()
    this.refresh(option)
  }
}
</script>

<style lang="scss" scoped>
// .sk-img-icon {
//   display: inline-block;
//   vertical-align: middle;
//   background-size: contain !important;
// }
</style>
