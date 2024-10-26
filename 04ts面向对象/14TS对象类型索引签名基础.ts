// interface Iperson14 {
//   name: string;
//   age: number;
// }

// const p14: Iperson14 = {
//   name: "xiaoming",
//   age: 18,
// };

// function getArrayLength(arr: string | string[]) {
//   return arr.length;
// }

//可以通过字符串索引获得一个值就叫做索引类型查询
// interface StringArray {
//   [index: string]: string;
// }

// const myArray: StringArray = {
//   name: "xiaoming",
//   age: "18",
// };

//2.索引签名的案例
interface ICollection {
  [index: number]: string;
  length: number;
}
function printCollection(obj: ICollection) {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].length);
  }
}
const names14 = ["a", "b", "c"];
const tuple: [string, string] = ["asd", "asd "];
printCollection(names14);
printCollection(tuple);
