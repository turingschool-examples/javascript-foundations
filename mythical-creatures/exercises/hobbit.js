function createHobbit(name, age) {
  var hobbit = {
    name: name || 'unknown',
    age: age || 0,
    isAdult: false,
    isOld: false,
    acquaintances: []
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

function meetPeople(hobbit, people) {
  for (var i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i])
  }
  return hobbit
}

function findFriends(hobbit) {
  var friends = []
  
  for(var i=0; i<hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name)
    }
  }
  return friends
}

module.exports = {createHobbit, celebrateBirthday, getRing, meetPeople, findFriends}