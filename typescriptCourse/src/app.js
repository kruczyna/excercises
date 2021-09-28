var Department = /** @class */ (function () {
    function Department(n, chosenId) {
        this.employees = []; // mark methods and properties as 'private', so it's accessible only from inside of the class
        this.name = n;
        this.id = chosenId;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name + ' Department ID: ' + this.id);
    };
    //shortcut for the double initialization code:
    /*
    constructor(private employees: string[], public name: string) { -> you have to set public in the shortcut even it's a default in the non-shortcut way
  
    }
    */
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting', 'A1');
accounting.addEmployee('Victoria');
accounting.addEmployee('Nancy');
accounting.printEmployeeInfo();
accounting.describe();
// accounting.employees[5] = 'Constantin'; // -> this could add another employee if the property is not set to private
// this keyword refers to the thing which is responsible for calling the method
//  EXAMPLE:
var accountingCopy = { name: 'Fixed!', describe: accounting.describe }; // -> Fixed accountingCopy
// accountingCopy.describe(); // -> (if not this in describe method in Department class) undefined, because this refers to the "accountingCopy" which has no string passed in it
