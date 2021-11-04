class Department {
  name: string;
  protected employees: string[] = []; // protected is like private, but it's making a method/property available in the main class and also in any that extends this one
  // private employees: string[] = []; // mark methods and properties as 'private', so it's accessible only from inside of the class
  // Can't access it like this: "accounting.employees[5] = 'Constantin';" anymore
  // everything is public by default
  private readonly id: string; // property only initialized once and should not be changed after

  constructor(n: string, chosenId: string) {
    this.name = n;
    this.id = chosenId;
  }

  static fiscalYear = 2020;
  // static methods and properties are detached from insstances
  // static method that help creates employees. We do not want to instanciate the whole Department just to call the utility method
  static createEmployee(name: string) {
    return { name: name };
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
    this.employees.push(employee); // possible since employees are protected in Department main class
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

class ITDepartment extends Department { // you can inherit froom only one class
  private lastReport: string | undefined;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) { // whenever you add your own constructor in a class that inherits from another class, you have to add super in the inheriting class and you have to execute it like a function
    super(id, 'ITDepartment'); // super here called the constructor of the base class and takes the arguments of the Department constructor -> this will call now the constructor of the base class deom inside the subclass
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push();
    // Property 'employees' is private and only accessible within class 'Department'
    // to override this
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const employee2 = Department.createEmployee('Shakira');

const accounting = new Department('Accounting', 'A1');
// can be new ITDepartment('Accounting', 'A1'); now since ITDepartment inherits from Department class
const it = new ITDepartment('IT2', ['Some report', 'Another report']);
it.mostRecentReport = 'This is the newest report!'; // use setter to assign value

console.log(it.mostRecentReport); // use getter is invoked like a property

console.log(it);
it.addEmployee('Max');
it.addEmployee('Sonia');

accounting.addEmployee('Victoria');
accounting.addEmployee('Nancy');
accounting.printEmployeeInfo();

accounting.describe();
// accounting.employees[5] = 'Constantin'; // -> this could add another employee if the property is not set to private

// this keyword refers to the thing which is responsible for calling the method
//  EXAMPLE:

const accountingCopy = { name: 'Fixed!', describe: accounting.describe }; // -> Fixed accountingCopy
// accountingCopy.describe(); // -> (if not this in describe method in Department class) undefined, because this refers to the "accountingCopy" which has no string passed in it

