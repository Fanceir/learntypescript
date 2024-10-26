class Person6 {}
const myname: string = "aaa";
const p6: Person6 = new Person6();
function printPerson6(p: Person6) {}
function factory6(ctor: new () => void) {
  return new ctor();
}
factory6(Person6);
//类可以创建类对应的实例对象
//类本身可以作为这个实例的类型
//类可以当作有个构造签名的函数

