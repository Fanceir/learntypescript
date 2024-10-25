function func1(...args: number[]) {
  return args.reduce((a, b) => a + b);
}

foo(1, 2, 3, 4, 5); // 15
