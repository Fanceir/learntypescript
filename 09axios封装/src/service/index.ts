import { BASE_URL, TIMEOUT } from './config'
import MYrequest from './request'

const myRequest = new MYrequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

export default myRequest
