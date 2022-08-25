import axios from 'axios';
import { appPinia } from '@/stores/app';
import { getCurrentInstance } from 'vue';
import { codeMessage } from './error';

const appPiniaData = appPinia(); //状态数据
const { proxy }: any = getCurrentInstance();

const http = (config: any, customOptions: any) => {
  // 创建axios实例
  const service = axios.create({
    baseURL: 'http://localhost:8888', // 设置统一的请求前缀
    timeout: 10000 // 设置统一的超时时长
  });

  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      // 创建loading实例
      appPiniaData.setLoading(true);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      appPiniaData.$reset(); // 关闭loading
      return response;
    },
    (error) => {
      errorHandle(error); // 处理错误状态码
      appPiniaData.$reset(); // 关闭loading
      return Promise.reject(error);
    }
  );

  return service(config);
};

// 处理异常
function errorHandle(error: any) {
  if (error.response) {
    // 请求已发出，服务器用状态代码响应
    const { status } = error.response;
    if (status) {
      const errorText = codeMessage[status];
      proxy.$message.error(errorText);
    }
  } else {
    proxy.$message.error('请求失败');
  }
}

export default http;
