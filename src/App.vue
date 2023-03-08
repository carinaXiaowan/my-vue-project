<script setup lang="ts">
// 文件导入
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { appPinia } from '@/stores/app';

// 逻辑处理
dayjs.locale('zh-cn');
const locale = ref();
locale.value = zhCN;
const appPiniaData = appPinia();
const { loading } = storeToRefs(appPiniaData);
</script>

<template>
  <a-config-provider :locale="locale">
    <a-spin :spinning="loading" tip="加载中...">
      <RouterView class="router-view" v-slot="{ Component }">
        <transition name="slide-left">
          <component :is="Component" />
        </transition>
      </RouterView>
    </a-spin>
  </a-config-provider>
</template>
