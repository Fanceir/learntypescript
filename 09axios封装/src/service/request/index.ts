//index.ts
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface MYInterceptors {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse;
  responseFailureFn?: (err: any) => any;
}
interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYInterceptors;
}
class MYrequest {
  instance: AxiosInstance;
  //每个request的实例都有一个axios实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    //请求拦截器
    //可以在拦截器中加入token等
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功拦截');
        return config;
      },
      (error) => {
        console.log('全局请求失败拦截');
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功拦截');
        return res.data;
      },
      (error) => {
        console.log('全局响应失败拦截');
        return error;
      }
    );

    //
  }
  //网络请求方法封装
  request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }
  // get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  //   return this.instance.get(url, config);
  // }
  // post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  //   return this.instance.post(url, data, config);
  // }
}
export default MYrequest;
