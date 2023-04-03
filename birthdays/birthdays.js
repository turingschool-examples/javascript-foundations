function createBirthday(name, month, day) {
    var birthdays = {
        name: name,
        month: month,
        day: day,
    }
    return birthdays;
}

function celebrateBirthday (birthday){
var name = birthday.name
var month = birthday.month
var day = birthday.day
return `Today is ${month}/${day}! Happy birthday, ${name}!`
}

function countBirthdays(birthdays, month) {
    birthdaysCounter = 0;
    for (var i = 0; i < birthdays.length; i++) {
        if (birthdays[i].month === month) {
            birthdaysCounter++;
        }
    }
    return birthdaysCounter;
}
module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };