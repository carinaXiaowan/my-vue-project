<script setup lang="ts">
// 导入的文件
import { PieChartOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SubNav from "./sub-nav.vue";

// 逻辑部分
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["homehome"]);
// 导航菜单处理
const router = useRouter();
const menuList = router.options.routes[0].children;
// 页面跳转
const handleJump = (item: any) => {
  // 不知道为啥，antd的a-menu组件的key多拼接了一次
  const currentKey = item.key.substring(0, item.key.length / 2);
  router.push({
    name: currentKey,
  });
};
</script>

<!-- 页面渲染 -->
<template>
  <!-- 左侧菜单导航 -->
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleJump">
      <template v-for="item in menuList">
        <SubNav :key="(item as any).name" v-if="item.children && item.children.length > 0" :sub-menu="item" />
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
  margin: 16px;
  height: 32px;
  background: rgb(255 255 255 / 30%);
}
</style>
