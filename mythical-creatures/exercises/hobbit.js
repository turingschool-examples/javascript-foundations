function createHobbit(name, age) {
  var hobbit = {
    name: name ? name : 'unknown',
    age: age ? age : 0,
    isAdult: age <= 32 ? false : true,
    isOld: age > 100 ? true : false,
  } 
  return hobbit;
}


function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  if (hobbit.age <= 32) {
    hobbit.isAdult = false
  } else {
    hobbit.isAdult = true
  };
  if (hobbit.age >= 101) {
    hobbit.isOld = true
  } else {
    hobbit.isOld = false
  }
  return hobbit;
};



module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}