interface Iperson {
  name: string;
  age: number;
  friend?: {
    name: string;
    age: number;
  };
}

const infooo: Iperson = {
  name: "xiaoming",
  age: 18,
  //   friend: {
  //     name: "xiaohong",
  //     age: 19,
  //   },
};
//访问属性的时候可以这样写 但是如果想要给属性赋值的时候怎么办呢
console.log(infooo.friend?.name);
//这里的friend可能是存在的也可能是不存在的
// console.log(infooo.friend?.name);

//第一种方法
if (infooo.friend) {
  infooo.friend.name = "xiaohong";
}

infooo.friend!.name = "xiaohong";
//这里是强调friend一定是不为空的，但是这样的作法是有点危险的
//这个就叫做非空类型断言
export {};
