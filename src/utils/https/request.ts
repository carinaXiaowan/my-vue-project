import axios from 'axios';
import { useAppStore } from '@/stores/app';
import { getCurrentInstance } from 'vue';
import { codeMessage } from './error';
import { getToken, setToken, getRefreshToken } from './auth';

const useAppStoreData = useAppStore(); //状态数据
const { proxy }: any = getCurrentInstance();
let isRefreshing = false; // 标记是否正在刷新 token
let requests: any = []; // 存储待重发请求的数组

// 刷新 access_token 的接口
const refreshToken = (flag: any) => {
  return service.post('/auth/refresh', { refresh_token: getRefreshToken() }, flag);
};

const service = axios.create({
  baseURL: 'http://localhost:8888', // 设置统一的请求前缀
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
    successHandle(response);
    useAppStoreData.$reset(); // 关闭loading
  },
  error => {
    errorHandle(error); // 处理错误状态码
    useAppStoreData.$reset(); // 关闭loading
  }
);

// 处理响应成功
function successHandle(response: any) {
  const { data, status, headers } = response;
  if (status === 200) {
    if (headers.authorization) {
      setToken(headers.authorization);
    }
    if (status == 202) {
      console.log('登录失效，请重新登录');
    }
    if (status == 212) {
      console.log('您的账号在其他地方登录,您已被强制下线!如非本人操作,请及时修改密码!');
    }
    return Promise.resolve(data);
  } else {
    return Promise.reject(response);
  }
}

// 处理异常
function errorHandle(error: any) {
  if (error.response) {
    // 请求已发出，服务器用状态代码响应
    const { status } = error.response;
    const { config } = error;
    if (status) {
      if (status === 401 && !config.url.includes('/auth/refresh')) {
        if (!isRefreshing) {
          isRefreshing = true;
          return refreshToken(true)
            .then(res => {
              const { access_token } = res.data;
              setToken(access_token);
              config.headers.Authorization = `${access_token}`;
              // token 刷新后将数组的方法重新执行
              requests.forEach((cb: any) => cb(access_token));
              requests = []; // 重新请求完清空
              return service(config);
            })
            .catch(err => {
              console.log('抱歉，您的登录状态已失效，请重新登录！');
              isRefreshing = false;
              return Promise.reject(err);
            });
        } else {
          // 返回未执行 resolve 的 Promise
          return new Promise(resolve => {
            // 用函数形式将 resolve 存入，等待刷新后再执行
            requests.push((token: string) => {
              config.headers.Authorization = `${token}`;
              resolve(service(config));
            });
          });
        }
      } else {
        const errorText = codeMessage[status];
        proxy.$message.error(errorText);
      }
    }
  } else {
    proxy.$message.error('请求失败');
  }
  Promise.reject(error);
}

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
