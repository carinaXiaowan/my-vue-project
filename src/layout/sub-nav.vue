<!-- 递归二级菜单 -->
<script setup lang="ts">
// 导入的文件
import { UserOutlined } from "@ant-design/icons-vue";
import { defineProps } from "vue";
// 逻辑部分
defineProps(["subMenu"]);
</script>

<template>
  <a-sub-menu>
    <template #title>
      <span>
        <user-outlined />
        <span>{{ subMenu.meta.title }}</span>
      </span>
    </template>
    <template v-for="item in subMenu.children">
      <!-- 递归遍历自己（注意加判断条件） -->
      <SubNav
        :key="(item as any).name"
        v-if="item.children && item.children.length > 0"
        :sub-menu="item"
      />
      <a-menu-item v-else :key="(item as any).name + (item as any).name">
        <span>{{ (item as any).meta.title }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
<style scoped lang="less"></style>
