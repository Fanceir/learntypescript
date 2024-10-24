//类型缩小是指 type narrowing
//将一个模糊的类型缩小比声明时更小的类型，这个过程叫做缩小

const padding: number | string = 10;
if (typeof padding === "number") {
  console.log(padding);
}

function printID(id: number | string) {
  if (typeof id == "string") {
    console.log(id.length, id.split(""));
  } else {
    console.log(id);
  }
}

//平等缩小 一般判断字面量
type Direction1 = "left" | "right" | "top" | "bottom";
function switchDirection(dir: Direction1) {
  if (dir === "left") {
    console.log("left");
  } else if (dir === "right") {
    console.log("right");
  } else if (dir === "top") {
    console.log("top");
  } else {
    console.log("bottom");
  }
}
// 3.instanceof 缩小

function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(date);
  }
}
interface Iswim {
  swim: () => void;
}
interface Ifly {
  fly: () => void;
}
const fish: Iswim = {
  swim: function () {
    console.log("swimming");
  },
};
function move(animal: Iswim | Ifly) {
  if ("swim" in animal) {
    animal.swim();
  } else if ("fly" in animal) {
    animal.fly();
  }
}
function getAnimal(animal: Iswim | Ifly) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
