<script lang="ts" setup>
  import { ref,onMounted,onUnmounted } from 'vue';
  import type { Ref} from 'vue';
  import { useEchart } from '@/hooks/web/useEchart'
  import { barOptions } from './chartOptions';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { initCharts } = useEchart(chartRef as Ref<HTMLDivElement>, barOptions);
  onMounted(()=>{
    initCharts()
  });
</script>
<template>
  <div class="echarts-box">
    <div ref="chartRef" :style="{  height: '300px' }" ></div>
  </div>
</template>