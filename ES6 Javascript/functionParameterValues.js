/* default value for a parameter
will add 1 to the number if value is not specified */
const increment = (number, value=1) => number + value;

console.log(increment(3, 2)) // 5
console.log(increment(3)) // 4

// rest parameter with a function
function manyArguments (...manyThings) {
  console.log(manyThings.length)
}

let aString = "kittyCat"

manyArguments(+1, "string", 3.1231231, {"item": "something"}, ["somethingElse"], `${aString}`) // 6

/* we'll have two more console logs with 2 and 4 output
since manyArguments function will be executed first
and then we'll have 4 since it's also counted in the mother manyArguments call */
manyArguments(+1, "string", {"item": "something"}, manyArguments("jest", "something")) // 3


const ladyNames = ['MARY', 'JANE', 'SARA', 'TARA', 'JANICE'];
let names;

names = [...ladyNames]; // spread operator only works in-place, like in an argument to a function or in an array literal
console.log(names) // [ 'MARY', 'JANE', 'SARA', 'TARA', 'JANICE' ]

// Destructuring Assignment
const user = { name: 'John Doe', age: 34 };
const { name, age } = user; /* the name and age variables will be created and assigned the values of their respective values from the user object */
// remember to assign the destructed object to a variable
// { name, age } = user <- this will not work

/* Destructuring allows you to assign a new variable
name when extracting values. You can do this by putting the new
name after a colon when assigning the value */
const { name: newName, age: newAge } = user


const LOCAL_FORECAST = {
  yesterday: { low: 10, high: 30 },
  today: { low: 6, high: 28 },
};

/* extract the values of object properties, change their value
and assign them to variables with the same name */
const { today: {low : lowToday, high: highToday} } = LOCAL_FORECAST

// mixing destructing with rest parameter
const [a, b, ...otherValues] = [10, 20, 30, 40, 50];
console.log(otherValues); // [30,40,50]

// swaping values when destructing an array
let a = 8, b = 6;
[a, b] = [b, a]
