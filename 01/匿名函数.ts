const names = ["abc", "def", "ghi"];

names.forEach(function (items, index, arr) {
  console.log(items, index, arr);
});
//匿名函数不要给他添加注解
names.forEach((item) => {
  console.log(item.toUpperCase());
});
//因为TypeScript会自动推断出参数的类型，叫做上下文类型
