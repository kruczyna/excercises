"use strict";
const u1 = { name: 'Max', age: 30 };
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
;
const combinedAges = combine(30, 40, 'as-number');
console.log(combinedAges);
const combinedStringAge = combine('30', '40', 'as-number');
console.log(combinedStringAge);
const combinedNames = combine('Amanda', 'Victoria', 'as-text');
console.log(combinedNames);
