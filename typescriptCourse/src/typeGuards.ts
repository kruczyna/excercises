type Combine = string | number;
type Numbered = number | boolean;

type Universaled = Combine & Numbered;

// we have to check the a and b parameter to see their type since both number and string is allowed.
function add(a: Combine, b: Combine) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}


type Admin2 = {
  name: string;
  privileges: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee2 | Admin2;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name ' + emp.name);
  // check if privileges property exists on employee
  if ('privileges' in emp) {
    console.log('Privil ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start date ' + emp.startDate);
  }
}

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // check if vehicle is based on Truck class
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000);
  }

}
