interface IIndexType16 {
  //两个类型的写法
  //数字类型缩索引的类型必须是字符串类型索引的子类型
  //因为所有的数字类型都会转换成字符串类型去获取值
  [index: number]: string;
  [key: string]: any;
  // 要求二: 如果索引签名中有定义其他属性, 其他属性返回的类型, 必须符合string类型返回的属性
  // [index: number]: string
  // [key: string]: number|string

  // aaa: string
  // bbb: boolean 错误的类型,因为这里的aaa同时是一个字符串
  
}

const names16: IIndexType16 = ["a", "b", "c"];
const item1 = names16[0];
const forEach = names16["forEach"];
console.log(item1);
console.log(forEach);
