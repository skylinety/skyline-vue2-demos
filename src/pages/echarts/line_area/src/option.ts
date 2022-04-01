const texts = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const chart = {
  prog_ci: [
    0, 0.4745593162295, 0.63096888911575, 0.76937058368049, 0.90240192185699,
    1.039179317254, 1.190385089349, 1.3807074501607, 1.6374705434323,
    1.9551147443097, 2.2727589451871, 2.5904031460645,
  ],
  prog_re: [
    -0.5, -1.5879220628673, -2.5815946501602, -3.4715996931505,
    -4.2510962796327, -4.9160986807254, -5.465633755908, -5.9017676636117,
    -6.2294996512295, -6.4565288187833, -6.5929075098797, -6.6506017691831,
  ],
  ctrl_re: [
    -0.5, -1.0874779139483, -1.6240611110865, -2.1046638343013,
    -2.5255919910017, -2.8846932875917, -3.1814422281903, -3.4169545383503,
    -3.5939298116639, -3.716525562143, -3.790170055335, -3.8213249553589,
  ],
  ctrl_ci: [
    0, 0.25626203076393, 0.3407232001225, 0.41546011518746, 0.48729703780277,
    0.56115683131716, 0.64280794824844, 0.74558202308679, 0.88423409345344,
    1.0557619619272, 1.227289830401, 1.3988176988748,
  ],
}
const solid = chart.prog_re
const solidT = solid.map((v, i) => {
  return v + chart.prog_ci[i]
})
const solidB = solid.map((v, i) => {
  return v - chart.prog_ci[i]
})
const dotted = chart.ctrl_re
const dottedT = dotted.map((v, i) => {
  return v + chart.ctrl_ci[i]
})
const dottedB = dotted.map((v, i) => {
  return v - chart.ctrl_ci[i]
})

export const option = {
  legend: {
    data: ['填充区域下折现高', '填充区域上折现高'],
  },
  tooltip: {
    trigger: 'axis',
    // show: false,
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true,
//   },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        onZero: false,
      },
      name: '年龄(单位:年)',
      nameLocation: 'center',
      nameGap: 20,
      data: texts,
    },
  ],
  yAxis: {
    type: 'value',
    // splitNumber: 1,
    name: '预估屈光不正度数(单位:D)',
    nameLocation: 'center',
    nameGap: 25,
    interval: 1,
    axisLine: {
      lineStyle: {
        color: '#333',
      },
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: '没有近视防控管理',
      type: 'line',
      symbol: 'none',
      smooth: true,
      // areaStyle: {
      //   color: "#0000CD",
      //   origin: "start",
      //   opacity: 0.5
      // },
      lineStyle: {
        normal: {
          type: 'dotted',
        },
      },

      color: '#72c679',
      data: dotted,
    },
    {
      name: '5',
      type: 'line',
      symbol: 'none',
      smooth: true,
      areaStyle: {
        color: '#72c679',
        origin: 'start',
        opacity: 0.5,
      },
      color: '#bde2c0',
      data: dottedT,
    },
    {
      name: '6',
      type: 'line',
      symbol: 'none',
      smooth: true,
      areaStyle: {
        color: '#fff',
        origin: 'start',
        opacity: 1,
      },
      color: 'transparent',
      data: dottedB,
    },
    {
      name: '通过近视防控治疗',
      type: 'line',
      symbol: 'none',
      smooth: true,
      // areaStyle: {
      //   color: "#0000CD",
      //   origin: "start",
      //   opacity: 0.5
      // },
      color: '#f14755',
      data: solid,
    },
    {
      name: '2',
      type: 'line',
      symbol: 'none',
      smooth: true,
      areaStyle: {
        color: '#f14755',
        origin: 'start',
        opacity: 0.5,
      },
      color: 'transparent',
      data: solidT,
    },
    {
      name: '3',
      type: 'line',
      symbol: 'none',
      smooth: true,
      areaStyle: {
        color: '#fff',
        origin: 'start',
        opacity: 1,
      },
      color: '#f8a3aa',
      data: solidB,
    },
  ],
}
