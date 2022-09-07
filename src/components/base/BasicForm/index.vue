<script lang="ts" setup>
  // 导入文件
  import { dividerProps } from 'ant-design-vue/lib/divider';
  import {ref, reactive, defineProps, defineComponent} from 'vue'
  import Comp from './components/index.vue'
  // 属性值
  defineProps(['formSchema'])
</script>
<template>
  <a-form layout="horizontal">
    <a-row :gutter="24">
      <template v-for="schema in formSchema" :key="schema.key">
        <a-col :span="schema.span">
          <a-form-item :label="schema.title" :name="schema.key">
            <Comp :type="schema.type" :options="schema.props.options" />
          </a-form-item>
        </a-col>
      </template>
    </a-row>
  </a-form>
</template>