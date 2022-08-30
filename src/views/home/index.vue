<script setup lang="ts">
// 导入文件
import { useRouter } from 'vue-router';

// 逻辑部分
const router = useRouter();
// 跳转到关于页面
const handleJumpToAbout = () => {
  router.push('/user');
};
console.info('dad', import.meta.env.VITE_SOME_KEY);
</script>

<template>
  <main>
    <div class="home-count">222</div>
    <a-button @click="handleJumpToAbout">关于我们</a-button>
  </main>
</template>
<style lang="less" scoped>
.home-count {
  color: @primary-color;
}
</style>
