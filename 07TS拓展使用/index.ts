import sum from "./utils/math";
import { type IPerson } from "./utils/type";
//推荐在导入类型的时候使用加个type关键字
console.log(sum(1, 2));
// import { IPerson } from "./utils/type";
import { Format } from "./utils/format";
let p: IPerson = {
  name: "zhangsan",
  age: 18,
};
console.log(p);
Format.format();
//.d.ts 是类型声明文件
