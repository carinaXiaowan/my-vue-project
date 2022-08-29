<script setup lang="ts">
// 导入文件
import { useRouter } from 'vue-router';

// 逻辑部分
const router = useRouter();
// 跳转到关于页面
const handleJumpToAbout = () => {
  router.push('/about');
};
console.info('dad', import.meta.env.VITE_SOME_KEY);
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <a-button @click="handleJumpToAbout">关于我们</a-button>
  </main>
</template>
