type PointType = {
  x: number;
  y: number;
};
interface PointInterface {
  x: number;
  y: number;
  z?: number; //这里的？是一个可选的属性
}
//这是声明的方式
// 这两个直观上的使用是没有区别的
// 类型别名和接口是非常相似的
//接口类型只能声明对象，而类型别名可以声明基本类型、联合类型、元组等

//在声明对象的时候interface可以多次声明
type PointType1 = {
  x: number;
  y: number;
};
// type PointType1 = {
//   z: number;
// };
//可以发现这两个是会报错的，对于Type是不允许两个相同的名称重复声明的

//interface可以多次声明一个接口名称
interface PointInterface1 {
  x: number;
  y: number;
}
interface PointInterface1 {
  z?: number;
}
const point: PointInterface1 = {
  x: 1,
  y: 2,
  z: 3,
};
// 这里两次的声明都是可以的，这是interface的特性
interface Idea {
  name: string;
  age: number;
}
interface MyIdea extends Idea {
  key: string;
}
// interface 是支持继承的

//interface是可以被实现的，这是ts特有的
class Point implements PointInterface {
  x: number = 0;
  y: number = 0;
}
//声明别的类型的时候是用type
//声明对象类型的时候是使用interface
