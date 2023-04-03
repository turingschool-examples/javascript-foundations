

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}

// goal: write a function that creates an object for a Hobbit with name and age as keys. 

// input: name, age. Two parameters
// output: object with name and age key value pairs. age should start out at 0 if not specified. name should return unknown if not specified.

function createHobbit(name, age) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  if (name === undefined) {
    hobbit.name = 'unknown';
  }
  if (age === undefined) {
    hobbit.age = 0;
  }
  maturityLevel(hobbit);
  return hobbit;
};

function maturityLevel(hobbit) {
  if (hobbit.age > 32) {
    hobbit.isAdult = true;
  } 
  if (hobbit.age >= 101) {
    hobbit.isOld = true;
  }
};

function celebrateBirthday(hobbit) {
  hobbit.age++;
  maturityLevel(hobbit);
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
  for (var i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i]);
  }
  return hobbit;
};

function findFriends(socialHobbit) {
  var friends = [];
  for (var i = 0; i < socialHobbit.acquaintances.length; i++) {
    if (socialHobbit.acquaintances[i].relationship === "friend") {
      friends.push(socialHobbit.acquaintances[i].name);
    }
  }
  return friends;
};
