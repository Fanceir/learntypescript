import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class MYrequest {
  instance: AxiosInstance
  //每个request的实例都有一个axios实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig) {
    this.instance.request(config)
  }
  get() {}
  post() {}
}
export default MYrequest
