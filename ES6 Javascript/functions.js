
class Test{
  constructor(){
    this.number = 0
  }
  printHello(){
    console.log("Hello!")
    this.number++
    return this
  }

  printBye(){
    console.log("Bye!")
    this.number++
    return this
  }

  show(num = 5) {
    this.number = num + 2
  }
}

const newTest = new Test()

// chain methods
let test = newTest.printHello().printBye().printBye().printBye().printHello() // will print out Bye and Hello five times in total

let testNumber = test.number // number will be 5, since we incresed the value of number when executing multiple methods (number++)

test.number = 2 // this is dangerous because you're changing the property directly in the object itself
// the newTest.number will be 2 and the test.number will be 2 as well
