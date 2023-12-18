function createHobbit(name1, age1) {
  var hobbit = {
    name: name1 || 'unknown',
    age: age1 || 0,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  return hobbit
};

function celebrateBirthday(hobbit) {
  hobbit.age ++;
  if(hobbit.age >= 33) {
    hobbit.isAdult = true
  }
  if(hobbit.age >= 101) {
    hobbit.isOld = true
  }
  return hobbit;
};

function getRing(hobbit) {
  if(hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  } else {
    return `You can't have it!`;
  }
};

function meetPeople(hobbit, friend) {
  for(var i = 0; i < friend.length; i++) {
  hobbit.acquaintances.push(friend[i]);
  }
  return hobbit;
};

function findFriends(hobbit) {
  var people = hobbit.acquaintances;
  var friends = [];
  for(var i = 0; i < people.length; i++) {
    if(people[i].relationship === 'friend') {
        friends.push(people[i].name);
    }
  }
  return friends
};

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}