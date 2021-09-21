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

enum Role {
  ADMIN, READ_ONLY, AUTHOR
};

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

let someObject: any[]; // any value, but it must be an array, so [2, 3, 'string'] is ok, but 2, 3, 'string' is not

