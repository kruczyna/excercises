
// this is saying, that the type has to be an object, but we do not care what will be inside that object
// you can use in there union types, your own type etc., you're flexible
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj2 = merge({ name: 'Max' }, { value: 3 }, 30); -> ERROR since 30 is not an object
const mergedObj3 = merge({ name: 'Max' }, { value: 3 });
