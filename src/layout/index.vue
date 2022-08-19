<script setup lang="ts">
import LayoutNav from "./layout-nav.vue";
import LayoutFooter from "./layout-footer.vue";
</script>
<template>
  <section class="layout">
    <!-- 左边导航栏 -->
    <aside class="layout-aside">
      <LayoutNav />
    </aside>
    <!-- 右侧内容区 -->
    <main class="layout-main">
      <section class="layout-main-breadcrumb">我是面包屑</section>
      <section class="layout-main-content">
        <router-view></router-view>
      </section>
      <!-- 底部信息 -->
      <footer class="layout-main-footer">
        <LayoutFooter />
      </footer>
    </main>
  </section>
</template>
<style scoped lang="less">
@import "@/assets/global.less";
@import "./index.less";
</style>
