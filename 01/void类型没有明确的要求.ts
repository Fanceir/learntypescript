const names1: string[] = ["abc", "def", "ghi"];
names1.forEach((item, index, arr) => {
  return 123; //这里返回的123是没有意义的，因为forEach是没有返回值的
});
