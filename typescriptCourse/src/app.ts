class Department {
  name: string;
  private employees: string[] = []; // mark methods and properties as 'private', so it's accessible only from inside of the class
  // Can't access it like this: "accounting.employees[5] = 'Constantin';" anymore
  // everything is public by default
  private readonly id: string; // property only initialized once and should not be changed after

  constructor(n: string, chosenId: string) {
    this.name = n;
    this.id = chosenId;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name + ' Department ID: ' + this.id);
  }

  //shortcut for the double initialization code:
  /*
  constructor(private employees: string[], public name: string) { -> you have to set public in the shortcut even it's a default in the non-shortcut way

  }
  */

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

const accounting = new Department('Accounting', 'A1');
accounting.addEmployee('Victoria');
accounting.addEmployee('Nancy');
accounting.printEmployeeInfo();

accounting.describe();
// accounting.employees[5] = 'Constantin'; // -> this could add another employee if the property is not set to private

// this keyword refers to the thing which is responsible for calling the method
//  EXAMPLE:

const accountingCopy = { name: 'Fixed!', describe: accounting.describe }; // -> Fixed accountingCopy
// accountingCopy.describe(); // -> (if not this in describe method in Department class) undefined, because this refers to the "accountingCopy" which has no string passed in it
