//ts 对传入函数的类型的参数的个数是不进行检查的，但是对类型是进行检查的

type CalcType = (a: number, b: number) => number;
function calc11(calcFn: CalcType) {
  const a = 10;
  const b = 20;
  const res = calcFn(a, b);
  console.log(res); //调用的时候必须两个都要传
}
calc11(function () {
  return 213;
});
//这里不会报错

// const namess: string[] = ["a", "b", "c"];
// names.forEach(function (item, index, arr) {
//   console.log(item);
// });
//这里使用的时候也不是全部都要把item,index,arr都写上，可以只写一个item
