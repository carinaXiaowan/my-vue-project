<script setup lang="ts">
// 导入的文件
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

// 逻辑部分
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
</script>

<!-- 页面渲染 -->
<template>
  <a-layout class="layout" style="min-height: 100vh">
    <!-- 左侧菜单导航 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 右侧内容 -->
    <a-layout class="layout-right">
      <!-- 顶部信息 -->
      <a-layout-header class="layout-right-header" />
      <!-- 面包屑 -->
      <a-breadcrumb class="layout-right-breadcrumb">
        <a-breadcrumb-item>User</a-breadcrumb-item>
        <a-breadcrumb-item>Bill</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="layout-right-content">
        <!-- 路由页面内容 -->
        <router-view></router-view>
      </a-layout-content>
      <!-- 底部版权信息 -->
      <a-layout-footer class="layout-right-footer">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style scoped lang="less">
@import "@/assets/global.less";
@import "./index.less";
</style>
