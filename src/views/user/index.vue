<script setup lang="ts">
// 导入文件
import { unref, ref, toRef, toRefs,reactive } from 'vue';
import ReTable from '@/components/base/ReTable/index.vue'
import {dataSource,columns} from './schema'

// 逻辑处理
</script>
<template>
  <div class="user-wrap">
    <ReTable :dataSource="dataSource" :columns="columns" >
      <template #title>
        列表数据
      </template>
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a-switch checked-children="启用" un-checked-children="禁用" />
        </template>
      </template>
    </ReTable>
  </div>
</template>

