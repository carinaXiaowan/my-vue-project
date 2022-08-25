const ACCESS_TOKEN_KEY = 'access_token'; //验证用户身份,存放在cookie或者localStorage中，存在放请求头，会过期，有效期2个小时
const REGRESH_TOKEN_KEY = 'refresh_token'; // 刷新token，会过期（有效期比较长），更新access_token用

export const getToken = () => {
  localStorage.get(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  localStorage.get(REGRESH_TOKEN_KEY);
};

export const setToken = (token: string, params = {}) => {
  localStorage.set(ACCESS_TOKEN_KEY, token, params);
};

export const setRefreshToken = (token: string) => {
  localStorage.set(REGRESH_TOKEN_KEY, token);
};
