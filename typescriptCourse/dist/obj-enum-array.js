"use strict";
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]; // overwritting type casting and assigning a tuple to the role property
// } = {
//   name: 'Victoria',
//   age: 31,
//   hobbies: ['Sports', 'Reading'],
//   role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// enum Role {
//   ADMIN = 5, READ_ONLY, AUTHOR  // start the count from 5 instead of 0
// };
const person = {
    name: 'Victoria',
    age: 31,
    hobbies: ['Sports', 'Reading'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('This person is an admin');
}
for (const hobbies in person.hobbies) {
    console.log(hobbies);
}
let someObject; // any value, but it must be an array, so [2, 3, 'string'] is ok, but 2, 3, 'string' is not
