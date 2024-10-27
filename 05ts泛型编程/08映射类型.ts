interface IPerson08 {
  name: string;
  age: number;
}

//拷贝一份IPerson08的类型

//ts提供的映射类型

type MapPerson08<Type> = {
  [Property in keyof Type]: Type[Property];
};
//keyof Type 是一个联合类型，把索引类型依次进行使用
type newPerson = MapPerson08<IPerson08>;
let p08: newPerson = {
  name: "zhangsan",
  age: 18,
};
console.log(p08);