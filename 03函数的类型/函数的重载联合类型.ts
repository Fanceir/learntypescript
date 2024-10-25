// function getLength(arg: string): number;
// function getLength(arg: any) {
//   return arg.length;
// }
// getLength("aaaaa");

function getlength1(arg: string | any[]) {
  return arg.length;
}
getlength1("aaaaa");
getlength1([1, 2, 3]);
//有的时候联合类型可以实现，也可以使用函数的重载来实现，尽量是由函数的联合类型来实现

function getlength2(arg2: { length: number }) {
  return arg2.length;
}
