<script lang="ts" setup>
  import { ref,onMounted,onUnmounted } from 'vue';
  import type { Ref} from 'vue';
  import { useEchart } from '@/hooks/web/useEchart'
  import { pieOptions } from './chartOptions';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { initCharts } = useEchart(chartRef as Ref<HTMLDivElement>, pieOptions);
  onMounted(()=>{
    initCharts()
  });
</script>
<template>
  <a-card title ='成交占比' class="echarts-box">
    <div ref="chartRef" :style="{  height: '300px' }" ></div>
  </a-card>
</template>