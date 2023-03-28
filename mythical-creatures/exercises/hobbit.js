function createHobbit(name, age) {
  if (!age) {
    age = 0;
  }

  if (!name){
    name = 'unknown';
  }

  var hobbit = {};
  hobbit.name = name;
  hobbit.age = age;
  hobbit.isAdult = false;
  hobbit.isOld = false;
  hobbit.acquaintances = [];

  return hobbit;
}

function celebrateBirthday(hobbit) {
  hobbit.age++;

  if (hobbit.age > 32) {
    hobbit.isAdult = true;
  } 
  
  if (hobbit.age >= 101) {
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

function meetPeople(hobbit, stranger) {
  for (var i = 0; i < stranger.length; i++) {
    hobbit.acquaintances.push(stranger[i]);
  }

  return hobbit;
}

function findFriends(hobbit) {
  var friends = [];
  for (var i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name)
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