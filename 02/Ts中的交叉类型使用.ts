// type ID = number | string;
interface IID {
  name: string;
  age: number;
}
interface Icoder {
  name: string;
  coding: () => void;
}
const info1: IID & Icoder = {
  name: "Fanceir",
  age: 18,
  coding() {
    console.log("coding");
  },
};

//交叉类型用的最多的地方就是满足多个条件的类型
// 注意 这个是没有意义的
//const interface :string & number = '1' //报错
export {};
