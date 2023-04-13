function createBirthday(name, month, day) {
    var birthdayInfo = {
        name,
        month,
        day
    }
    return birthdayInfo;
};

function celebrateBirthday(birthdayInfo) {
    return `Today is ${birthdayInfo.month}/${birthdayInfo.day}! Happy birthday, ${birthdayInfo.name}!`
};

function countBirthdays(birthdaysArray, month) {
    var counter = 0;
    for (var i = 0; i < birthdaysArray.length; i++) {
        if (birthdaysArray[i].month === month)
        counter += 1;
    }
    return counter;
};

module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };