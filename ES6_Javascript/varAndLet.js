// note that i is stored in a global variable
for (var i = 0; i < 3; i++) {
/* the stored function will always refer to the value
of the updated global i variable, so the boolean won't be true in the if statement.
The printNumTwo() returns the global i and not the value i had when the function
was created in the for loop */
  if (i === 2) {
    printNumberTwo = function() {
      return i;
    };
  }
}
console.log(printNumberTwo()); // print's out 3

// note that i is NOT stored in a global variable
for (let i = 0; i < 3; i++) { // returns the local value of the i
  if (i === 1) {
    printNumberOne = function() {
      return i;
    };
  }
}
console.log(printNumberOne()); // print's out 1

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is:', i);
  }
  console.log('Function scope i is:', i);
  return i;
}

checkScope()
