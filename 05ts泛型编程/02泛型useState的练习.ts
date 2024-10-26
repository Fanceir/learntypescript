//useState
function useState<Type>(initialState: Type) {
  let state = initialState;
  function setState(newState: Type) {
    state = newState;
  }
  return [state, setState];
}
const [count1, setCount1] = useState(0);
//因为实际运用的时候都是多种类型的，所以这里用泛型
const [message2, setMessage] = useState("hello");
