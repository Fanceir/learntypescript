//never表示永远不会有返回值的类型

function fc(): never {
  throw new Error("error");
}

fc();
//一般只有类型推导中会推导出never，但是实际是很少使用的
function test() {
  return [];
}

//封装框架的时候可能会使用never
function handleMessage(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log(message);
      break;
    case "number":
      console.log(message);
      break;
    default:
      const check: never = message;
  }
}
//这里的check更像是一个逻辑的判断，如果排除了所有的可能，就可以使用never
export {};
