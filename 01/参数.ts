function sum(num1: number, num2: number): number {
  return num1 + num2;
}
//注意，这里的返回值可以指定也可以作为返回值推断出来。
const res = sum(1, 2);
// sum("aaa", "ddd"); //这里会报错类型“string”的参数不能赋给类型“number”的参数。
// sum({}, {}); //这里会报错类型“{}”的参数不能赋给类型“number”的参数。
export {};
