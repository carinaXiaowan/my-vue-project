<script setup lang="ts">
// 导入的文件
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import TopHeader from './top-header.vue';
import Nav from './nav.vue';
import Breadcrumb from './breadcrumb.vue';
import Footer from './footer.vue';
// 逻辑部分
const route = useRoute();
</script>

<!-- 页面渲染 -->
<template>
  <a-layout class="layout" style="min-height: 100vh;" v-if="route.name != 'login'">
    <!-- 左侧菜单导航 -->
    <Nav />
    <!-- 右侧内容 -->
    <a-layout class="layout-right">
      <!-- 顶部信息 -->
      <TopHeader />
      <!-- 面包屑 -->
      <Breadcrumb />
      <a-layout-content class="layout-right-content">
        <!-- 路由页面内容 -->
        <router-view></router-view>
      </a-layout-content>
      <!-- 底部版权信息 -->
      <Footer />
    </a-layout>
  </a-layout>
  <section v-else>
    <!-- 路由页面内容 -->
    <router-view></router-view>
  </section>
</template>
<style scoped lang="less">
.layout {
  &-right {
    flex-direction: column;
    display: flex;

    &-content {
      padding: 24px;
      margin: 0 16px;
      background: #fff;
      flex: 1;
    }
  }
}
</style>
