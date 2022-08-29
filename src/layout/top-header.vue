<script setup lang="ts">
  // 导入的文件
  import { LogoutOutlined } from '@ant-design/icons-vue';
  import { useRouter } from 'vue-router';
  
  // 逻辑部分
  // 导航菜单处理
  const router = useRouter();
  
  // 页面跳转
  const handleJump = () => {
    router.push('/login')
  };
  </script>
  
  <!-- 页面渲染 -->
  <template>
    <!-- 头部信息 -->
    <a-layout-header class="top-header-wrap">
      <a-tooltip title="退出登录"> 
        <logout-outlined @click="handleJump" />
      </a-tooltip>
    </a-layout-header>
  </template>
  <style scoped lang="less">
  .top-header-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #fff !important;
  }
  </style>
  