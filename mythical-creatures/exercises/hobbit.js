function createHobbit(name = 'unknown', age = 0) {
  const isAdult = age > 32;
  const isOld = age > 100;
  return{
    name: name,
    age: age,
    isAdult: isAdult,
    isOld: isOld,
    acquaintances: [],
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age++ ;
  hobbit.isAdult = hobbit.age > 32;
  hobbit.isOld = hobbit.age > 100;
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  } else {
    return 'You can\'t have it!';
  }
}

function meetPeople(person, newAcquiantances) {
  for (var i = 0; i < newAcquiantances.length; i++) {
    person.acquaintances.push(newAcquiantances[i]);
  }
  return person;
}

function findFriends(person) {
  var friends = []
  for (var i = 0; i < person.acquaintances.length; i++) {
    if (person.acquaintances[i].relationship === 'friend') {
      friends.push(person.acquaintances[i].name);
    }
  }
  return friends;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}