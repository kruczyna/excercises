function doTest(string) {
  let regex = /\d{2}/;
  let result = string.match(/\d{2}/).map(function (value) {
    return value;
  });
  let t = result.toString();
  console.log(t);
}
doTest('2874927');

function doTest2(string) {
  let result = string.slice(0, 2);
  let t = result.toString();
  console.log(t);
}
doTest2('2874927');

// function doNextTest(string) {
//   let regex = /\d{2}/;
//   let result = regex.test(string); // true
//   // let result = string.match(/\d{2}/).map(function (value) {
//   //   return value;
//   // });
//   console.log(result);
// }

// doNextTest('619283982');
