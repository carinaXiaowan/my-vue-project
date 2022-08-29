<script setup lang="ts">
// 导入的文件
import { watch } from 'vue'
import { useRoute } from 'vue-router';
import Nav from './nav.vue';
import Breadcrumb from './breadcrumb.vue';
// 逻辑部分
const route = useRoute();
watch(() => route,(value, oldValue)=>{
  console.log(value.name,'新的路由') 
 console.log(oldValue,'旧的路由')
},{
  immediate:true
})
</script>

<!-- 页面渲染 -->
<template>
  <a-layout class="layout" style="min-height: 100vh;" v-if="route.name != 'login'">
    <!-- 左侧菜单导航 -->
    <Nav />
    <!-- 右侧内容 -->
    <a-layout class="layout-right">
      <!-- 顶部信息 -->
      <a-layout-header class="layout-right-header" />
      <!-- 面包屑 -->
      <Breadcrumb />
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
  <a-card v-else>
    <!-- 路由页面内容 -->
    <router-view></router-view>
  </a-card>
</template>
<style scoped lang="less">
@import "@/assets/global.less";
@import "./index.less";
</style>
