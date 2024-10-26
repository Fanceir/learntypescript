function Foo3<Type, Element>(arg1: Type, arg2: Element) {}
Foo3(1, "2");
Foo3(1, 2);
Foo3("abc", { name: "abc" });
//有的时候T,E O,K,V等等都可以，只是为了更好的理解，所以取名字
//Type Element Key Value
