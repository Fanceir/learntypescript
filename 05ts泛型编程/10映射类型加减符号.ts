type MapPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property];
};

interface IPerson {
  name: string;
  age?: number;
  readonly height: number;
}

//
type IPersonRequired = MapPerson<IPerson>;

const p010: IPersonRequired = {
  name: "fanceir",
  age: 20,
  height: 1.8,
};

console.log(p010);
export {};
