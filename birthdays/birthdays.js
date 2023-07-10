function createBirthday(name, month, day) {
  return {
    name: name,
    month: month,
    day: day
  }
}

function celebrateBirthday(birthday) {
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, month) {
  count = 0;
  for (i = 0; i < birthdays.length; i++) {
    if (birthdays[i].month == month) {
      count += 1;
    }
  }
  return count
}

module.exports = {
  createBirthday,
  celebrateBirthday,
  countBirthdays
};