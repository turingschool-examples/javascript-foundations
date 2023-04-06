function createBirthday(name, month, day) {
    var person = {
        name: name,
        month: month,
        day: day
    }
    return person;
}

function celebrateBirthday(person) {
    var birthdayMessage = `Today is ${person.month}/${person.day}! Happy birthday, ${person.name}!`
    return birthdayMessage;
}

function countBirthdays(birthdays, month) {
    var count = 0;
    for (var i = 0; i < birthdays.length; i++){
        if (birthdays[i].month === month){
            count += 1;
        }
    } return count;
}

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays,
  };