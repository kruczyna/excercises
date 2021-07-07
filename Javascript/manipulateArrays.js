// Easy way to append data to the end of an array is via the push() function.

var arr1 = [1, 2, 3];
arr1.push(4); // [1, 2, 3, 4]

var arr2 = ['Stimpson', 'J', 'cat'];
arr2.push(['happy', 'joy']); // ["Stimpson", "J", "cat", ["happy", "joy"]]

//.pop() is used to pop a value off of the end of an array
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]

// .shift() removes the first element of an array
var ourArray = ['Stimpson', 'J', ['cat']];
var removedFromOurArray = ourArray.shift();
console.log(ourArray); // ["J", ["cat"]]
console.log(removedFromOurArray); // Stimpson

// unshift() adds the element at the beginning of the array.
var myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.unshift(['Paul', 35]);
