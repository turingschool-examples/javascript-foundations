function createHobbit(name = 'unknown', age = 0, isAdult = true, isOld = true, acquaintances) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: isAdult,
    isOld: isOld,
    acquaintances: []
  }

  if (hobbit.age < 33) {
    hobbit.isAdult = false;
    hobbit.isOld = false;
  } else if (hobbit.age < 101) {
    hobbit.isOld = false;
  }
  
  return hobbit;
}
 
function celebrateBirthday(hobbit) {
  hobbit.age += 1;

  if (hobbit.age > 32) {
    hobbit.isAdult = true;
  }

  if (hobbit.age > 100) {
    hobbit.isOld = true;
  }

  return hobbit;
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  } else {
    return 'You can\'t have it!';
  }
}

function meetPeople(hobbit, people) {
  for (var i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i]);
  }
  return hobbit;
}

function findFriends(hobbit) {
  friends = [];

  for (var i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name);
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