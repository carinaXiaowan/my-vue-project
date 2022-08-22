<script setup lang="ts">
// 导入的文件
import { PieChartOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SubNav from "./sub-nav.vue";

// 逻辑部分
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
// 导航菜单处理
const router = useRouter();
const menuList = router.options.routes[0].children;
// 页面跳转
const handleJump = (item: any) => {
  console.info(item);
  router.push({
    name: item.key,
  });
};
</script>

<!-- 页面渲染 -->
<template>
  <!-- 左侧菜单导航 -->
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      @click="handleJump"
    >
      <template v-for="item in menuList">
        <SubNav
          :key="(item as any).name"
          v-if="item.children && item.children.length > 0"
          :sub-menu="item"
        />
        <a-menu-item v-else :key="(item as any).name + (item as any).name">
          <pie-chart-outlined />
          <span>{{ (item.meta as any).title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<style scoped lang="less">
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
