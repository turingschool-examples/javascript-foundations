function createHobbit(name, age) {
  var hobbit = {
    name: name ? name : 'unknown',
    age: age ? age : 0,
  } 
  return hobbit;
}

module.exports = {
  createHobbit, 
  // celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}