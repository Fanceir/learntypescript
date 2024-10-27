interface ILength {
  length: number;
}

function getInfo6<Type extends ILength>(args: Type): Type {
  return args;
}
//这里通过extends来约束了泛型的类型
//Type相当于是一个变量来记录本次调用的类型，通过extends来约束这个变量的类型
const getInfoResult6 = getInfo6("123");
// const getInfoResult6_1 = getInfo6(123);
const getInfoResult6_1 = getInfo6({ length: 123 });
console.log(getInfoResult6);
console.log(getInfoResult6_1);
