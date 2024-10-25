interface Ibarr {
  name: string;
  age: number;
  call: (num1: number) => number; // 使用一个属性来定义函数
}

const barrr: Ibarr = {
  name: "123",
  age: 123,
  call: (num1: number): number => {
    return 123;
  },
};

// 调用方式
barrr.call(123);
