// function Foo(name: string, age: number) {}
// Foo("fanceir", 20);

function Bar<Type>(args: Type) {
  return args;
}
const resBar1 = Bar<number>(123);
const resBar2 = Bar<string>("123");
const resBar3 = Bar<{ name: string }>({ name: "fanceir" });
//泛型就是将类型参数化

//省略的写法
const resBar4 = Bar("aaaaaaaaa");
//会自动进行类型推断
const resBar5 = Bar(11111111);
let resBar6 = Bar({ name: "fanceir" });
let resBar7 = Bar({ name: "fanceir", age: 20 });
//这个就是泛型的基本使用
