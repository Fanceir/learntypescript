//面向对象的另一个特性就是继承

// class Student extends Person {}

//类的成员修饰符
// public private protected

class Person1 {
  protected name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //eating 变成了一个私有属性
  private eating() {
    console.log(this.name + "eating", this.name);
  }
}

const p = new Person1("fanceir", 18);
//加了public之后可以在任意情况下都可以访问，不加默认就是public
// p.eating();
//eating是私有属性，所以会报错
// console.log(p.name);//属性“name”受保护，只能在类“Person1”及其子类中访问

class Student1 extends Person1 {
  constructor(name: string, age: number) {
    super(name, age);
    console.log(this.name);
  }
  studying() {
    console.log(this.name + "studying");
  }
}
const stu1 = new Student1("fanceir", 18);
stu1.studying();
//* console.log(stu1.age);
//属性“age”为私有属性，只能在类“Person1”中访问。
