export const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        width: 1,
        color: '#019680'
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '6:00',
      '7:00',
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00'
    ],
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: 'solid',
        color: 'rgba(226,226,226,0.5)'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [
    {
      type: 'value',
      max: 80000,
      splitNumber: 4,
      axisTick: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)']
        }
      }
    }
  ],
  grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
  series: [
    {
      smooth: true,
      data: [
        111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222, 11111,
        4000, 2000, 500, 333, 222, 111
      ],
      type: 'line',
      areaStyle: {},
      itemStyle: {
        color: '#5ab1ef'
      }
    },
    {
      smooth: true,
      data: [
        33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 13000, 22000, 11000, 2221, 1201, 390, 198,
        60, 30, 22, 11
      ],
      type: 'line',
      areaStyle: {},
      itemStyle: {
        color: '#019680'
      }
    }
  ]
};
export const barOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        width: 1,
        color: '#019680'
      }
    }
  },
  grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    max: 8000,
    splitNumber: 4
  },
  series: [
    {
      data: [3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000, 3200, 4800],
      type: 'bar',
      barMaxWidth: 80
    }
  ]
};

export const pieOptions = {
  tooltip: {
    trigger: 'item'
  },

  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
      data: [
        { value: 500, name: '电子产品' },
        { value: 310, name: '服装' },
        { value: 274, name: '化妆品' },
        { value: 400, name: '家居' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      animationType: 'scale',
      animationEasing: 'exponentialInOut',
      animationDelay: function () {
        return Math.random() * 400;
      }
    }
  ]
};

export const radarOptions = {
  legend: {
    bottom: 0,
    data: ['访问', '购买']
  },
  tooltip: {},
  radar: {
    radius: '60%',
    splitNumber: 8,
    indicator: [
      {
        text: '电脑',
        max: 100
      },
      {
        text: '充电器',
        max: 100
      },
      {
        text: '耳机',
        max: 100
      },
      {
        text: '手机',
        max: 100
      },
      {
        text: 'Ipad',
        max: 100
      },
      {
        text: '耳机',
        max: 100
      }
    ]
  },
  series: [
    {
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        shadowBlur: 0,
        shadowColor: 'rgba(0,0,0,.2)',
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        opacity: 1
      },
      data: [
        {
          value: [90, 50, 86, 40, 50, 20],
          name: '访问',
          itemStyle: {
            color: '#b6a2de'
          }
        },
        {
          value: [70, 75, 70, 76, 20, 85],
          name: '购买',
          itemStyle: {
            color: '#5ab1ef'
          }
        }
      ]
    }
  ]
};

export const sourceOptions = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '1%',
    left: 'center'
  },
  series: [
    {
      color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' }
      ],
      animationType: 'scale',
      animationEasing: 'exponentialInOut',
      animationDelay: function () {
        return Math.random() * 100;
      }
    }
  ]
};
