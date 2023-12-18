function createBirthday(name, month, day) {
  var birthday = {
    name: name,
    month: month,
    day: day
  }
  return birthday;
};

function celebrateBirthday(birthday) {
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`;
};

function countBirthdays(people, month) {
  var birthdayCount = 0;
  for(var i = 0; i < people.length; i++) {
    if(people[i].month === month) {
      birthdayCount ++
    }
  }
  return birthdayCount;
};

module.exports = {
  createBirthday,
  celebrateBirthday,
  countBirthdays
};