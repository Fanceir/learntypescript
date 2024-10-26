class Person {
  //成员属性是需要声明的
  name: string;
  age: number;

  //如果没有指定的就是any属性
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(this.name);
  }
  running() {
    console.log(this.name + "running");
  }
}
const p1 = new Person("fanceir", 20);
// const p2 = new Person("nihao", 18);
console.log(p1, p2);
//可以做一个初始化值这样就不需要类型注解了
//和js几乎没有啥区别
