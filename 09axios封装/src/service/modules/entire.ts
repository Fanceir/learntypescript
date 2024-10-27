import myRequest1 from '..';
myRequest1
  .request({
    url: '/entire/list',
    params: {
      offset: 0,
      size: 20,
    },
  })
  .then((res: any) => {
    console.log(res);
  })
  .catch((error: any) => {
    console.error(error);
  });
