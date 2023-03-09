import axios from 'axios';
import { useAppStore } from '@/stores/app';
import { getToken } from './auth';

const useAppStoreData = useAppStore(); //状态数据

const service = axios.create({
  baseURL: '/user', // 设置统一的请求前缀
  timeout: 10000, // 设置统一的超时时长
  withCredentials: false, //是否跨域
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截
service.interceptors.request.use(
  (config: any) => {
    // 创建loading实例
    useAppStoreData.setLoading(true);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 响应拦截
service.interceptors.response.use(
  response => {
    useAppStoreData.$reset(); // 关闭loading
    return Promise.resolve(response.data);
  },
  error => {
    useAppStoreData.$reset(); // 关闭loading
    return Promise.reject(error);
  }
);

// 给请求头添加 access_token
const setHeaderToken = (isNeedToken: boolean) => {
  const accessToken = isNeedToken ? getToken() : null;
  if (isNeedToken) {
    // api 请求需要携带 access_token
    if (!accessToken) {
      console.log('不存在 access_token 则跳转回登录页');
    }
    service.defaults.headers.common.Authorization = `${accessToken}`;
  }
};

// 有些 api 并不需要用户授权使用，则不携带 access_token；默认不携带，需要传则设置第三个参数为 true
export const get = (url: string, params = {}, isNeedToken = false) => {
  setHeaderToken(isNeedToken);
  return service({
    method: 'get',
    url,
    params
  });
};

export const post = (url: string, params = {}, isNeedToken = false) => {
  setHeaderToken(isNeedToken);
  return service({
    method: 'post',
    url,
    data: params
  });
};

export default service;
