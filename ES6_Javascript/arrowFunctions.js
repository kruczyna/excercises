// this
const kittenName = () => "Bubbles"

/* is the same as the code below
because there's no function body
and the function only return a value */
const kittenName2 = () => {
  var kittenOne = "Bubbles"
  return kittenOne
}

/* if an arrow function has a single parameter,
the parentheses enclosing the parameter may be omitted. */
const multiplyByTwo = value => value * 2

// arrow function in an arrow function
const hello = a => {
  var world = () => console.log("heeelloooo" + `${a}`)
  // have to retrun, because I'll have a TypeError "[const name] is not a function"
  return world
}

const one = hello("j")

// this will return undefined, because the inner arrow function doesn't return any value
// const oeasu = one()
// this will return
one()

const hello2 = a => {
  return 15
}
const returnNumber = hello2("a")

const hello3 = a => {
  var world = 15
  return world
}

const returnNumber2 = hello3("a")

console.log(returnNumber)


// will output mapped parameter value
let testObjectOutput = params => ({foo: `${params}`})
