function createHobbit(name = 'unknown', age = 0, isAdult = true, isOld = true) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: isAdult,
    isOld: isOld,
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

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}