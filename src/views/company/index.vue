<script setup lang="ts">
// 导入文件
import { ref, nextTick } from 'vue';
// 初始变量
const name = ref('better');
const test = ref(null);
// 逻辑部分
async function handleClick() {
  name.value = '掘金';
  console.log(test.value.innerText); // better
  await nextTick();
  console.log(test.value.innerText); // 掘金
}
// 更新消息
</script>
<template>
  <div class="company-wrap">
    <div ref="test">{{name}}</div>
    <a-button @click="handleClick">按钮</a-button>
  </div>
</template>

