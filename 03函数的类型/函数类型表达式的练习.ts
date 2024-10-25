type cal1FnType = (num1: number, num2: number) => number;
function calc1(calFn: cal1FnType) {
  const num1 = 10;
  const num2 = 20;
  const res = calFn(num1, num2);
  console.log(res);
}
function Sum(num1: number, num2: number): number {
  return num1 + num2;
}

calc1(Sum);
function testWrong(num1: string, num2: string) {
  return num1 + num2;
}

// calc1(testWrong);
//这里会显示报错，因为testWrong的参数类型不符合cal1FnType的参数类型

calc1(function (num1, num2) {
  return num1 + num2;
});
//这种还不用写类型注解因为可以自动推导
