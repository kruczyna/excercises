var myStr = 'Bob';
myStr[0] = 'J';

/* cannot change the value of myStr to Job, because the contents of myStr
cannot be altered. This does not mean that myStr cannot be changed,
just that the individual characters of a string literal cannot
be changed. The only way to change myStr would be to assign it with a new string
*/
var myStr = 'Bob';
myStr = 'Job';

// Unlike strings, the entries of arrays are mutable and can be changed freely
var ourArray = [50, 40, 30];
ourArray[0] = 15;

// Access Multi-Dimensional Arrays With Indexes
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[2][1]; // 8
