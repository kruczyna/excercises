// The function myFun will return the string Head because the local version of the variable is present.
var someVar = 'Hat';
function myFun() {
  var someVar = 'Head';
  return someVar;
}

// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
