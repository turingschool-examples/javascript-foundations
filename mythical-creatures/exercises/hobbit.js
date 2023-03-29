function createHobbit(name, age) {
  var hobbit = {
    name: name || 'unknown',
    age: age || 0,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  return hobbit;
};

function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  if (hobbit.age > 32) {
    hobbit.isAdult = true;
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true;
  }
  return hobbit;
};

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  } else {
    return 'You can\'t have it!';
  }
};

function meetPeople(hobbit, people) {
  
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  // findFriends
}