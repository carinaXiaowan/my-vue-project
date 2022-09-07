<script setup lang="ts">
// 导入文件
import { unref, ref, toRef, toRefs,reactive } from 'vue';
import ReTable from '@/components/base/ReTable/index.vue'
import BasicForm from '@/components/base/BasicForm/index.vue'
import {dataSource,columns,formSchema} from './schema'

// 逻辑处理
</script>
<template>
  <div class="user-wrap">
    <BasicForm :formSchema="formSchema" layout="horizontal" />
    <ReTable :dataSource="dataSource" :columns="columns" :tableHeader="true"  >
     <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a-switch checked-children="启用" un-checked-children="禁用" />
        </template>
      </template>
    </ReTable>
  </div>
</template>

