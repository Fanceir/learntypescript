declare module "lodash" {
  export function join(...args: any[]): any;
}
type IDType = string | number;
//为自己的变量来进行声明
declare class Person11 {
  name: string;
  age: number;
  constructor(name: string, age: number);
}

// global.d.ts
declare var num: number;
declare let str: string;
declare const obj: object;
declare function fun(s: string): number;
declare enum dir {
  a,
  b,
  c,
  d,
}
