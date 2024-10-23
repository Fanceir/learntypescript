# 类型

typescript 是有定义标识符的

- 基本类型
  - number
  - string
  - boolean
  - null
  - undefined
  - symbol
  - void
  - any

```ts
let name:string= "hello";
let age:number = 10;
let isOk:boolean = true;

let n:null = null;
let u:undefined = undefined;
```

声明一个标识符的时候，如果有直接的写出来的类型那么就用这个类型，如果没有写出来那么就会去推导这个类型

```ts
let name = "hello";
let age =18;
const height =180;
```
