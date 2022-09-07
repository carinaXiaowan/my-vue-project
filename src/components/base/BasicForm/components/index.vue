<script setup lang="ts">
  import type { Component, defineComponent } from 'vue';
  import {
    Input,
    Select,
    Radio,
    Checkbox,
    AutoComplete,
    Cascader,
    DatePicker,
    InputNumber,
    Switch,
    TimePicker,
    TreeSelect,
    Slider,
    Rate,
    Divider
  } from 'ant-design-vue';
  import type { ComponentType } from './interface';

// 组件配置
const componentMap = new Map<ComponentType, Component>();
componentMap.set('a-input', Input);
componentMap.set('a-select', Select);
componentMap.set('Radio', Radio);
componentMap.set('Checkbox', Checkbox);
componentMap.set('AutoComplete', AutoComplete);
componentMap.set('Cascader', Cascader);
componentMap.set('DatePicker', DatePicker);
componentMap.set('InputNumber', InputNumber);
componentMap.set('Switch', Switch);
componentMap.set('TimePicker', TimePicker);
componentMap.set('TreeSelect', TreeSelect);
componentMap.set('Slider', Slider);
componentMap.set('Rate', Rate);
componentMap.set('Divider', Divider);

// 属性值
const props = defineProps(['type','options'])
const Comp = componentMap.get(props.type) as ReturnType<typeof defineComponent>;
</script>
<template>
  <Comp :options="options"/>
</template>
