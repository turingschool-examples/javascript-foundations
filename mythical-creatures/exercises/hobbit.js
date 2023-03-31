

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}

// goal: write a function that creates an object for a Hobbit with name and age as keys. 

// input: name, age. Two parameters
// output: object with name and age key value pairs. age should start out at 0 if not specified. name should return unknown if not specified.

function createHobbit(name, age) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: false,
    isOld: false
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

