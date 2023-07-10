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

module.exports = {
  createBirthday,
  celebrateBirthday
};