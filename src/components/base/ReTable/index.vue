<script lang="ts" setup>
  import {ref, reactive, defineProps} from 'vue'
  defineProps(['dataSource','columns','loading','pagination','tableHeader'])
</script>
<template>
  <div class='search-btn-options mb16' v-if="tableHeader">
    <slot name="tableTitle" ></slot>
    <slot name="otherBth" ></slot>
  </div>
  <a-table 
      :dataSource="dataSource"
      :columns="columns"
      :loading="loading"
      :pagination="pagination">
      <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <!-- 插槽后面-slot:[item]如果是动态渲染插槽需要使用这种方法 -->
        <!-- slots是插槽的名字，遍历生成插槽 -->
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
  </a-table>
</template>
<style scoped lang="less">
  .search-btn-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>