<script lang="ts" setup>
  // 导入文件
  import { dividerProps } from 'ant-design-vue/lib/divider';
  import {ref, unref, defineProps, defineComponent} from 'vue'
  import type { FormInstance } from 'ant-design-vue';
  import Comp from './components/index.vue'
  // 属性值
  const props = defineProps(['formSchema','layout','model','search'])

  // 初始化
  const formRef = ref<FormInstance>();
  const modelData = unref(props.model);
  // 方法集合
  // 搜索
  const handleSearch = async ()=>{
    if( formRef.value){
      const values = await formRef.value.validateFields();
      console.info(values)
    } 
  }
  // 重置
  const handleReset = ()=>{
    formRef.value?.resetFields()
  }
  
</script>
<template>
  <a-form :layout="layout" ref="formRef" :model="modelData || {}" >
    <a-row :gutter="24">
      <template v-for="schema in formSchema" :key="schema.key">
        <a-col :span="schema.span">
          <a-form-item :label="schema.title" :name="schema.key" v-bind='schema.formItemProps'>
            <Comp :type="schema.type" v-bind='schema.fieldProps' v-model:value="modelData[schema.key]" />
          </a-form-item>
        </a-col>
      </template>
    </a-row>
    <!-- 内置查询 -->
    <a-form-item v-if="search">
      <a-button @click="handleSearch" html-type="button" type="primary">查询</a-button>
      <a-button @click="handleReset" html-type="button" type="default" class="ml8">重置</a-button>
    </a-form-item>
    <!-- 插槽操作 -->
    <slot name="formFooter" v-bind='{form:formRef}'></slot>
  </a-form>
</template>