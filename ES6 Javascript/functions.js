
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

// changing copy and not changing the reference
function print_number(num) {
  num++
  console.log(num)
}

var n = 1

print_number(n) // output 2
print_number(n) // output 2
print_number(n) // output 2

/* Stackoverflow example
https://stackoverflow.com/questions/14409985/adding-a-property-to-a-class-in-javascript */
function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num); // 10
console.log(obj1.item); // changed -> we're accesing the item in the b object, therefore it's changed.
// We're telling that the "b" box shoud change the "item"
console.log(obj2.item); // unchanged
// to są referencje

