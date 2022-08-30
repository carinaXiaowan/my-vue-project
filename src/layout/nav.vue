<script setup lang="ts">
// 导入的文件
import { ref, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SubNav from './sub-nav.vue';

// 逻辑部分
const collapsed = ref<boolean>(false);
const options = reactive<Record<string, string[] | undefined | null>>({
  selectedKeys: ['homehome']
});
// 导航菜单处理
const router = useRouter();
const route = useRoute();
let menuList: Array<any> | undefined = router.options.routes[0].children;
// 导航栏过滤掉登录页面
menuList = menuList?.filter((item) => item.name != 'login');
// 页面跳转
const handleJump = (item: any) => {
  // 不知道为啥，antd的a-menu组件的key多拼接了一次
  const currentKey = item.key.substring(0, item.key.length / 2);
  router.push({
    name: currentKey
  });
};

// 监听路由变化
watch(
  () => route,
  (value: any, oldValue) => {
    options.selectedKeys = [`${value.name}`.repeat(2)];
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<!-- 页面渲染 -->
<template>
  <!-- 左侧菜单导航 -->
  <a-layout-sider v-model:collapsed="collapsed" collapsible class="nav-wrap">
    <div class="logo">
      <img src="~@/assets/images/logo.png" alt="" />
      <h2 v-show="!collapsed" class="title">萌宠</h2>
    </div>
    <a-menu v-model:selectedKeys="options.selectedKeys" theme="dark" mode="inline" @click="handleJump">
      <template v-for="item in menuList">
        <SubNav :key="(item as any).name" v-if="item.children && item.children.length > 0" :sub-menu="item" />
        <a-menu-item v-else :key="(item as any).name + (item as any).name">
          <svg-icon :iconName="item.meta.icon" color="rgba(255,255,255,0.65)" :className="collapsed ? 'icon' : ''"></svg-icon>
          <span v-if="!collapsed">{{ (item.meta as any).title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<style scoped lang="less">
.nav-wrap {
  .icon {
    margin-left: -4px;
  }

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
}
</style>
