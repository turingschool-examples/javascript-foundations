function createHobbit(name = 'unknown', age = 0, isAdult = false, isOld = false, acquaintances = []) {
  return {
    name,
    age,
    isAdult,
    isOld,
    acquaintances 
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1
  if (hobbit.age <= 32) {
    hobbit.isAdult = false;
  } else if (hobbit.age <= 100) {
    hobbit.isAdult = true;
    hobbit.isOld = false;
  } else {
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name == `Frodo`) {
    return 'Here is the ring!'
  } else if (hobbit.name != 'Frodo') {
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, people) {
  people.forEach(person => {
    hobbit.acquaintances.push(person)
  });
  return hobbit
}

function findFriends(hobbit) {
  let friends = []
  hobbit.acquaintances.forEach(person => {
    if(person.relationship == 'friend') {
      friends.push(person.name)
    }
  }); 
  return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}