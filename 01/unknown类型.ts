//unknown 类型是和 any 类型有点相似，但是在unknown类型上进行任何的操作都是不合法的
let foo: any = "aaa";
foo = 123; //这里是可以的

let foo1: unknown = "aaa";
foo1 = 1223;

// console.log(foo1.length);//这里是不合法的是会报错的、
//必须要先进行类型校验，然后才能在缩小之后的类型下进行对应的操作
if (typeof foo1 === "string") {
  console.log(foo1.length);
}
//表示已经校验过了，所以可以使用
//这叫做类型缩小
