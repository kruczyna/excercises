"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; -> error: Type 'unknown' is not assignable to type 'string'.
// to assign a value to a fixed type with unknown we need some extra type checking:
if (typeof userInput === 'string') {
    userName = userInput; // no error - make sure to have a string if you want to work with a string
}
// unknown better than any since it makes sure that you have at least some type checking as an example above
function generateError(msg, errorCode) {
    throw { message: msg, errorCode: errorCode };
}
function whileLoop() {
    while (true) { }
}
generateError('An error occured!', 500); // never returns anything
