//发送网络请求
import { BASE_URL } from '../config';
import myRequest from '..';

// Ensure myRequest.request returns a Promise
myRequest
  .request({
    url: '/home/multidata', // Ensure the URL is correct
  })
  .then((res: any) => {
    // Explicitly type the response parameter
    console.log(res);
  })
  .catch((error: any) => {
    // Add error handling
    console.error(error);
  });
