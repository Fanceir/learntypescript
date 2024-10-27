type MapPerson09<Type> = {
  //   readonly [Property in keyof Type]: Type[Property];
  [Property in keyof Type]?: Type[Property];
};

interface IPerson09 {
  name: string;
  readonly height: number;
  age: number;
}

type newPerson09 = MapPerson09<IPerson09>;
type newPerson09_1 = MapPerson09<IPerson09>;
