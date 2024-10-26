interface Ikk {
  name: string;
  age: number;
  slogan: string;
  talk: () => void;
}

const person: Ikk = {
  name: "xiaoming",
  age: 18,
  slogan: "good",
  talk() {
    console.log("good");
  },
};
class Person12 implements Ikk {
  name: string;
  age: number;
  slogan: string;
  constructor(name: string, age: number, slogan: string) {
    this.name = name;
    this.age = age;
    this.slogan = slogan;
  }
  talk() {
    console.log(this.slogan);
  }
}
//接口只有在所有的属性都满足的情况下才会不报错
const person12 = new Person12("xiaoming", 18, "good");
person12.talk();