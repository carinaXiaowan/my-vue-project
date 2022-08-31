import type { Ref } from 'vue';
import {unref} from 'vue'
import type { EChartsOption } from 'echarts';
import echarts from './echarts'

export const useEchart = (elRef: Ref<HTMLDivElement>, theme: 'light' | 'dark' | 'default' = 'default')=>{
  let chartInstance: echarts.ECharts | null = null;
  const initCharts = (t = theme)=>{
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el, t);
  }
  
  return {

  }
}