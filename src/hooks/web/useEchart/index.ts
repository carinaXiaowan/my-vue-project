import type { Ref } from 'vue';
import { unref, ref, computed, nextTick } from 'vue';
import type { EChartsOption } from 'echarts';
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

  // 卸载图表
  const disposeChart = () => {
    echart.dispose;
  };

  //自适应大小
  const resizeChart = () => {
    if (chartInstance) {
      chartInstance.resize();
    }
  };

  return {
    initCharts,
    disposeChart,
    resizeChart
  };
};
