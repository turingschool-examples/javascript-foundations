function createHobbit(name) {
  var hobbit = {
    name: name,
    age: 0,
    isAdult: false,
    isOld: false
  }
  return hobbit
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1
  if (hobbit.age >= 33) {
    hobbit.isAdult = true
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
}

module.exports = {createHobbit, celebrateBirthday, getRing}