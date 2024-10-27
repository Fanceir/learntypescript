//如果返回值是void类型，那么我们返回undefined或者不返回任何值

function sum(num1: number, num2: number): void {
  console.log(num1 + num2);
  return undefined;
}
type LyricInfoType = {
  time: number;
  lyric: string;
};
//parseLyric函数类型是 (lyric: string) => LyricInfoType[]
function parseLyric(lyric: string): LyricInfoType[] {
  const lyricInfos: LyricInfoType[] = [];
  return lyricInfos;
}
type fooType = () => void; //返回值是void类型
const fooo: fooType = () => {};

type delayFunctionType = (...args: any[]) => void;
//定义一个函数并且传入的参数是一个函数，这个函数的参数是一个字符串和一个数字，返回值是void
function delayFunction(fn: delayFunctionType) {
  setTimeout(() => {
    fn("fanceir", 18);
  }, 1000);
}
//执行上面的函数。并且传入一个匿名函数
delayFunction((names, age) => {
  console.log(names, age);
});
//函数没有明确的返回值类型的时候返回一个void
export {};
