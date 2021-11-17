// if function is defined like: function merge(objA: object, objB: object)
// we can not access like this the mergedObj.name, because TS only knows, that there's an object, but it doesn't know it's properties. They are not carried along the way
// const mergedObj = merge({ name: 'Max' }, { value: 3 })
// mergedObj.name
// we can do:
// const mergedObj = merge({ name: 'Max' }, { value: 3 }) as {name: string, value: number}; -> that's quite cumbersome, though
// -> object is a highly unspecific type

function merge<T, U>(objA: T, objB: U) { // intersection of two object types -> we're telling TS that there two parameters can and often will be of different types. We're not working just with some random object type
  // there types are set dynamically while we call them, we do not have to be strict and tell, that the obj has to have a name property for example
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { value: 3 }); // hoover over mergedObj and see that
mergedObj.name; // -> this works now

const mergedObj2 = merge<{ name: string; }, { value: number; }>({ name: 'Max' }, { value: 3 }); // redundant, but you can fill in specific types manually
