<script setup lang="ts">
// 导入文件
import Growcard from './component/growcard.vue';
import SiteAnalysis from './component/siteanalysis.vue';
</script>

<template>
  <Growcard />
  <!-- 图表 -->
  <SiteAnalysis />
</template>
<style lang="less" scoped>
.home-count {
  color: @primary-color;
}
</style>
