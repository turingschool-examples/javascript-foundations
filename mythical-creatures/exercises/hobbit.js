function createHobbit(name = 'unknown', age = 0) {
  const isAdult = age > 32;
  const isOld = age > 100;
  return{
    name: name,
    age: age,
    isAdult: isAdult,
    isOld: isOld
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age +=1;
  hobbit.isAdult = hobbit.age > 32;
  hobbit.isOld = hobbit.age > 100;
  return hobbit
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}