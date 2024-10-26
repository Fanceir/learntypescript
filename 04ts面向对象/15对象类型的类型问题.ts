interface IIndextype {
  //返回值类型的目的是告知我们通过索引来拿到的值的类型
  [index: number]: string; //只能是number类型或者是string类型的一个
  //而不可以是其他的类型
}
//索引签名是这样的，后面传入的数组对象支持索引
const names15: IIndextype = ["a", "b", "c"];

// [index:string]:any 这个是没有报错的
//索引要求必须是字符串类型 用了nums['0']，所以不会报错
// [indexL:string ]:string 这个是报错的
//'0' 是符合的返回值是一个string类型也是符合的，报错的原因是严格的自变量类型
//因为有个 names15["foreach"],这里的返回值是个foreach，必须同时符合
