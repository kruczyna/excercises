
// mutate const array
const s = [5, 6, 7];
s[1] = 45;
console.log(s);
/* Using the const declaration only prevents reassignment of the variable identifier.
Like all arrays, the array elements in s are mutable */

// freeze an object
const person = {
  name: "Lucy",
  age: 28
}
Object.freeze(person)
person.age = 89 // this will not alter the person obj
person.newProp = "Test" // this will not alter the person obj
console.log(person); // object stays the same
/* Once the object is frozen, you can no longer add, update, or delete properties from it.
Any attempt at changing the object will be rejected without an error. */

