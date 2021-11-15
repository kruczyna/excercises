interface Named {
  readonly name: string;
}

interface Greeting {
  greet(phrase: string): void;
}

class Person implements Greeting, Named {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + '' + this.name);
  }
}

let user2: Person;

user2 = new Person('Victoria');
user2.name = 'Max';

user2.greet('Hi there - I am ');
