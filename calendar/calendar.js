function createEvent(title, month, day) {
    var calenderEvent = {
        title,
        month,
        day
    }
    if (calenderEvent.day > 31 || calenderEvent.day <= 0){
        return `Error: ${calenderEvent.day} is not a valid day`
    }
    return calenderEvent;
}

function createCalendar(owner, events) {
    var calender = {
        owner,
        events
    }
    return calender;
}

function reportMonthlyEvents(calender, month) {
    console.log(calender);
    var monthlyEvents = [];
    for (var i = 0; i < calender.events.length; i++) {
        if (calender.events[i].month === month) {
            monthlyEvents.push(calender.events[i]);
        }
    }
    return monthlyEvents;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
  };