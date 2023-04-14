function createBirthday(name, month, day) {
	return birthday = {
		name: name,
		month: month,
		day: day
	}
}

function celebrateBirthday(birthday) {
	return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, month) {
	var birthdayCount = [];
	for (var i = 0; i < birthdays.length; i++) {
		if (birthdays[i].month === month) {
			birthdayCount.push(birthdays[i]);
		}
	}
	return birthdayCount.length;
}

// iterate over array
// if month === birthdays[i].month, push into new array
// return lenght of new array

module.exports = { 
	createBirthday,
	celebrateBirthday,
	countBirthdays
 };