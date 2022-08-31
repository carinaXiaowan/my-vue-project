<script lang="ts" setup>
  import { ref,onMounted,onUnmounted } from 'vue';
  import type { Ref} from 'vue';
  import { useEchart } from '@/hooks/web/useEchart'
  import { sourceOptions } from './chartOptions';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { initCharts } = useEchart(chartRef as Ref<HTMLDivElement>, sourceOptions);
  onMounted(()=>{
    initCharts()
  });
</script>
<template>
  <a-card title ='访问来源' class="echarts-box">
    <div ref="chartRef" :style="{  height: '300px' }" ></div>
  </a-card>
</template>