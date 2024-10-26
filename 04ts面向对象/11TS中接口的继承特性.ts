interface IPerson11 {
  name: string;
  age: number;
}
type keyType = {
  name: string;
  age: number;
};

interface IIPerson extends IPerson11 {
  slogan: string;
}
//接口可以从其他的接口中继承
//减少了相同代码的重复书写
//使用第三方库自行定义一个类型的属性
