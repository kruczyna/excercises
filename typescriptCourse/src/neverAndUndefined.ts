let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; -> error: Type 'unknown' is not assignable to type 'string'.

// to assign a value to a fixed type with unknown we need some extra type checking:
if (typeof userInput === 'string') {
  userName = userInput; // no error - make sure to have a string if you want to work with a string
}
// unknown better than any since it makes sure that you have at least some type checking as an example above

function generateError(msg: string, errorCode: number): never { // this function never produces a value since it crashed the script/part of the script
  throw { message: msg, errorCode: errorCode };
}

function whileLoop(): never { // this will also never produce a value since it is a never ending loop
  while (true) { }
}

generateError('An error occured!', 500); // never returns anything
