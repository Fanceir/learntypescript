function calc(calcFn) {
  const num1 = 10;
  const num2 = 20;
  const res = calcFn(num1, num2);
  console.log(res);
}
function add(num1, num2) {
  return num1 + num2;
}
calc(add);
function sub(num1, num2) {
  return num1 - num2;
}

calc(sub);
