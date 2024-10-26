class Person3 {
  //私有属性属性前面会使用下划线
  private _name: string;
  private _age: number;
  constructor(name: string, age: number = 20) {
    this._name = name;
    this._age = age;
  }
  running() {
    console.log(this.name + "running");
  }
  set name(nameValue: string) {
    this._name = nameValue;
  }
  get name(): string {
    return this._name;
  }
  set age(newValue: number) {
    if (newValue > 0 && newValue < 200) {
      this._age = newValue;
    }
  }
  get age(): number {
    return this._age;
  }
}
//私有属性只有在类的内部才可以使用，但是我们又希望可以访问，可以在外界写上一个setter和getter
const p3 = new Person3("fanceir", 18);
p3.name = "nihao";
console.log(p3.name, p3);
p3.age = -100;
//一般情况下是不允许直接的访问的，这里的setter和getter是一种拦截操作
