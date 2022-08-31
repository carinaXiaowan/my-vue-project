import type { Ref } from 'vue';
import { unref } from 'vue';
import { tryOnUnmounted, useEventListener } from '@vueuse/core';
import * as echarts from 'echarts';

export const useEchart = (elRef: Ref<HTMLDivElement>, options: any) => {
  const echart = echarts;
  // 定义图表实例
  let chartInstance: echarts.ECharts | null = null;

  // 初始化图表
  const initCharts = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echart.init(el, 'default');
    chartInstance.setOption(options);
  };

  //自适应大小
  const resizeChart = () => {
    if (chartInstance) {
      chartInstance.resize();
    }
  };
  useEventListener(window, 'resize', resizeChart);

  // 卸载
  tryOnUnmounted(() => {
    if (!chartInstance) return;
    chartInstance.dispose();
    chartInstance = null;
  });

  return {
    initCharts,
    resizeChart
  };
};
