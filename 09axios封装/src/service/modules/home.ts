//发送网络请求
import { BASE_URL, TIMEOUT } from '../config'
import myRequest from '..'

// myRequest.post;
myRequest.request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})