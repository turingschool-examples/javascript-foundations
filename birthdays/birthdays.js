function createBirthday(name, month, day) {
  return {
    name,
    month,
    day
  }
}

function celebrateBirthday(birthday) {
  birthdayMonth = birthday.month
  birthdayDay = birthday.day

  stringMonth = birthdayMonth.toString()
  stringDay = birthdayDay.toString()

  return `Today is ${stringMonth}/${stringDay}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdaysArray, month) {
  var birthdayCount = 0 
  birthdayMonthArray = []

  birthdaysArray.forEach(birthday => {
    birthdayMonthArray.push(birthday.month)
  })

  birthdayMonthArray.forEach(birthdayMonth => {
    if (birthdayMonth == month) {
      birthdayCount += 1
    }
  });
  
  return birthdayCount
}

module.exports = {  
  createBirthday,
  celebrateBirthday,
  countBirthdays
};