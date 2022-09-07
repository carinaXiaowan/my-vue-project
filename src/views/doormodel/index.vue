<script setup lang="ts">
// 导入文件
import { unref, ref, toRef, toRefs,reactive } from 'vue';
import type { FormInstance } from 'ant-design-vue';
import ReTable from '@/components/base/ReTable/index.vue'
import BasicForm from '@/components/base/BasicForm/index.vue'
import {dataSource,columns,formSchema} from './schema'

// 初始化
const formData = reactive({} as any);
// 逻辑处理
const handleSearch = async (form:FormInstance | undefined)=>{
  if(form){
    const values = await form.validateFields();
      console.info(values)
   } 
}
</script>
<template>
  <div class="user-wrap">
    <BasicForm ref='formRef' :formSchema="formSchema" layout="horizontal" :model="formData" :search="false" >
      <template #formFooter="{form}">
        <div class="flex flex-start">
          <a-button @click="()=>handleSearch(form)" html-type="button" type="primary">查询</a-button>
        </div>
      </template>
    </BasicForm>
    <ReTable :dataSource="dataSource" :columns="columns" :tableHeader="true"  >
     <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a-switch checked-children="启用" un-checked-children="禁用" />
        </template>
      </template>
    </ReTable>
  </div>
</template>

