function createEvent(title, month, day) {
	var event = {
		title: title,
		month: month,
		day: day
	}

	if (event.day < 1 || event.day > 31) {
		return `Error: ${event.day} is not a valid day`;
	} else {
		return event;
	}
}

function createCalendar(owner, events) {
	return calendar = {
		owner: owner,
		events: events
	}
}

function reportMonthlyEvents(calendar, month) {
	var monthlyEvents = [];

	for (var i = 0; i < calendar.events.length; i++) {
		if (month === calendar.events[i].month) {
			monthlyEvents.push(calendar.events[i]);
		}
	}

	return monthlyEvents;
}


module.exports = { 
	createEvent,
	createCalendar,
	reportMonthlyEvents
 };