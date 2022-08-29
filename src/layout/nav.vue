<script setup lang="ts">
// 导入的文件
import { PieChartOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SubNav from './sub-nav.vue';

// 逻辑部分
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['homehome']);
// 导航菜单处理
const router = useRouter();
let menuList:Array<any> | undefined= router.options.routes[0].children;
// 导航栏过滤掉登录页面
menuList = menuList?.filter(item=>item.name !='login');
// 页面跳转
const handleJump = (item: any) => {
  // 不知道为啥，antd的a-menu组件的key多拼接了一次
  const currentKey = item.key.substring(0, item.key.length / 2);
  router.push({
    name: currentKey
  });
};
</script>

<!-- 页面渲染 -->
<template>
  <!-- 左侧菜单导航 -->
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo">
      <img src="~@/assets/images/logo.png" alt="" />
      <h2 v-show="!collapsed" class="title">萌宠</h2>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  line-height: 64px;

  img {
    margin-right: 8px;
    height: 32px;
  }

  .title {
    margin-top: 10px;
    font-size: 14px;
    color: blanchedalmond;
  }
}
</style>
