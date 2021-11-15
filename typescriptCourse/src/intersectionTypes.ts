type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['Create server'],
  startDate: new Date()
};


type Combined = string | number;
type Numberic = number | boolean;

// intersecting -> Universal now is type of number
type Universal = Combined & Numberic;


// other way of doing it with interfaces:
interface Fruit {
  type: string,
  fresh: boolean;
}

interface Vegetable {
  type: string;
  isYummy: boolean;
}

interface FruitAndVegetable extends Fruit, Vegetable { };

const f1: FruitAndVegetable = {
  type: 'Strawberry',
  isYummy: true,
  fresh: true
};
