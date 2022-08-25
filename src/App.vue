<script setup lang="ts">
// 文件导入
import { RouterView } from 'vue-router';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { appPinia } from '@/stores/app';
import { storeToRefs } from 'pinia';

// 逻辑处理
dayjs.locale('zh-cn');
const locale = ref();
locale.value = zhCN;
const appPiniaData = appPinia();
const { loading } = storeToRefs(appPiniaData);
</script>

<template>
  <a-config-provider :locale="locale">
    <a-spin :spinning="loading" tip="加载中..."><router-view /></a-spin>
  </a-config-provider>
</template>

<style scoped lang="less"></style>
