const dayjs = require('dayjs');

function setDate(date) {
  const test = new Date(date).toLocaleDateString('en-US').split('/');
  console.log(test);
}

// setDate(12.12.2000);

// const todayDate = new Date().toLocaleDateString();
// console.log(todayDate);

// let mydate = new Date();
// console.log(mydate);

// addFormat('15-08-1990');

// var GivenDate = dayjs('02-02-2222').format('DD-MM-YYYY');
// var CurrentDate = new Date();
// GivenDate = new Date(GivenDate);

// console.log(GivenDate);
// console.log(CurrentDate);

// if (GivenDate > CurrentDate) {
//   console.log('Given date is greater than the current date.');
// } else {
//   console.log('Given date is not greater than the current date.');
// }

// var CurrentDate = new Date();
// var dateCompare = dayjs('04-06-2021').format('DD-MM-YYYY');

// dateCompare.isBefore(CurrentDate);
// GivenDate = new Date(GivenDate);
// console.log(dayjs('04-06-2021'));
// console.log('1111', dateCompare);
// console.log('2222', CurrentDate);
// console.log(dayjs('2019-01-25').format('DD/MM/YYYY'));
// console.log(dateCompare.isBefore(CurrentDate));

// if (GivenDate > CurrentDate) {
//   console.log('Given date is greater than the current date.');
// } else {
//   console.log('Given date is not greater than the current date.');
// }
var birthdate = '12-06-2021';
const shit = birthdate.split('-');
const days = shit[0];
const month = shit[1];
const year = shit[2];
const receivedDate = year + '-' + month + '-' + days;

const today = dayjs().format('YYYY-MM-DD');

console.log(today);

console.log(Boolean(receivedDate > today));

if (today > receivedDate) {
  console.log('yay');
}
date2 = new Date();
console.log('CCCCCC', date2.toLocaleDateString());

// const date = dayjs(birthdate);
// const dateFormatted = date.format('YYYY-MM-DD');
// var CurrentDate = dayjs();
// console.log(dateFormatted);
// if (dateFormatted == CurrentDate) {
//   console.log('shit');
// }
// const yes = dateFormatted.isBefore(dayjs('2011-01-01'));

const shittt = dayjs().subtract(1, 'day');
console.log('LLLLL', shittt);
