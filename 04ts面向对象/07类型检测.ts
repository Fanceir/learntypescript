class Person4 {
  constructor(public name: string) {}
}

function printPerson(person: Person4) {
  console.log(person.name);
}

class Dog {
  constructor(public name: string) {}
}
printPerson(new Person4("张三"));

printPerson({ name: "hello" });
printPerson(new Dog("旺财")); 


const person3: Person4 = new Dog("hha");
console.log(person3.name);
//但是在ts里面这些都没有报错
//ts只关心类型中的方法是否是一样的
