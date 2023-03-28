
function createHobbit(name, age) {
  var hobbit = {
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  if (age) {
    hobbit.age = age
  } else {
    hobbit.age = 0
  }
  if (name) {
    hobbit.name = name
  } else {
    hobbit.name = 'unknown'
  }
  return hobbit
}

function celebrateBirthday(hobbit) {
  hobbit.age++
  if (hobbit.age >= 33) {
    hobbit.isAdult = true
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit) {
  var message
  if (hobbit.name === 'Frodo') {
    message = "Here is the ring!"
  } else {
    message = "You can't have it!"
  }
  return message
}

function meetPeople(hobbit, people) {
  for ( i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i])
  }
  return hobbit
}

function findFriends(hobbit) {
  var friends = []
  for ( i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name)
    }
  }
  return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}