function echo<Type>(item: Type): Type {
  return item
}
let test12 = echo('something')
let test66 = echo(23)
let test71 = echo({'key': 9, 'whatever': 'test'})

const arrlastNumber = (arr: number[]) => {
  return arr[arr.length - 1]
}

// the same as example above
const arrlastNumber2 = (arr2: Array<number>) => {
  return arr2[arr2.length - 1]
}

const result = arrlastNumber([ 1, 2, 3])
// const result2 = arrlastNumber2(['one', 'two', 'three']) -> can not do, since the array has to be a number

const arrlastNumberWithGeneric = <T>(arr: T[]) => {
  // <T>(arr: Array<T>) - works the same way
  return arr[arr.length - 1]
}

const result3 = arrlastNumberWithGeneric([ 1, 2, 3])
/*
If you do <T>(arr: Array[]), you'll have a TS error:
Generic type 'Array<T>' requires 1 type argument(s).ts
and one directly in the function:
const arrlastNumberWithGeneric: <unknown>(arr: Array[]) => any
*/

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const oneArray = makeArr(1, 'a') // union of string and number -> const makeArr: <number, string>(x: number, y: string) => [number, string]
const twoArray = makeArr('a', 'b') // Argument of type 'string' is not assignable to parameter of type 'number' if (x: number)
const threeArray = makeArr(1, 3)
// override the type, explicitly write the type
const fourArray = makeArr<string | null, number>('a', 1)


// set default type so you can eplicitly write down only one type of the parameter
const makeArr2 = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y]
}
const fiveArray = makeArr2<string | null>(null, 43)

const makeFullName = <T extends {firstName: string, lastName: string} >(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

const name1 = makeFullName({firstName: 'Vic', lastName: 'Kru', age: 12})
console.log(name1.fullName, name1.age) // fullName property is there along with added age property

interface Tab<T> {
  position: number,
  id: string,
  data: T,
}

type NewTab = Tab<number> // this is equivalent to:
/*
type NewTab = {
  position: number,
  id: string,
  data: number,  <- I passed the number here directly instead in the type
}
*/

type StringTab = Tab<string>
type ObjectTab = Tab<object>

// overwritting generics via <{ }>
