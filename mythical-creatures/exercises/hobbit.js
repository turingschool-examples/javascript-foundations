

module.exports = {
  createHobbit, 
  // celebrateBirthday, 
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
    age: age
  }
  if (name === undefined) {
    hobbit.name = 'unknown';
  }
  if (age === undefined) {
    hobbit.age = 0;
  }
  return hobbit;
};