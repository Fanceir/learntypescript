const info: {
  name: string;
  age: number;
  height: number;
} = {
  name: "fanceir",
  age: 18,
  height: 185,
};
//可以这样来使用

//2.对象类型在函数类型中的使用
function printInfo(info: { name: string; age: number; height: number }) {
  console.log(info.name);
}
type PointType = { x: number; y: number };
function printCoordination(point: PointType) {
  console.log(point.x);
}
// function printCoordination(point: { x: number; y: number }) {
//   console.log(point.x);
// }
export {};
