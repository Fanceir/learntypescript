function funcc(x: number, y: number = 1000): number {
  return x + y;
}
funcc(1, 2);
funcc(1);
func(1, undefined); //这个是允许的
//函数的参数可以是默认值，有默认值的情况下参数的类型注解可以省略
//可选类型必须放到后面
