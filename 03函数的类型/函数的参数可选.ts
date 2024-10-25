function func(x: number, y?: number): number {
  if (y !== undefined) {
    console.log(x + y);
  }
  return x;
}
//number|undefined
//所以要进行类型缩小
func(1, 2);
func(1);
