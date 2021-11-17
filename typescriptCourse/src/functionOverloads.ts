type Combinable2 = string | number;

function add(a: string, b: string): string;
function add(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const shouldBeString = add('Max', 'Jonah');
shouldBeString.split(' '); // no error since function overload tells that: function add(a: string, b: string): string;


// const shouldBeString = add('Max', 'Jonah'); // if it's like that we can not do shouldBeString.split(' ') although we know that this will return a string
/**
 * we can do that:
 * const shouldBeString = add('Max', 'Jonah') as string
 * shouldBeString.split(' ')
 * This will not return error since we casted the type
 * BUT, we can do a function overload like this:
 * function add(a: number, b: number): number
 * It tells TS that if add function receives two numbers, the return type will be a number
 */

