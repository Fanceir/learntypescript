const name111 = "fanceir";
let age111: 20 = 20;
//这就是字面量类型

//可以将多个字面量类型联合起来

type Direction = "north" | "east" | "south" | "west";
// const d1:Direction="aaa" 这个是不对的
const d2: Direction = "north"; //其实是一种枚举，就是枚举这些值

//eg:
function request(url: string, method: "GET" | "POST") {}
request("http://www.baidu.com", "GET");

// ts中的一个细节
// const info = {
//   url: "xxx",
//   method: "POST",
// };
// request(info.url, info.method); //这个是不行的，因为info.method的类型是string
// request(info.url, info.method as "POST"); //这个是可以的，将info.method断言为"POST"
const indo: { url: string; method: "GET" | "POST" } = {
  url: "xxx",
  method: "POST",
};
request(indo.url, indo.method); //这个是可以的
const info2 = {
  url: "xxx",
  method: "POST",
} as const;
request(info2.url, info2.method); //这个是可以的，因为直接将method: "POST"
