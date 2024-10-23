//元组类型tuple
//个人信息 fanceir 20 178
const info1: [string, number, number] = ["fanceir", 20, 178];
//元组类型用这样的方式来表示

//元组数据结构中可以放不同的数据类型，取出来的value也是有明确的类型的
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState;
  function setValue(newValue: number) {
    stateValue = newValue;
  }
  return [stateValue, setValue];
}
const [count, setCount] = useState(0);
console.log(count);
setCount(10);
// function useState<T>(state: T): [T, (newState: T) => void] {
//   let stateValue = state;
//   function setValue(newState: T) {
//     stateValue = newState;
//   }
//   return [stateValue, setValue];
// }
