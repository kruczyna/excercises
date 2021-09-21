function add2(n1: number, n2: number) {
  return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => { // we do not have to state the type, since it is already defined in the function itself (cb function accepting a number)
  console.log(result);
});

function printResult(number: number) { // return type -> void: it doesn't return anything, it does not have a return statement
  console.log('Result: ' + number);
}

function printResult2(number: number): undefined { // error because a function can not return nothing
  console.log('Result: ' + number);
  return; // if you want to use undefined, you have to have a return statement even without returning a value
}

printResult(add2(5, 12));
console.log(printResult(add2(5, 12))); // in JS we get undefined

let someValue = undefined; // undefined is a valid type in TS

let combineValues: (a: number, b: number) => number; // any function that takes two parameters where each parameter is a number and returns a parameter

combineValues = add2;
// combineValues = printResult; -> error, since it's a function, but doesn't match the function parameters and return value
console.log(combineValues(8, 8));
