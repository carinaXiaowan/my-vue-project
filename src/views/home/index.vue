<script setup lang="ts">
// 导入文件
import Growcard from './component/growcard.vue';
import SiteAnalysis from './component/siteanalysis.vue';
import VisitPie from './component/visitpie.vue';
import VisitRadar from './component/visitradar.vue';
import VisitSource from './component/visitsource.vue';
</script>

<template>
  <Growcard />
  <!-- 图表 -->
  <SiteAnalysis />
  <!-- 其他数据图表 -->
  <div class="flex mt24">
    <VisitPie class="w-percent-33" />
    <VisitRadar class="w-percent-33" />
    <VisitSource class="w-percent-33" />
  </div>
</template>
<style lang="less" scoped>
.home-count {
  color: @primary-color;
}
</style>
