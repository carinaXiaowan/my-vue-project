<script setup lang="ts">
// 导入文件
import { unref, ref, toRef, toRefs } from 'vue';

// 初始变量
const ref_data = ref(1);
const normal_data = 2;
const obj = {
  name: 'carina',
  age: 10
};
console.info('ref_data', unref(ref_data));
console.info('ref_data', ref_data.value);
console.info('normal_data', unref(normal_data));
console.info('obj', obj);
console.info('obj1', toRef(obj, 'name'));
console.info('obj2', toRefs(obj));
</script>
<template>
  <div class="user-wrap">
    <h1>This is an about page</h1>
  </div>
</template>

