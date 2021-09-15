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
var person = {
    name: 'Victoria',
    age: 31,
    hobbies: ['Sports', 'Reading'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('This person is an admin');
}
for (var hobbies in person.hobbies) {
    console.log(hobbies);
}
