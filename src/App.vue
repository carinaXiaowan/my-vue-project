<script setup lang="ts">
import { RouterView } from "vue-router";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ref } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
const locale = ref();
locale.value = zhCN;
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<style scoped lang="less"></style>
