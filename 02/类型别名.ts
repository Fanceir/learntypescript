//在之前我们已经编写过类型别名

// function printID(id: number | string) {
//   console.log(id);
// }
//使用type
type ID = number | string;
//可以使用type直接自定义类型别名
function printID1(id: ID) {
  console.log(id);
}
type MyPointType = { x: number; y: number };
function printCoord(pt: MyPointType) {
  console.log(pt.x, pt.y);
}
export {};
