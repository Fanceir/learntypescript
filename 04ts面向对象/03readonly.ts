class Person2 {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p2 = new Person2("xiaoming", 18);
console.log(p2.name, p2.age);
// p.name = "xiaozhang"; //因为此时是只读的所以会报错只读属性不能进行写入操作

