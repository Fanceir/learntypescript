//获取DOM元素
//可以使用类型断言来解决
const imgEl = document.querySelector(".img") as HTMLImageElement;
if (imgEl !== null) {
  imgEl.src = "www.baidu.com";
}

//类型断言
//类型断言只能断言成更加具体的类型或者不太具体的类型
//注意以下是一个解释，但是请不要这样子做
// const age: number = 18;
// const age3 = age as any;
// const age4 = age3 as string;
