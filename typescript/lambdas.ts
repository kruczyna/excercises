const test = () => {
  console.log("sdnvisdn")
}
test()

const manager = () => () => {
  console.log("lllllll")
}

const cos = manager()
cos()


manager()()

class A {
print() {
  console.log('print() inside A')
}
}

class B {
gimme() {
  return new A
}
}

const b = new B
const a = b.gimme()
a.print()

b.gimme().print()
