import { BASE_URL, TIMEOUT } from './config';
import MYrequest from './request';

// 创建默认请求实例
const myRequest = new MYrequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 创建自定义请求实例，带有自定义拦截器
export const myRequest1 = new MYrequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,

  interceptors: {
    requestSuccessFn: (config) => {
      console.log('请求成功拦截');
      return config;
    },
    requestFailureFn: (error) => {
      console.log('请求失败拦截');
      return Promise.reject(error);
    },
    responseSuccessFn: (res) => {
      console.log('响应成功拦截');
      return res;
    },
    responseFailureFn: (error) => {
      console.log('响应失败拦截');
      return Promise.reject(error);
    },
  },
});

export default myRequest;
