<script setup lang="ts">
// 导入的文件
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { FormInstance } from 'ant-design-vue';
import type { FormState } from './interface.d';

// 逻辑部分
const router = useRouter();
const formRef = ref<FormInstance>();
const form = reactive<FormState>({
  username: 'admin',
  password: '123456'
});

// 校验
const rules = {
  username: [{ required: true, message: 'Please input your username!' }],
  password: [{ required: true, message: 'Please input your password!' }]
};
// 提交
const handleSubmit = async () => {
  if (formRef.value) {
    const values = await formRef.value.validateFields();
    localStorage.setItem('useInfo', JSON.stringify(values));
    router.push('/home');
  }
};
</script>

<template>
  <main class="login-wrap">
    <h2 class="login-title">登录界面</h2>
    <a-form ref="formRef" :model="form" :rules="rules" class="login-form">
      <h3 class="login-subtitle">欢迎登录LOGIN</h3>
      <a-form-item name="username">
        <a-input v-model:value="form.username" />
      </a-form-item>
      <a-form-item name="password">
        <a-input-password v-model:value="form.password" />
      </a-form-item>
      <a-form-item>
        <a-button class="btn" type="primary" html-type="button" @click="handleSubmit"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </main>
</template>
<style lang="less" scoped>
@import './index.less';
</style>
