interface IPerson13 {
  name: string;
  age: number;
}
const obj13 = {
  name: "xiaoming",
  age: 18,
  height: 180,
};
const info13: IPerson13 = {
  name: "xiaoming",
  age: 18,
  //   heiht: 180,//这里会报错
};
const info13_1: IPerson13 = obj13; //这里就不会报错了，这里是将obj13扩散了
function printPerson13(info: IPerson13) {
  console.log(info.name);
}
printPerson13({ name: "2sd", age: 13 }); //这里也不会报错
const info13_2 = {
  name: "xiaoming",
  age: 18,
  height: 180,
};
printPerson13(info13_2); //这里也不会报错
//严格字面量检测
const p13: IPerson13 = {
  name: "fanceir",
  age: 18,
};
//这是一个新鲜的字面量，必须严格满足类型要求，同时不能有多余的属性

// 但是后面我们用一个对象来赋值的时候，就不是新鲜的
