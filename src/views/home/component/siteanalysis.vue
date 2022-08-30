<!-- 数据分析图示 -->
<script lang="ts" setup>
import { ref } from 'vue';
import VisitAnalysis from './visitanalysis.vue';
import VisitAnalysisBar from './visitanalysisbar.vue';

const activeKey = ref('tab1');
const tabListTitle = [
  {
    key: 'tab1',
    tab: '流量趋势'
  },
  {
    key: 'tab2',
    tab: '访问量'
  }
];

// tab切换
const handleTabChange = (key: string) => {
  activeKey.value = key;
};
</script>

<template>
  <a-card :tab-list="tabListTitle" :active-tab-key="activeKey" @tabChange="handleTabChange" class="mt24">
    <p v-if="activeKey === 'tab1'">
      <VisitAnalysis />
    </p>
    <p v-if="activeKey === 'tab2'">
      <VisitAnalysisBar />
    </p>
  </a-card>
</template>

