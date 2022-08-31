<script lang="ts" setup>
  import { ref,onMounted,onUnmounted } from 'vue';
  import type { Ref} from 'vue';
  import { useEchart } from '@/hooks/web/useEchart'
  import { options } from './chartOptions';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { initCharts, disposeChart,resizeChart } = useEchart(chartRef as Ref<HTMLDivElement>, options);
  onMounted(()=>{
    initCharts()
  });

  onUnmounted(()=>{
    disposeChart()
  })

  window.onresize = function() {
    resizeChart();
  };
</script>
<template>
  <div class="echarts-box">
    <div ref="chartRef" :style="{  height: '300px' }" ></div>
  </div>
</template>