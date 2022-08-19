<script setup lang="ts">
// 导入文件
import { aboutPinia } from "@/stores/about";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

// 初始变量
const router = useRouter(); //路由
const aboutPiniaData = aboutPinia(); //状态数据
const { message } = storeToRefs(aboutPiniaData);
// 逻辑部分
// 更新消息
const handleUpdateMessage = () => {
  console.info("我是按钮点击");
  aboutPiniaData.setNewMessage("我是更新消息的");
};
// 重置消息
const handleResetMessage = () => {
  aboutPiniaData.$reset();
};
// 返回首页
const handleJumpToHome = () => {
  router.push("/");
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ message }}</div>
    <a-button
      type="primary"
      style="margin-top: 20px"
      @click="handleUpdateMessage"
      >更新消息</a-button
    >
    <a-button
      type="default"
      style="margin-top: 20px"
      @click="handleResetMessage"
      >重置消息</a-button
    >
    <a-button type="default" style="margin-top: 20px" @click="handleJumpToHome"
      >返回首页</a-button
    >
  </div>
</template>

<style></style>
