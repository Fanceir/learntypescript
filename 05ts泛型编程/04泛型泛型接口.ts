interface IInfo4<Type = string> {
  name: Type;
  age: number;
  slogan: Type;
}
const Info4: IInfo4<string> = {
  name: "abc",
  age: 18,
  slogan: "def",
};
const Info4_1: IInfo4<number> = {
  name: 123,
  age: 18,
  slogan: 456,
};
//每次可以动态地传入不同的类型
const Info4_3: IInfo4 = {
  name: "asd",
  age: 18,
  slogan: "sd",
};
//接口中地Type也可以有泛型
