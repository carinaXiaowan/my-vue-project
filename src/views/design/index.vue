<script setup lang="ts">
// 导入文件
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAboutStore } from '@/stores/about';
import { useHomeStore } from '@/stores/home';
import Service from '@/utils/https/request';

// 初始变量
const router = useRouter(); //路由
const useAboutStoreData = useAboutStore(); //状态数据
const useHomeStoreData = useHomeStore();

// 逻辑部分
useHomeStoreData.setFirstName('zoe');
const { message } = storeToRefs(useAboutStoreData);
// 更新消息
const handleUpdateMessage = async () => {
  const message = await getInfo();
  useAboutStoreData.setNewMessage(message);
};
// 重置消息
const handleResetMessage = () => {
  useAboutStoreData.$reset();
};
// 返回首页
const handleJumpToHome = () => {
  router.push('/');
};
const getInfo = async () => {
  try {
    const result = await Service({
      method: 'get',
      url: '/list_user'
    });
    return result.data;
  } catch (error) {}
};
</script>
<template>
  <div class="design-wrap">
    <BasicArrow :expand="true" />
    <div>{{ message }}</div>
    <a-button type="primary" style="margin-top: 20px" @click="handleUpdateMessage"
      >更新消息</a-button
    >
    <a-button type="default" style="margin-top: 20px" @click="handleResetMessage"
      >重置消息</a-button
    >
    <a-button type="default" style="margin-top: 20px" @click="handleJumpToHome">返回首页</a-button>
  </div>
</template>
