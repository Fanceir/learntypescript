abstract class Shape {
  // 抽象类
  //只写声明不写实现，让子类去实现
  abstract getArea(): number;
}
class Circle extends Shape {
  constructor(public r: number) {
    super();
  }
  getArea() {
    return Math.PI * this.r ** 2;
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea() {
    return this.width * this.height;
  }
}
class Triangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
function CalcArea(shape: Shape) {
  //这里写的shape就是一个抽象类
  return shape.getArea();
}
console.log(CalcArea(new Circle(1)));
console.log(CalcArea(new Rectangle(1, 2)));
console.log(CalcArea(new Triangle(1, 2)));
//抽象类是不能实例化的，这里如果new Shape()会报错
//抽象方法必须存在于抽象类中，
//抽象类中包含抽象方法，但是可以包含普通的方法
//抽象方法必须被子类实现，意思就是每个子类都要重写这个方法
