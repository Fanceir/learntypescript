//定义对象类型
type IPerson9 = {
  name: string;
  age?: number; // '?'表示可选属性
  readonly id: number; // 'readonly'表示只读属性
};
interface IPerson09 {
  name: string;
  slogan?: string;
}

const person9: IPerson9 = {
  name: "张三",
  id: 1,
};

person9.name = "李四";
