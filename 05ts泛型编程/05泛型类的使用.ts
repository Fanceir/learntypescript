class Point5<Type = number> {
  x: Type;
  y: Type;
  constructor(x: Type, y: Type) {
    this.x = x;
    this.y = y;
  }
}

const point5_1 = new Point5(1, 2);
const point5_2 = new Point5("1", "2");
console.log(point5_1);
console.log(point5_2);
//这里的Type默认是number，所以传入的时候可以不传入类型
