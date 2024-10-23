let ImplicitAny: unknown;
ImplicitAny = "ImplicitAny";
let exampleC = ImplicitAny;

console.log(exampleC); // ImplicitAny

function testfunction(): null {
  return null;
}
function throwError(): never {
  throw new Error("Error");
}
//这里是要使用never的地方

const nevcerTest = (value: string): never => {
  throw new Error(value);
};

let TupleEx: [string, number] = ["1", 1];

console.log(TupleEx); // [ '1', 1 ]
TupleEx.push("good");
console.log(TupleEx); // [ '1', 1, 'good' ]
let [dj, good] = TupleEx; //这里只能写两个赋值好的

console.log(dj); // 1

let hello: string = "hello";
hello = "world";

type Gender = "M" | "F";
const gender: Gender = "M";
console.log(typeof gender); // string
