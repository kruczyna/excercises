const Statuses = {
  FirstCode: '11',
  SecondCode: '67',
  ThirdCode: '82',
  FourthCode: '19',
  FifthCode: '123',
}

const Messages = {
  FirstCode: 'First',
  SecondCode: 'Second',
  ThirdCode: 'Third',
  FourthCode: 'Fourth',
  FifthCode: 'Fifth',
}

const keys = Object.keys(Statuses)
const values = Object.values(Statuses)

function checkifOneOfErrorCodes(){
  Object.values(Statuses).forEach((e) => {
    return e.toString()
  });
}

const testus = Object.values(Statuses).forEach((e) => {
  return e
});

const number = '19'
if (Object.values(Statuses).some((el) => el === number)) {
  console.log('Some of them are taller than 185')
}

const tutu = Object.values(Statuses).some((el) => el === number)
if (tutu === true) {
  console.log('3954309')
}

const toto = Object.values(Statuses).some((element) => element === number)
console.log(toto)

const juju = Object.keys(Statuses).find(key => Statuses[key] === number);
console.log(juju)

console.log(checkifOneOfErrorCodes())
console.log(keys, values)
