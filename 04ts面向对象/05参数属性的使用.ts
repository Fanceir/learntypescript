class Person5 {
  constructor(private _name: string, public _age: number) {}
  //快速去创建一个对象
  get name(): string {
    return this._name;
  }
}
const p5 = new Person5("fanceir", 20);
console.log(p5.name);
console.log(p5);
//这样也是可以的
