function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}
const info7 = {
  name: "fanceir",
  age: 20,
  height: 180,
};
console.log(getObjectProperty(info7, "name"));
// const name7 = getObjectProperty(info7, "name");
// interface getObjectProperty7 {
//   name: string;
//   age: number;
// }
// type GetType = keyof getObjectProperty7;
//这里的GetType就是name和age的联合类型  "name" | "age"
