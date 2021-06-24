class SomeClass {
  print() {
    console.log(this.someProperty);
  }
}

const someClass = new SomeClass();
someClass.print(); // output: undefined

someClass.someProperty = 'Test';
someClass.print(); // output: Test
